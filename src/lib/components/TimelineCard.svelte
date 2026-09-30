<script>
  let { year, event, name = '' } = $props()
  const multiline = $derived(Array.isArray(event))
</script>

<article class="grid min-h-28 grid-cols-[5.5rem_1fr] overflow-hidden rounded-r-xl border border-ink/35 bg-white/45 shadow-[0_8px_28px_rgb(21_39_142_/_0.06)] sm:grid-cols-[7rem_1fr]">
  <p class="grid place-items-center bg-ink px-3 text-center text-lg font-bold text-paper">{year}</p>
  {#if multiline}
    <div class="p-5 sm:p-6">
      {#if name}<p class="mb-3 font-semibold">{name}</p>{/if}
      <ul class="list-disc space-y-2 pl-5 leading-7">
        {#each event as item (item)}
          <li>{item}</li>
        {/each}
      </ul>
    </div>
  {:else}
    <p class="self-center p-5 leading-7 sm:p-6">{event}</p>
  {/if}
</article>
