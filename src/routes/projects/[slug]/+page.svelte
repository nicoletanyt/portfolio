<script>
  import { ArrowLeft, ExternalLink } from '@lucide/svelte'

  let { data } = $props()
</script>

<svelte:head>
  <title>{data.project.name} | nicole's portfolio</title>
  <meta name="description" content={data.project.description} />
</svelte:head>

<main class="mx-auto min-h-dvh w-full max-w-4xl px-5 py-16 sm:px-8 sm:py-24">
  <a href="/#projects" rel="external" class="inline-flex items-center gap-2 font-semibold underline decoration-2 underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink">
    <ArrowLeft size={18} /> back to projects
  </a>

  <article class="mt-16">
    <p class="mb-4 font-semibold text-ink/65">{data.project.language}</p>
    <h1 class="text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">{data.project.name}</h1>
    <p class="mt-8 max-w-2xl text-lg leading-8 sm:text-xl sm:leading-9">{data.project.description}</p>
    <a
      href={data.project.link}
      target="_blank"
      rel="external noreferrer"
      class="mt-10 inline-flex items-center gap-2 rounded-lg border border-ink bg-ink px-5 py-3 font-semibold text-paper transition-colors hover:bg-transparent hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
    >
      {data.project.label}<ExternalLink size={18} />
    </a>
  </article>
</main>
