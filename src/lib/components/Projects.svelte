<script>
  import { projects } from '../data/projects.js'
  import ProjectBook from './ProjectBook.svelte'
</script>

<section id="projects" class="relative scroll-mt-20 py-20 sm:py-24 lg:py-28">
  <h2 class="mb-10 flex items-center gap-4 text-4xl font-semibold tracking-[-0.04em] after:h-0.5 after:flex-1 after:bg-linear-to-r after:from-ink after:to-transparent after:opacity-30 after:content-[''] sm:text-5xl">projects</h2>
  <div class="grid gap-7 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
    {#each projects as project (project.name)}
      <ProjectBook {project} />
    {/each}
  </div>
</section>
