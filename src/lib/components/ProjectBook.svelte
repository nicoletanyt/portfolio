<script>
  import { ArrowLeft, ArrowRight, ExternalLink } from '@lucide/svelte'
  import suscity from '../../assets/projects/suscity.png'
  import graphs from '../../assets/projects/graphs-plugin.png'
  import insync from '../../assets/projects/insync.png'
  import beatdash from '../../assets/projects/beatdash.png'

  let { project } = $props()
  let showingDetails = $state(false)

  const images = {
    SUSCITY: suscity,
    'Graphs in Obsidian Plugin': graphs,
    InSync: insync,
    BeatDash: beatdash,
  }
</script>

<article class="relative h-[clamp(21rem,44vw,28rem)] overflow-hidden rounded-r-[1.1rem] border border-ink/20 bg-sky bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.38),transparent_12rem)] shadow-[0_18px_40px_rgb(21_39_142_/_13%)] before:absolute before:inset-y-0 before:left-0 before:z-5 before:w-[1.4rem] before:bg-ink before:shadow-[0.35rem_0_rgba(21,39,142,0.1)] before:content-[''] lg:max-xl:h-96">
  <span class="absolute top-0 right-0 z-4 rounded-tr-[1rem] rounded-bl-[0.7rem] border-[3px] border-dotted border-ink bg-paper px-[0.85rem] py-[0.4rem] font-[650]">{project.language}</span>

  <div
    class={`absolute inset-0 flex flex-col items-center justify-center gap-7 pt-14 pr-12 pb-12 pl-[3.6rem] transition-[opacity,transform] duration-300 ease-out ${showingDetails ? 'pointer-events-none invisible -translate-x-8 opacity-0' : 'translate-x-0 opacity-100'}`}
    aria-hidden={showingDetails}
  >
    <img
      src={images[project.name]}
      alt={`${project.name} project preview`}
      class="max-h-44 max-w-[70%] object-contain sm:max-h-52"
      loading="lazy"
    />
    <h3 class="max-w-[80%] text-center text-xl font-semibold tracking-tight sm:text-2xl">{project.name}</h3>
  </div>

  <div
    class={`absolute inset-0 flex flex-col items-start justify-center gap-7 pt-14 pr-12 pb-12 pl-[3.6rem] text-left transition-[opacity,transform] duration-300 ease-out ${showingDetails ? 'translate-x-0 opacity-100' : 'pointer-events-none invisible translate-x-8 opacity-0'}`}
    aria-hidden={!showingDetails}
  >
    <p class="max-w-[88%] text-base leading-7">{project.description}</p>
    <a
      href={project.link}
      target="_blank"
      rel="external noreferrer"
      class="inline-flex items-center gap-2 font-semibold underline decoration-2 underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
      tabindex={showingDetails ? 0 : -1}
    >
      {project.label}<ExternalLink size={17} />
    </a>
  </div>

  <button
    type="button"
    class="absolute right-4 bottom-4 z-10 grid h-11 w-11 cursor-pointer place-items-center rounded-full border border-ink/30 bg-ink text-paper transition-transform duration-200 hover:translate-x-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
    aria-label={showingDetails ? `Show ${project.name} cover` : `Read about ${project.name}`}
    onclick={() => (showingDetails = !showingDetails)}
  >
    {#if showingDetails}<ArrowLeft size={24} />{:else}<ArrowRight size={24} />{/if}
  </button>
</article>
