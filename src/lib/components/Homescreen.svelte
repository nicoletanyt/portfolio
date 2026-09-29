<script>
  import { ChevronsDown } from '@lucide/svelte'
  import data from '../data/portfolio.json'

  const words = Object.entries(data['word-cloud']).map(([text, word]) => ({
    text,
    ...word,
    left: Math.max(2, Math.min(88, ((word.x + 30) / 305) * 90)),
    top: Math.max(2, Math.min(82, (word.y / 169) * 82)),
    fontSize: 0.58 + word.size * 0.42,
    fontWeight: 350 + word.size * 55,
  }))
</script>

<section id="homepage" class="relative flex min-h-dvh scroll-mt-16 flex-col justify-center pt-24 pb-12 lg:pt-10">
  <div class="relative mb-7 h-[clamp(14rem,34vh,22rem)] w-[min(100%,42rem)] sm:w-[min(78%,44rem)]" aria-hidden="true">
    {#each words as word, index (word.text)}
      <span
        class="absolute opacity-0 [animation:word-in_650ms_cubic-bezier(0.22,1,0.36,1)_forwards] tracking-[-0.04em]"
        style={`left:${word.left}%; top:${word.top}%; font-size:${word.fontSize}rem; font-weight:${word.fontWeight}; rotate:${word.rotation}deg; animation-delay:${index * 45}ms`}
      >{word.text}</span>
    {/each}
  </div>

  <div class="relative z-10 max-w-3xl">
    <h1 class="text-4xl leading-tight font-normal tracking-[-0.04em] sm:text-6xl lg:text-7xl">
      hi, i'm <span class="relative mt-[0.2em] ml-[0.12em] inline-block text-[1.12em] italic before:absolute before:right-[-5%] before:bottom-[0.04em] before:left-[-5%] before:-z-10 before:h-[0.72em] before:origin-left before:scale-x-0 before:bg-sky before:content-[''] before:[animation:highlight-in_700ms_350ms_ease_forwards]">nicole tan</span>
    </h1>
    <p class="mt-7 max-w-2xl text-lg leading-relaxed sm:text-xl">
      IT &amp; Business student, DSTA Polytechnic Digital Scholar, and math enthusiast who loves turning ideas into things that work.
    </p>
  </div>

  <a href="#about-me" class="mt-8 grid h-12 w-12 place-items-center text-ink [animation:gentle-bounce_1.8s_ease-in-out_infinite] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink" aria-label="Scroll to about me">
    <ChevronsDown size={38} strokeWidth={1.7} />
  </a>
</section>
