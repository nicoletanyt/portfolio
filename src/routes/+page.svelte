<script>
  import { onMount } from 'svelte'
  import { ChevronsUp } from '@lucide/svelte'
  import Nav from '$lib/components/Nav.svelte'
  import Homescreen from '$lib/components/Homescreen.svelte'
  import AboutMe from '$lib/components/AboutMe.svelte'
  import Projects from '$lib/components/Projects.svelte'
  import Achievements from '$lib/components/Achievements.svelte'
  import Involvement from '$lib/components/Involvement.svelte'
  import Contact from '$lib/components/Contact.svelte'

  const sectionIds = ['homepage', 'about-me', 'projects', 'achievements', 'involvement', 'contact-me']

  let activePage = $state('homepage')
  let showBackToTop = $state(false)

  onMount(() => {
    const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean)
    const visibleSections = {}

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visibleSections[entry.target.id] = entry.intersectionRatio
          else delete visibleSections[entry.target.id]
        }

        const visible = Object.entries(visibleSections).sort((a, b) => b[1] - a[1])[0]
        if (visible) activePage = visible[0]
      },
      { rootMargin: '-15% 0px -55% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] },
    )

    sections.forEach((section) => observer.observe(section))

    const handleScroll = () => {
      showBackToTop = window.scrollY > window.innerHeight * 1.2
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', handleScroll)
    }
  })
</script>

<svelte:head>
  <title>nicole's portfolio</title>
  <meta name="description" content="Nicole Tan's portfolio of projects, achievements, and community involvement." />
</svelte:head>

<Nav {activePage} />

<main class="mx-auto w-full max-w-[1600px] px-5 sm:px-8 lg:pr-[22rem] lg:pl-16 xl:pl-24">
  <Homescreen />
  <AboutMe />
  <Projects />
  <Achievements />
  <Involvement />
  <Contact />
</main>

<a
  href="#homepage"
  class={`fixed right-0 bottom-8 z-40 grid place-items-center rounded-l-lg bg-ink p-3 text-paper shadow-lg transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink ${showBackToTop ? 'pointer-events-auto translate-x-0 opacity-100' : 'pointer-events-none translate-x-full opacity-0'}`}
  aria-label="Back to top"
  tabindex={showBackToTop ? 0 : -1}
>
  <ChevronsUp size={24} strokeWidth={2.2} />
</a>
