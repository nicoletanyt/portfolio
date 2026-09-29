<script>
  import data from '../data/portfolio.json'
  import aboutMeImage from '../../assets/about-me.jpeg'
  import TimelineCard from './TimelineCard.svelte'
</script>

<section id="about-me" class="relative scroll-mt-20 py-20 sm:py-24 lg:py-28">
  <h2 class="mb-10 flex items-center gap-4 text-4xl font-semibold tracking-[-0.04em] after:h-0.5 after:flex-1 after:bg-linear-to-r after:from-ink after:to-transparent after:opacity-30 after:content-[''] sm:text-5xl">about me</h2>

  <div class="grid items-center gap-10 md:grid-cols-[minmax(15rem,0.8fr)_1.4fr] lg:grid-cols-1 xl:grid-cols-[minmax(15rem,0.8fr)_1.4fr]">
    <div class="relative isolate w-[min(100%,22rem)] before:absolute before:top-[0.3rem] before:-left-4 before:z-10 before:h-[1.8rem] before:w-[28%] before:-rotate-40 before:bg-sky before:content-[''] after:absolute after:inset-[0.8rem_-0.8rem_-0.8rem_0.8rem] after:-z-10 after:border-2 after:border-ink/25 after:content-[''] after:[clip-path:polygon(20%_0,80%_0,100%_20%,100%_80%,80%_100%,20%_100%,0_80%,0_20%)]">
      <img src={aboutMeImage} alt="Nicole Tan" class="aspect-square w-full object-cover [clip-path:polygon(20%_0,80%_0,100%_20%,100%_80%,80%_100%,20%_100%,0_80%,0_20%)]" width="400" height="400" />
    </div>
    <p class="text-base leading-8 sm:text-lg sm:leading-9">
      Hi, I'm Nicole Tan YiTong, an 18-year-old student at Ngee Ann Polytechnic pursuing a double major in Information Technology and Business, and a DSTA Polytechnic Digital Scholar with a passion for coding, particularly web development and artificial intelligence :)
      <br /><br />
      Aside from coding, I am an avid reader, math enthusiast, and milk tea lover. I am always eager to learn new things and tackle challenges.
      <br /><br />
      I aspire to continue exploring different aspects of technology and creating apps that benefit the community!
      <br />
      <a class="font-bold italic underline decoration-2 underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink" href="#contact-me">Drop me a message!</a>
    </p>
  </div>

  <h3 class="my-10 text-2xl font-normal italic">~ education</h3>
  <div class="grid gap-5 xl:grid-cols-2">
    {#each data.education as item (item.year)}
      <TimelineCard year={item.year} event={item.school} />
    {/each}
  </div>
</section>
