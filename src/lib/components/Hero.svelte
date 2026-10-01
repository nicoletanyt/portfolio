<script>
    import { ArrowDown, Award, GraduationCap } from "@lucide/svelte";
    import data from "../data/portfolio.json";

    const words = data["word-cloud"];
    const emphasisClasses = {
        high: "text-4xl font-semibold opacity-95 sm:text-[2.8rem]",
        medium: "text-2xl font-medium opacity-80 sm:text-[1.8rem]",
        low: "text-base font-medium opacity-60 sm:text-lg",
    };
    const flowClasses = [
        "mx-2 sm:translate-y-4",
        "mx-1 sm:-translate-y-4",
        "mx-3 sm:translate-y-1",
        "mx-2 sm:-translate-y-2",
        "mx-3 sm:translate-y-1",
        "mx-3 sm:translate-y-4",
        "mx-1 sm:-translate-y-1",
        "mx-2 sm:translate-y-5",
        "mx-2 sm:-translate-y-2",
        "mx-3 sm:translate-y-3",
        "mx-1 sm:-translate-y-2",
        "mx-2 sm:translate-y-0",
    ];

    let hoveredWord = $state("");
    let selectedWord = $state("");
    let activeWord = $derived(hoveredWord || selectedWord);

    function wordClass(word) {
        return `inline-block whitespace-nowrap tracking-[-0.04em] transition-[color,scale,opacity] duration-200 hover:scale-105 hover:text-ink hover:opacity-100 focus-visible:scale-105 focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink [animation:word-float_5s_ease-in-out_infinite] ${emphasisClasses[word.emphasis]}`;
    }

    function animationDelay(word, index) {
        return word.text === "Math" ? "0s" : `-${index * 0.35}s`;
    }
</script>

<section
    id="homepage"
    class="relative flex min-h-dvh scroll-mt-16 justify-between items-center pt-28 pb-16 lg:pt-16"
>
    <div class="relative z-10 mt-5 max-w-3xl">
        <h1>
            Hi, I’m <span
                class="relative inline-block italic before:absolute before:right-[-5%] before:bottom-[0.04em] before:left-[-5%] before:-z-10 before:h-[0.72em] before:origin-left before:scale-x-0 before:bg-sky before:content-[''] before:[animation:highlight-in_700ms_350ms_ease_forwards]"
                >Nicole.</span
            >
        </h1>
        <p
            class="mt-3 max-w-2xl text-xl leading-relaxed font-medium sm:text-2xl"
        >
            I enjoy turning ideas into things that work.
        </p>
        <div
            class="mt-8 flex flex-col gap-2.5 text-sm text-ink/65 sm:text-base"
        >
            <div class="flex items-center gap-2.5">
                <GraduationCap
                    class="shrink-0 text-ink/50"
                    size={18}
                    strokeWidth={1.8}
                />
                <span>IT &amp; Business @ Ngee Ann Polytechnic</span>
            </div>
            <div class="flex items-center gap-2.5">
                <Award
                    class="shrink-0 text-ink/50"
                    size={18}
                    strokeWidth={1.8}
                />
                <span>DSTA Polytechnic Digital Scholar</span>
            </div>
        </div>
        <a
            href="#projects"
            class="mt-7 inline-flex items-center gap-2 rounded-lg border border-ink bg-ink px-4 py-2.5 font-semibold text-paper transition-colors hover:bg-transparent hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
        >
            Explore my work <ArrowDown
                class="[animation:gentle-bounce_1.8s_ease-in-out_infinite]"
                size={18}
            />
        </a>
    </div>

    <div class="mx-auto w-full max-w-[40rem]">
        <div
            class="flex min-h-56 flex-wrap content-center items-center justify-center gap-x-7 gap-y-8 py-5 sm:min-h-64 sm:gap-x-10 sm:gap-y-10"
            aria-label="Interests and skills"
        >
            {#each words as word, index (word.text)}
                <div
                    class={`relative flex items-center justify-center ${activeWord === word.text ? "z-[100]" : ""} ${flowClasses[index]}`}
                >
                    {#if word.description}
                        <button
                            type="button"
                            class={`${wordClass(word)} cursor-help border-b border-dashed border-ink/25 bg-transparent`}
                            style={`animation-delay:${animationDelay(word, index)}`}
                            aria-describedby={activeWord === word.text
                                ? `word-tooltip-${index}`
                                : undefined}
                            aria-expanded={activeWord === word.text}
                            onmouseenter={() => (hoveredWord = word.text)}
                            onmouseleave={() => (hoveredWord = "")}
                            onfocus={() => (hoveredWord = word.text)}
                            onblur={() => (hoveredWord = "")}
                            onclick={() =>
                                (selectedWord =
                                    selectedWord === word.text
                                        ? ""
                                        : word.text)}
                        >
                            {word.text}
                        </button>
                        <span
                            id={`word-tooltip-${index}`}
                            role="tooltip"
                                class={`pointer-events-none absolute top-[calc(100%+0.65rem)] z-[110] w-[min(18rem,calc(100vw-3rem))] rounded-lg border border-ink/10 bg-paper px-3.5 py-2.5 text-left text-sm leading-6 font-normal tracking-normal text-ink shadow-[0_8px_24px_rgb(21_39_142_/_0.12)] transition-[opacity,translate] duration-200 ${index >= words.length - 3 ? "right-0" : "left-1/2 -translate-x-1/2"} ${activeWord === word.text ? "translate-y-0 opacity-100" : "-translate-y-1 opacity-0"}`}
                        >
                            {word.description}
                        </span>
                    {:else}
                        <span
                            class={wordClass(word)}
                            style={`animation-delay:${animationDelay(word, index)}`}
                        >
                            {word.text}
                        </span>
                    {/if}
                </div>
            {/each}
        </div>
    </div>
</section>
