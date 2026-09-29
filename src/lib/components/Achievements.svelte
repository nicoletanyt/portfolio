<script>
  import { BookOpen, Braces, FlaskConical, Sigma, ExternalLink } from '@lucide/svelte'
  import data from '../data/portfolio.json'

  const filters = [
    { icon: Braces, label: 'coding' },
    { icon: BookOpen, label: 'academic' },
    { icon: FlaskConical, label: 'science' },
    { icon: Sigma, label: 'math' },
  ]
  const years = Object.keys(data.achievements).sort((a, b) => Number(b) - Number(a))

  let category = $state('')

  function toggleFilter(label) {
    category = category === label ? '' : label
  }
</script>

<section id="achievements" class="relative scroll-mt-20 py-20 sm:py-24 lg:py-28">
  <h2 class="mb-10 flex items-center gap-4 text-4xl font-semibold tracking-[-0.04em] after:h-0.5 after:flex-1 after:bg-linear-to-r after:from-ink after:to-transparent after:opacity-30 after:content-[''] sm:text-5xl">achievements</h2>

  <div class="mb-12 flex items-center gap-4 overflow-x-auto pb-3">
    <p class="shrink-0">filter:</p>
    {#each filters as filter (filter.label)}
      {@const Icon = filter.icon}
      <button
        type="button"
        class="inline-flex shrink-0 cursor-pointer items-center gap-2 rounded-lg border px-4 py-2.5 transition focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
        class:border-ink={category === filter.label}
        class:bg-paper={category === filter.label}
        class:border-transparent={category !== filter.label}
        class:bg-sky={category !== filter.label}
        aria-pressed={category === filter.label}
        onclick={() => toggleFilter(filter.label)}
      >
        <Icon size={19} />
        <span>{filter.label}</span>
      </button>
    {/each}
  </div>

  <div class="space-y-10">
    {#each years as year (year)}
      {@const items = category ? data.achievements[year].filter((item) => item.category === category) : data.achievements[year]}
      {#if items.length}
        <div class="grid grid-cols-[4rem_1px_minmax(0,1fr)] gap-5 sm:grid-cols-[5.5rem_2px_minmax(0,1fr)] sm:gap-7">
          <h3 class="sticky top-20 h-fit text-xl font-medium sm:text-[1.45rem]">{year}</h3>
          <div class="bg-linear-to-b from-ink to-ink/10" aria-hidden="true"></div>
          <ul class="space-y-4 pb-3">
            {#each items as item (item.name)}
              <li class="relative pl-[1.2rem] leading-[1.8] before:absolute before:top-[0.7rem] before:left-0 before:h-[0.38rem] before:w-[0.38rem] before:rounded-full before:bg-ink before:content-['']">
                <span>{item.name}</span>
                {#if item.link}
                  <a
                    href={item.link}
                    target="_blank"
                    rel="external noreferrer"
                    class="mt-2 inline-flex items-center gap-1.5 font-bold italic underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
                  >
                    {item.label}<ExternalLink size={15} />
                  </a>
                {/if}
              </li>
            {/each}
          </ul>
        </div>
      {/if}
    {/each}
  </div>
</section>
