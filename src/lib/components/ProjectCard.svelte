<script>
    import { ArrowUpRight, Star, Trophy } from "@lucide/svelte";
    import suscity from "../../assets/projects/suscity.png";
    import graphs from "../../assets/projects/graphs-plugin.png";
    import insync from "../../assets/projects/insync.png";
    import beatdash from "../../assets/projects/beatdash.png";

    let { project } = $props();

    const images = {
        SUSCITY: suscity,
        "Graphs in Obsidian Plugin": graphs,
        InSync: insync,
        BeatDash: beatdash,
    };
</script>

<article
    class="group flex flex-col gap-5 overflow-hidden rounded-2xl border border-ink/10 bg-white/60 shadow-[0_10px_28px_rgb(21_39_142_/_0.07)] transition-[box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_32px_rgb(21_39_142_/_0.11)] sm:h-[25rem] sm:flex-row"
>
    <div
        class="relative aspect-[1.65] shrink-0 overflow-hidden bg-sky/35 sm:aspect-auto sm:h-full sm:w-[40%]"
    >
        <div
            class="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(255,255,255,0.7),transparent_45%)]"
        ></div>
        <img
            src={images[project.name]}
            alt={`${project.name} project preview`}
            class="absolute inset-0 h-full w-full object-contain p-5 transition-transform duration-300 group-hover:scale-[1.025] sm:p-4"
            loading="lazy"
        />
        {#if project.featured}
            <span
                class="absolute top-3 left-3 inline-flex items-center justify-center gap-1.5 rounded-full border border-ink/15 bg-paper/90 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-ink/70"
            >
                <Star size={12} strokeWidth={2} aria-hidden="true" />
                Featured Project
            </span>
        {/if}
    </div>

    <div
        class="flex min-w-0 flex-1 flex-col gap-3 justify-center p-4 sm:p-4 md:p-5"
    >
        <div class="mb-2 flex items-start justify-between gap-2">
            <h3>
                {project.name}
            </h3>
            <a
                href={project.caseStudy || project.link}
                target={project.caseStudy ? undefined : "_blank"}
                rel="external noreferrer"
                aria-label={`Open ${project.name}`}
                class="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-ink/20 text-ink transition-colors hover:border-ink hover:bg-ink hover:text-paper focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
            >
                <ArrowUpRight size={17} />
            </a>
        </div>

        <p class="line-clamp-4 text-sm leading-5 text-ink/75">
            {project.description.trim()}
        </p>

        {#if project.recognition}
            <p
                class="mt-2 flex items-center gap-1.5 text-xs font-semibold leading-4 text-ink/80"
            >
                <Trophy class="shrink-0 text-ink/60" size={14} />
                {project.recognition}
            </p>
        {/if}

        <ul class="mt-3 flex flex-wrap gap-1.5" aria-label="Technology">
            {#each project.tech as technology (technology)}
                <li
                    class="rounded-full border border-ink/10 bg-sky/35 px-2 py-0.5 text-[0.7rem] font-medium text-ink/75"
                >
                    {technology}
                </li>
            {/each}
        </ul>
    </div>
</article>
