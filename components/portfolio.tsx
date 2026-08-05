'use client'

import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { cn } from '@/lib/utils'
import { ArrowUpRight } from 'lucide-react'
import { useState } from 'react'

type Category = 'Websites' | 'Mobile Apps' | 'AI Projects' | 'SaaS' | 'Enterprise'

type Project = {
  title: string
  tag: string
  category: Category
  image: string
}

const PROJECTS: Project[] = [
  { title: 'Vantage Analytics', tag: 'Fintech SaaS', category: 'SaaS', image: '/images/portfolio/fintech-dashboard.png' },
  { title: 'Orbit Banking', tag: 'Mobile Banking', category: 'Mobile Apps', image: '/images/portfolio/mobile-banking-app.png' },
  { title: 'Nova Assistant', tag: 'AI Chat Platform', category: 'AI Projects', image: '/images/portfolio/ai-assistant.png' },
  { title: 'Marketplace One', tag: 'E-commerce', category: 'Websites', image: '/images/portfolio/ecommerce-platform.png' },
  { title: 'Relay CRM', tag: 'Enterprise CRM', category: 'Enterprise', image: '/images/portfolio/enterprise-crm.png' },
  { title: 'Freight OS', tag: 'Logistics SaaS', category: 'SaaS', image: '/images/portfolio/logistics-saas.png' },
]

const FILTERS: (Category | 'All')[] = [
  'All',
  'Websites',
  'Mobile Apps',
  'AI Projects',
  'SaaS',
  'Enterprise',
]

export function Portfolio() {
  const [active, setActive] = useState<(typeof FILTERS)[number]>('All')

  const filtered =
    active === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === active)

  return (
    <section id="portfolio" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Portfolio"
          title="Products we're proud of"
          description="A selection of digital products we've designed, engineered, and scaled."
        />

        <Reveal>
          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {FILTERS.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActive(filter)}
                className={cn(
                  'rounded-full border px-4 py-1.5 text-sm font-medium transition-colors',
                  active === filter
                    ? 'border-brand bg-brand text-primary-foreground'
                    : 'border-border bg-card text-muted-foreground hover:text-foreground',
                )}
              >
                {filter}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, i) => (
            <Reveal key={project.title} delay={(i % 3) * 80}>
              <article className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-brand/40">
                <div className="relative aspect-[16/11] overflow-hidden">
                  <img
                    src={project.image || '/placeholder.svg'}
                    alt={`${project.title} — ${project.tag}`}
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-60" />
                </div>
                <div className="flex items-center justify-between gap-3 p-5">
                  <div>
                    <h3 className="font-semibold tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {project.tag}
                    </p>
                  </div>
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors group-hover:border-brand group-hover:bg-brand group-hover:text-primary-foreground">
                    <ArrowUpRight className="size-4" />
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
