<script lang="ts">
    import { asset, resolve } from "$app/paths";
    import {
        ArrowDown,
        ArrowDownRight,
        ArrowLeft,
        ArrowRight,
        ArrowUpRight,
        ExternalLink,
        Trophy,
        UsersRound,
    } from "@lucide/svelte";
    import data from "$lib/data/portfolio.json";
    import insyncImage from "../../../assets/projects/insync.png";
    import appImage from "../../../assets/projects/insync-App.png";
    import externalDisplayImage from "../../../assets/projects/insync-ExternalDisplay.png";
    import teamPhoto from "../../../assets/projects/insync-team.webp";

    const project = data.projects.find((item) => item.name === "InSync")!;
    const businessTimesUrl =
        "https://www.businesstimes.com.sg/lifestyle/dell-innovatefest-2026-explores-ai-tech-solutions-persons-disabilities-live-independently";
    const zaoBaoUrl =
        "https://www.zaobao.com.sg/news/singapore/story20260918-9699790";
    const technologies = project.tech;
    const noteLayouts = [
        "sm:col-span-8 sm:col-start-1 sm:-rotate-1 bg-white",
        "sm:col-span-7 sm:col-start-6 sm:-mt-4 sm:rotate-1 bg-[#e7f3ff]",
        "sm:col-span-8 sm:col-start-2 sm:-mt-3 sm:-rotate-[0.7deg] bg-paper",
    ];
</script>

<svelte:head>
    <title>InSync | nicole's portfolio</title>
    <meta name="description" content={project.description} />
</svelte:head>

<main
    class="mx-auto min-h-dvh w-full max-w-[1600px] px-5 pb-20 sm:px-8 lg:pr-[22rem] lg:pl-16 xl:pl-24"
