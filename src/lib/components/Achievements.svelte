<script>
  import { Award, BookOpen, Bot, Braces, ExternalLink, FlaskConical, ListFilter, Sigma, Star, Trophy } from '@lucide/svelte'
  import data from '../data/portfolio.json'

  const filters = [
    { icon: ListFilter, label: 'All', value: '' },
    { icon: Braces, label: 'Coding', value: 'coding' },
    { icon: BookOpen, label: 'Academic', value: 'academic' },
    { icon: FlaskConical, label: 'Science', value: 'science' },
    { icon: Sigma, label: 'Math', value: 'math' },
    { icon: Bot, label: 'Robotics', value: 'robotics' },
  ]

  const highlightIcons = { award: Award, star: Star, trophy: Trophy }
  const categoryIcons = { academic: BookOpen, coding: Braces, math: Sigma, robotics: Bot, science: FlaskConical }

  const achievements = Object.fromEntries(
    Object.entries(data.achievements).map(([year, items]) => [
      year,
      items.map((item) => {
        if (item.title) return item

        const [title, ...subtitleParts] = item.name.split(': ')
        return {
          ...item,
          title,
          subtitle: subtitleParts.length ? subtitleParts.join(': ') : undefined,
        }
      }),
    ]),
  )
  const achievementYears = Object.keys(achievements).sort((a, b) => Number(b) - Number(a))

  let category = $state('')
  let visibleTooltip = $state('')

  function toggleFilter(label) {
    category = category === label ? '' : label
  }
</script>

<section id="achievements" class="relative scroll-mt-20 py-20 sm:py-24 lg:py-28">
  <div class="mb-10 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
    <h2 class="flex min-w-0 flex-1 items-center gap-4 text-4xl font-semibold tracking-[-0.04em] after:h-0.5 after:flex-1 after:bg-linear-to-r after:from-ink after:to-transparent after:opacity-30 after:content-[''] sm:text-5xl">achievements</h2>

    <div class="flex flex-wrap items-center gap-2 lg:flex-nowrap lg:justify-end">
      {#each filters as filter (filter.label)}
        {@const Icon = filter.icon}
        <div class="relative shrink-0">
          <button
            type="button"
            class="grid h-10 w-10 cursor-pointer place-items-center rounded-lg border transition focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
            class:border-ink={category === filter.value}
            class:bg-paper={category === filter.value}
            class:shadow-sm={category === filter.value}
            class:border-transparent={category !== filter.value}
            class:bg-sky={category !== filter.value}
            aria-label={`Filter by ${filter.label}`}
            aria-pressed={category === filter.value}
            aria-describedby={visibleTooltip === filter.label ? `filter-tooltip-${filter.value || 'all'}` : undefined}
            onmouseenter={() => (visibleTooltip = filter.label)}
            onmouseleave={() => (visibleTooltip = '')}
            onfocus={() => (visibleTooltip = filter.label)}
            onblur={() => (visibleTooltip = '')}
            onclick={() => {
              toggleFilter(filter.value)
              visibleTooltip = ''
            }}
          >
            <Icon size={19} />
          </button>
          <span
            id={`filter-tooltip-${filter.value || 'all'}`}
            role="tooltip"
            class={`pointer-events-none absolute top-[calc(100%+0.5rem)] left-1/2 z-30 -translate-x-1/2 rounded-md bg-ink px-2 py-1 text-xs whitespace-nowrap text-paper shadow-md transition-opacity ${visibleTooltip === filter.label ? 'opacity-100' : 'opacity-0'}`}
          >
            {filter.label}
          </span>
        </div>
      {/each}
    </div>
  </div>

  <div class="space-y-7 sm:space-y-8">
    {#each achievementYears as year (year)}
      {@const items = category ? achievements[year].filter((item) => item.category === category) : achievements[year]}
      {#if items.length}
        <section aria-labelledby={`achievements-${year}`}>
          <h3 id={`achievements-${year}`} class="mb-2 text-xl font-semibold tracking-[-0.02em] md:text-center md:text-2xl">{year}</h3>

          <ul class="relative space-y-1 before:absolute before:top-4 before:bottom-4 before:left-3 before:w-px before:bg-ink/20 before:content-[''] md:before:left-1/2 md:before:-translate-x-1/2">
            {#each items as item, index (`${year}-${item.title}`)}
              {@const isLeft = index % 2 === 0}
              {@const CategoryIcon = categoryIcons[item.category]}
              <li class="relative grid min-h-12 grid-cols-[1.5rem_minmax(0,1fr)] gap-3 md:grid-cols-[minmax(0,1fr)_2rem_minmax(0,1fr)] md:gap-4">
                {#if item.highlight}
                  {@const HighlightIcon = item.icon ? highlightIcons[item.icon] : Award}
                  <span class="absolute top-[0.95rem] left-0 z-10 grid h-6 w-6 place-items-center rounded-full border border-ink/35 bg-paper text-ink shadow-sm md:left-1/2 md:-translate-x-1/2" aria-hidden="true">
                    <HighlightIcon size={13} strokeWidth={2.2} />
                  </span>
                {:else}
                  <span class="absolute top-[1.15rem] left-[0.45rem] z-10 h-2.5 w-2.5 rounded-full border-2 border-ink bg-paper md:left-1/2 md:-translate-x-1/2" aria-hidden="true"></span>
                {/if}

                <div class={`col-start-2 flex min-w-0 items-start md:row-start-1 ${isLeft ? 'md:col-start-1 md:justify-end' : 'md:col-start-3 md:justify-start'}`}>
                  <div class={`${item.highlight ? 'w-fit max-w-[min(100%,42rem)] rounded-lg border border-ink/10 bg-sky/20 px-3.5 py-2.5 shadow-[0_6px_18px_rgb(21_39_142_/_0.04)]' : 'px-1 py-2.5'} ${isLeft ? 'md:text-right' : ''}`}>
                    <p class={`flex items-start gap-2 ${item.highlight ? 'text-sm leading-6 font-semibold sm:text-base' : 'text-sm leading-6 font-medium sm:text-base'} ${isLeft ? 'md:justify-end' : ''}`}>
                      <CategoryIcon class="mt-1 shrink-0 text-ink/55" size={17} strokeWidth={1.8} aria-hidden="true" />
                      <span>{item.title}</span>
                    </p>
                    {#if item.subtitle}
                      <p class="mt-0.5 text-sm leading-6 text-ink/65">{item.subtitle}</p>
                    {/if}
                    {#if item.link}
                      <a
                        href={item.link}
                        target="_blank"
                        rel="external noreferrer"
                        class={`mt-1.5 inline-flex items-center gap-1.5 text-sm font-semibold italic underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink ${isLeft ? 'md:justify-end' : ''}`}
                      >
                        {item.label}<ExternalLink size={14} />
                      </a>
                    {/if}
                  </div>
                </div>
              </li>
            {/each}
          </ul>
        </section>
      {/if}
    {/each}
  </div>
</section>
