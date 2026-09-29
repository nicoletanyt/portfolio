<script>
  import { Menu, X } from '@lucide/svelte'

  let { activePage = 'homepage' } = $props()
  let open = $state(false)

  const links = [
    { id: 'about-me', label: 'about me' },
    { id: 'projects', label: 'projects' },
    { id: 'achievements', label: 'achievements' },
    { id: 'involvement', label: 'involvement' },
    { id: 'contact-me', label: 'contact me' },
  ]
</script>

<div class="fixed top-0 right-0 left-0 z-50 flex h-16 items-center justify-between border-b border-ink/10 bg-paper/90 px-5 backdrop-blur-md lg:hidden">
  <a href="#homepage" class="flex items-center gap-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink" aria-label="Home" onclick={() => (open = false)}>
    <img src="/favicon.svg" alt="" class="h-9 w-9" />
    <span class="font-semibold tracking-tight">nicole tan</span>
  </a>
  <button
    type="button"
    class="grid h-11 w-11 place-items-center rounded-full border border-ink/20 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
    aria-label={open ? 'Close navigation' : 'Open navigation'}
    aria-expanded={open}
    onclick={() => (open = !open)}
  >
    {#if open}<X size={24} />{:else}<Menu size={24} />{/if}
  </button>
</div>

{#if open}
  <button
    class="fixed inset-0 z-40 bg-navy/25 backdrop-blur-sm lg:hidden"
    aria-label="Close navigation"
    onclick={() => (open = false)}
  ></button>
{/if}

<nav
  class={`fixed top-0 right-5 z-50 h-[min(78vh,42rem)] w-[min(19rem,calc(100vw-2.5rem))] bg-ink text-paper [clip-path:polygon(0_0,100%_0,100%_100%,52%_88%,0_100%)] transition-transform duration-[350ms] ease-out lg:right-20 lg:h-[min(85vh,43.75rem)] lg:w-60 lg:translate-y-0 ${open ? 'translate-y-0' : '-translate-y-[105%]'}`}
  aria-label="Main navigation"
>
  <div class="flex h-[88%] flex-col px-8 pt-4 lg:p-8">
    <button
      type="button"
      class="ml-auto grid h-11 w-11 place-items-center text-paper focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-paper lg:hidden"
      aria-label="Close navigation"
      onclick={() => (open = false)}
    >
      <X size={30} />
    </button>

    <a href="#homepage" class="grid w-fit place-items-center self-center rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-paper" aria-label="Home" onclick={() => (open = false)}>
      <img src="/favicon.svg" alt="" class="h-14 w-14" />
    </a>

    <div class="flex flex-1 flex-col justify-evenly py-5 lg:py-10">
      {#each links as link (link.id)}
        <a
          href={`#${link.id}`}
          class={`relative w-fit self-center text-[1.1rem] text-paper underline underline-offset-[0.35rem] transition-transform duration-200 before:absolute before:right-[calc(100%+0.45rem)] before:-translate-x-[0.35rem] before:opacity-0 before:transition-all before:duration-200 before:content-['>'] hover:translate-x-[0.35rem] hover:before:translate-x-0 hover:before:opacity-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-paper ${activePage === link.id ? 'translate-x-[0.35rem] before:translate-x-0 before:opacity-100' : ''}`}
          aria-current={activePage === link.id ? 'page' : undefined}
          onclick={() => (open = false)}
        >
          {link.label}
        </a>
      {/each}
    </div>
  </div>
</nav>