>
    <header
        class="mx-auto flex w-full max-w-6xl items-center justify-between border-b border-ink/10 py-4 lg:hidden"
    >
        <a
            href={resolve("/")}
            aria-label="Nicole Tan home"
            class="grid h-10 w-10 place-items-center rounded-full bg-ink text-sm font-semibold text-paper focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
            >Nt</a
        >
        <a
            href={`${resolve('/')}#projects`}
            rel="external"
            class="inline-flex items-center gap-2 text-sm font-semibold text-ink/75 transition-colors hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink sm:text-base"
        >
            <ArrowLeft size={17} /> projects
        </a>
    </header>

    <div class="w-full">
        <section
            class="grid border-b border-ink/15 items-center gap-8 py-12 sm:gap-12 sm:py-16 lg:grid-cols-[0.95fr_1.05fr] lg:py-20"
        >
            <div>
                <h1
                >
                    InSync
                </h1>
                <p
                    class="mt-5 max-w-xl text-lg leading-7 text-ink/75 sm:text-xl sm:leading-8"
                >
                    {project.description}
                </p>

                <div
                    class="mt-6 inline-flex items-center gap-2 rounded-lg border border-ink/10 bg-sky/25 px-3 py-2 text-sm font-semibold text-ink/85"
                >
                    <Trophy size={17} strokeWidth={1.8} />
                    Dell InnovateFest 2026
                </div>

                <ul
                    class="mt-5 flex flex-wrap gap-2"
                    aria-label="Technology stack"
                >
                    {#each technologies as technology (technology)}
                        <li
                            class="rounded-full border border-ink/10 bg-white/70 px-3 py-1 text-xs font-medium text-ink/75 sm:text-sm"
                        >
                            {technology}
                        </li>
                    {/each}
                </ul>
            </div>

            <figure
                class="relative overflow-hidden rounded-2xl border border-ink/10 bg-sky/30 p-5 shadow-[0_18px_42px_rgb(21_39_142_/_0.1)] sm:p-8"
            >
                <div
                    class="absolute inset-0 bg-[radial-gradient(circle_at_75%_15%,rgba(255,255,255,0.8),transparent_50%)]"
                ></div>
                <img
                    src={insyncImage}
                    alt="InSync app concept visual"
                    class="relative mx-auto max-h-[26rem] w-full object-contain"
                    fetchpriority="high"
                />
            </figure>
        </section>

        <section
            class="border-b border-ink/15 py-16 sm:py-24"
            aria-labelledby="competition-heading"
        >
            <h2
                id="competition-heading"
            >
                We started with a question.
            </h2>
            <div
                class="mt-7 grid items-center gap-4 md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] md:gap-5"
            >
                <blockquote
                    class="relative rounded-[1.75rem] rounded-bl-md border border-ink/20 bg-paper p-5 text-lg leading-relaxed font-medium tracking-[-0.025em] shadow-[0_10px_30px_rgb(21_39_142_/_0.07)] after:absolute after:-bottom-2 after:left-10 after:h-5 after:w-5 after:rotate-45 after:border-r after:border-b after:border-ink/20 after:bg-paper after:content-[''] sm:p-7 sm:text-xl sm:leading-[1.45]"
                >
                    How might we design solutions that help users better manage
                    communication breakdowns in real-life community settings, so
                    they can participate more independently and confidently?
                </blockquote>

                <ArrowDown
                    class="mx-auto text-ink/55 md:hidden"
                    size={22}
                    strokeWidth={1.6}
                    aria-hidden="true"
                />
                <ArrowRight
                    class="hidden text-ink/55 md:block"
                    size={26}
                    strokeWidth={1.6}
                    aria-hidden="true"
                />

                <div class="py-2 md:pl-1">
                    <p class="mb-2 text-base font-semibold text-ink/65">
                        Who are we designing for?
                    </p>
                    <h3
                        class="flex items-center gap-2"
                    >
                        <UsersRound
                            class="shrink-0 text-ink/60"
                            size={22}
                            strokeWidth={1.7}
                            aria-hidden="true"
                        />
                        <span
                            >Young AAC users aged <span
                                class="relative inline-block px-1 after:absolute after:inset-x-0 after:bottom-0 after:-z-10 after:h-[0.42em] after:rounded-[50%] after:border-b-2 after:border-ink/45 after:content-['']"
                                >10–18</span
                            ></span
                        >
                    </h3>
                    <p
                        class="mt-3 max-w-[36rem] text-base leading-7 text-ink/75"
                    >
                        People who use <span
                            class="font-medium text-ink underline decoration-sky decoration-2 underline-offset-2"
                            >Augmentative and Alternative Communication</span
                        > and have motor disabilities such as cerebral palsy.
                    </p>
                </div>
            </div>

            <div
                class="mt-3 grid items-center gap-9 sm:mt-5 md:grid-cols-2 md:gap-10"
            >
                <div>
                    <h3>
                        So we built <span class="bg-sky/45 px-1 [box-decoration-break:clone]">InSync</span>.
                    </h3>
                    <p
                        class="mt-5 max-w-[34rem] text-2xl leading-snug font-medium italic tracking-tight sm:text-3xl"
                    >
                        “Communicate your personality, not just your words.”
                    </p>

                    <p class="mt-5 text-base leading-7 text-ink/70">
                        Featured in
                        <a
                            href={businessTimesUrl}
                            target="_blank"
                            rel="external noreferrer"
                            class="inline-flex items-center gap-1 font-medium text-ink/80 underline decoration-ink/35 underline-offset-4 hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
                            >Business Times<ExternalLink size={15} /></a
                        >
                        and
                        <a
                            href={zaoBaoUrl}
                            target="_blank"
                            rel="external noreferrer"
                            lang="zh-Hans"
                            class="inline-flex items-center gap-1 font-medium text-ink/80 underline decoration-ink/35 underline-offset-4 hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
                            >联合早报<ExternalLink size={15} /></a
                        >.
                    </p>
                </div>
                <figure>
                    <div
                        class="mb-3 flex justify-center text-ink/55"
                        aria-hidden="true"
                    >
                        <ArrowDown size={24} strokeWidth={1.6} />
                    </div>
                    <img
                        src={teamPhoto}
                        alt="The InSync and PotPal teams together at Dell InnovateFest 2026"
                        class="aspect-[960/615] w-full rounded-xl border border-ink/10 object-cover shadow-[0_12px_30px_rgb(21_39_142_/_0.1)]"
                        loading="lazy"
                        width="960"
                        height="615"
                    />
                    <figcaption class="mt-2 text-base leading-6 text-ink/60">
                        The InSync and PotPal teams · Photo: CMG via
                        <a
                            href={businessTimesUrl}
                            target="_blank"
                            rel="external noreferrer"
                            class="underline underline-offset-2 hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
                            >The Business Times</a
                        >
                    </figcaption>
                </figure>
            </div>
        </section>

        <section class="border-b border-ink/15 py-10 sm:py-12">
            <div
                class="mt-7 grid gap-x-9 xl:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)]"
            >
                <div class="max-w-[34rem]">
                    <p
                        class="text-xl font-semibold leading-snug tracking-tight sm:text-2xl"
                    >
                        InSync works across two devices.
                    </p>
                    <p class="mt-3 text-base leading-7 text-ink/75">
                        The AAC iPad app pairs with a removable external
                        display. The display cues the conversation partner while
                        its camera provides visual context for InSync's
                        features. It can be removed when users prefer something
                        less noticeable.
                    </p>
                </div>

                <div
                    class="mt-6 xl:col-start-2 xl:row-span-2 xl:row-start-1 xl:mt-0 xl:self-stretch"
                >
                    <figure
                        class="mx-auto w-full max-w-none xl:sticky xl:top-24"
                    >
                        <div class="relative aspect-[5/4] w-full">
                            <span
                                class="absolute top-0 left-[7%] flex -rotate-6 items-center gap-1 text-sm italic text-ink/65"
                                aria-hidden="true"
                            >
                                iPad App <ArrowDownRight
                                    size={18}
                                    strokeWidth={1.5}
                                />
                            </span>
                            <div
                                class="absolute top-[14%] left-0 h-[66%] w-[86%] overflow-hidden rounded-2xl border border-ink/15 bg-paper shadow-[0_10px_30px_rgb(21_39_142_/_0.1)]"
                            >
                                <img
                                    src={appImage}
                                    alt="InSync AAC iPad app showing the communication grid and conversation controls"
                                    class="h-full w-full object-contain"
                                    loading="lazy"
                                />
                            </div>
                            <div
                                class="absolute right-0 bottom-[8%] h-[42%] w-[62%] rounded-xl border border-ink/20 bg-mist/95 p-1.5 shadow-[0_12px_24px_rgb(21_39_142_/_0.15)]"
                            >
                                <img
                                    src={externalDisplayImage}
                                    alt="InSync removable external display and camera showing the listener a turn-taking cue"
                                    class="h-full w-full object-contain"
                                    loading="lazy"
                                />
                            </div>
                            <span
                                class="absolute right-[3%] bottom-0 flex -rotate-3 items-center gap-1 text-sm italic text-ink/65"
                                aria-hidden="true"
                            >
                                <ArrowUpRight size={18} strokeWidth={1.5} /> External
                                Display
                            </span>
                        </div>
                        <figcaption class="sr-only">
                            InSync's AAC iPad app and removable external
                            display.
                        </figcaption>
                    </figure>
                </div>

                <div class="mt-6 min-w-0 xl:col-start-1 xl:row-start-2">
                    <section aria-labelledby="voice-heading">
                        <h3
                            id="voice-heading"
                            class="mt-2"
                        >
                            Make it <span
                                class="font-semibold underline decoration-sky decoration-[0.2em] underline-offset-4"
                                >sound like you.</span
                            >
                        </h3>
                        <div
                            class="mt-4 space-y-2 text-sm leading-6 text-ink/70 sm:text-base sm:leading-7"
                        >
                            <p>
                                <strong class="font-semibold text-ink"
                                    >Capture My Voice</strong
                                > creates a personalised voice from the user's vowel
                                sounds.
                            </p>
                            <p>
                                <strong class="font-semibold text-ink"
                                    >Build My Voice</strong
                                > lets users configure up to nine voice settings.
                            </p>
                        </div>
                    </section>

                    <svg
                        class="my-4 ml-8 h-12 w-24 text-ink/40 sm:ml-16"
                        viewBox="0 0 90 44"
                        fill="none"
                        aria-hidden="true"
                    >
                        <path
                            d="M5 3 C12 32 59 5 74 36"
                            stroke="currentColor"
                            stroke-width="1.5"
                            stroke-dasharray="4 5"
                            stroke-linecap="round"
                        />
                        <path
                            d="M67 32 L75 37 L78 29"
                            stroke="currentColor"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>

                    <section
                        class="ml-5 sm:ml-9"
                        aria-labelledby="tones-heading"
                    >
                        <h3
                            id="tones-heading"
                        >
                            And express <span
                                class="font-semibold underline decoration-sky decoration-[0.2em] underline-offset-4"
                                >more than the words.</span
                            >
                        </h3>
                        <p class="mt-3 text-base leading-7 text-ink/70">
                            Sentences can sound happy, frustrated, sad, or
                            serious. The chosen tone also appears on the
                            external display, so the listener understands how
                            something is being said.
                        </p>
                    </section>

                    <svg
                        class="my-4 ml-16 h-12 w-24 -scale-x-100 text-ink/40 sm:ml-24"
                        viewBox="0 0 90 44"
                        fill="none"
                        aria-hidden="true"
                    >
                        <path
                            d="M5 3 C12 32 59 5 74 36"
                            stroke="currentColor"
                            stroke-width="1.5"
                            stroke-dasharray="4 5"
                            stroke-linecap="round"
                        />
                        <path
                            d="M67 32 L75 37 L78 29"
                            stroke="currentColor"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>

                    <section aria-labelledby="turn-heading">
                        <h3
                            id="turn-heading"
                        >
                            Keep the <span
                                class="font-semibold underline decoration-sky decoration-[0.2em] underline-offset-4"
                                >conversation flowing.</span
                            >
                        </h3>
                        <p class="mt-3 text-base leading-7 text-ink/70">
                            InSync shows when the AAC user is still typing or
                            has finished, helping the conversation partner
                            respond without interrupting.
                        </p>
                    </section>

                    <svg
                        class="my-4 ml-10 h-12 w-24 text-ink/40 sm:ml-20"
                        viewBox="0 0 90 44"
                        fill="none"
                        aria-hidden="true"
                    >
                        <path
                            d="M5 3 C12 32 59 5 74 36"
                            stroke="currentColor"
                            stroke-width="1.5"
                            stroke-dasharray="4 5"
                            stroke-linecap="round"
                        />
                        <path
                            d="M67 32 L75 37 L78 29"
                            stroke="currentColor"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>

                    <section
                        class="ml-5 sm:ml-9"
                        aria-labelledby="support-heading"
                    >
                        <h3
                            id="support-heading"
                        >
                            And when <span
                                class="font-semibold underline decoration-sky decoration-[0.2em] underline-offset-4"
                                >communication breaks down...</span
                            >
                        </h3>
                        <div
                            class="mt-3 space-y-2 border-l border-ink/20 pl-4 text-sm leading-6 text-ink/70 sm:text-base sm:leading-7"
                        >
                            <p>
                                <strong class="font-semibold text-ink"
                                    >Auto-Suggestions</strong
                                > draws on personalisation, visual context, and audio
                                context to suggest relevant words.
                            </p>
                            <p>
                                <strong class="font-semibold text-ink"
                                    >Simplify</strong
                                > rephrases unfamiliar terms or sentences in context.
                            </p>
                            <p>
                                <strong class="font-semibold text-ink"
                                    >Clarify</strong
                                > generates targeted questions about something the
                                user doesn't understand.
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </section>

        <section class="py-10 sm:py-12">
            <div class="flex flex-wrap items-end justify-between gap-3">
                <div>
                    <h2
                        class="mt-1"
                    >
                        What I took away
                    </h2>
                </div>
            </div>

            <div class="mt-7 grid grid-cols-12 gap-x-3 gap-y-5 sm:gap-y-2">
                <article
                    class={`relative col-span-12 border border-ink/20 px-5 py-5 shadow-[0_10px_24px_rgb(21_39_142_/_0.1)] transition-transform duration-200 hover:-translate-y-1 sm:px-6 ${noteLayouts[0]}`}
                >
                    <span
                        class="absolute -top-2.5 left-[-15px] z-10 h-5 w-14 -rotate-[18deg] bg-sky/65 shadow-[0_2px_4px_rgb(21_39_142_/_0.12)] [clip-path:polygon(0_10%,100%_0,96%_100%,4%_92%)]"
                        aria-hidden="true"
                    ></span>
                    <h3
                    >
                        Trying things I didn't know yet.
                    </h3>
                    <p
                        class="mt-2 text-base leading-7 text-ink/90 sm:text-lg sm:leading-8"
                    >
                        Building InSync pushed me to learn and experiment with
                        unfamiliar technologies. I became more comfortable <span
                            class="font-medium text-ink underline decoration-sky decoration-2 underline-offset-2"
                            >trying things out</span
                        >, testing what worked, and adapting as we went.
                    </p>
                </article>
                <article
                    class={`relative col-span-12 border border-ink/20 px-5 py-5 shadow-[0_10px_24px_rgb(21_39_142_/_0.1)] transition-transform duration-200 hover:-translate-y-1 sm:px-6 ${noteLayouts[1]}`}
                >
                    <span
                        class="absolute -top-2.5 left-[-15px] z-10 h-5 w-14 -rotate-[18deg] bg-sky/65 shadow-[0_2px_4px_rgb(21_39_142_/_0.12)] [clip-path:polygon(0_10%,100%_0,96%_100%,4%_92%)]"
                        aria-hidden="true"
                    ></span>
                    <h3
                    >
                        People &gt; assumptions.
                    </h3>
                    <p
                        class="mt-2 text-base leading-7 text-ink/90 sm:text-lg sm:leading-8"
                    >
                        Finding people to test with and taking the app on the
                        ground was eye-opening. Their feedback <span
                            class="font-medium text-ink underline decoration-sky decoration-2 underline-offset-2"
                            >challenged our assumptions</span
                        > and changed what we prioritised.
                    </p>
                </article>
                <article
                    class={`relative col-span-12 border border-ink/20 px-5 py-5 shadow-[0_10px_24px_rgb(21_39_142_/_0.1)] transition-transform duration-200 hover:-translate-y-1 sm:px-6 ${noteLayouts[2]}`}
                >
                    <span
                        class="absolute -top-2.5 left-[-15px] z-10 h-5 w-14 -rotate-[18deg] bg-sky/65 shadow-[0_2px_4px_rgb(21_39_142_/_0.12)] [clip-path:polygon(0_10%,100%_0,96%_100%,4%_92%)]"
                        aria-hidden="true"
                    ></span>
                    <h3
                    >
                        Who are we building for?
                    </h3>
                    <p
                        class="mt-2 text-base leading-7 text-ink/90 sm:text-lg sm:leading-8"
                    >
                        I'm grateful I got to build with people with
                        disabilities in mind, a community I hadn't had much
                        exposure to. It made me more conscious of <span
                            class="font-medium text-ink underline decoration-sky decoration-2 underline-offset-2"
                            >who we design technology for</span
                        >.
                    </p>
                </article>
            </div>
        </section>
    </div>
</main>

<nav
    aria-label="InSync case study navigation"
    class="fixed top-0 right-20 z-50 hidden h-[min(85vh,43.75rem)] w-60 flex-col bg-ink text-paper [clip-path:polygon(0_0,100%_0,100%_100%,52%_88%,0_100%)] lg:flex"
>
    <div class="flex h-[88%] flex-col px-8 pt-4 lg:p-8">
        <a
            href={resolve("/")}
            aria-label="Nt home"
            class="grid w-fit place-items-center self-center rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-paper"
        >
            <img src={asset('/favicon.svg')} alt="" class="h-14 w-14" />
        </a>
        <div class="flex flex-1 flex-col justify-evenly py-5 lg:py-10">
            <a
                href={`${resolve('/')}#projects`}
                rel="external"
                class="relative w-fit self-center text-[1.1rem] text-paper underline underline-offset-[0.35rem] transition-transform duration-200 hover:translate-x-[0.35rem] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-paper"
            >
                <ArrowLeft class="inline-block align-[-0.15em]" size={16} /> projects
            </a>
        </div>
    </div>
</nav>
