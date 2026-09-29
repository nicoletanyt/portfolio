<script>
  import data from '../data/portfolio.json'
  import TimelineCard from './TimelineCard.svelte'
</script>

<section id="involvement" class="relative scroll-mt-20 py-20 sm:py-24 lg:py-28">
  <h2 class="mb-10 flex items-center gap-4 text-4xl font-semibold tracking-[-0.04em] after:h-0.5 after:flex-1 after:bg-linear-to-r after:from-ink after:to-transparent after:opacity-30 after:content-[''] sm:text-5xl">involvement</h2>

  {#each Object.entries(data.involvement) as [heading, entries] (heading)}
    <div>
      <h3 class="my-10 text-2xl font-normal italic">~ {heading}</h3>
      <div class="grid gap-5 xl:grid-cols-2">
        {#each entries as item, index (`${heading}-${item.year}-${index}`)}
          <TimelineCard year={item.year} event={item.events} name={item.name} />
        {/each}
      </div>
    </div>
  {/each}
</section>
