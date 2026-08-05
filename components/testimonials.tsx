'use client'

import { SectionHeading } from '@/components/section-heading'
import { cn } from '@/lib/utils'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { useEffect, useState } from 'react'

type Testimonial = {
  quote: string
  name: string
  role: string
  initials: string
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'Axion Labs shipped our platform in record time without cutting corners. The architecture has scaled effortlessly as we grew 10x.',
    name: 'Sofia Marchetti',
    role: 'CTO, Vantage',
    initials: 'SM',
  },
  {
    quote:
      'Their AI-first approach transformed a manual process into an automated workflow that saves us hundreds of hours every month.',
    name: 'David Okafor',
    role: 'VP Product, Orbit',
    initials: 'DO',
  },
  {
    quote:
      'The most senior, communicative engineering partner we have worked with. Transparent roadmaps and zero surprises.',
    name: 'Elena Novak',
    role: 'Founder, Nova',
    initials: 'EN',
  },
  {
    quote:
      'From design to deployment, everything felt premium. Our conversion rate jumped 34% after the rebuild.',
    name: 'Marcus Reed',
    role: 'CEO, Marketplace One',
    initials: 'MR',
  },
]

export function Testimonials() {
  const [index, setIndex] = useState(0)
  const count = TESTIMONIALS.length

  const go = (dir: number) =>
    setIndex((prev) => (prev + dir + count) % count)

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return
    const id = setInterval(() => setIndex((p) => (p + 1) % count), 6000)
    return () => clearInterval(id)
  }, [count])

  const current = TESTIMONIALS[index]

  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Testimonials"
          title="Loved by the teams we build with"
        />

        <div className="mx-auto mt-14 max-w-3xl">
          <figure className="relative rounded-3xl border border-border bg-card p-8 sm:p-12">
            <div className="flex gap-1" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-4 fill-brand text-brand" />
              ))}
            </div>
            <blockquote className="mt-6 text-xl leading-relaxed font-medium tracking-tight text-balance sm:text-2xl">
              “{current.quote}”
            </blockquote>
            <figcaption className="mt-8 flex items-center gap-4">
              <span className="flex size-11 items-center justify-center rounded-full bg-gradient-to-br from-brand to-brand-2 text-sm font-semibold text-primary-foreground">
                {current.initials}
              </span>
              <span>
                <span className="block font-semibold tracking-tight">
                  {current.name}
                </span>
                <span className="block text-sm text-muted-foreground">
                  {current.role}
                </span>
              </span>
            </figcaption>
          </figure>

          <div className="mt-6 flex items-center justify-between">
            <div className="flex gap-2">
              {TESTIMONIALS.map((t, i) => (
                <button
                  key={t.name}
                  type="button"
                  aria-label={`Show testimonial from ${t.name}`}
                  onClick={() => setIndex(i)}
                  className={cn(
                    'h-1.5 rounded-full transition-all',
                    i === index
                      ? 'w-6 bg-brand'
                      : 'w-1.5 bg-border hover:bg-muted-foreground',
                  )}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                aria-label="Previous testimonial"
                onClick={() => go(-1)}
                className="inline-flex size-9 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-accent"
              >
                <ChevronLeft className="size-4" />
              </button>
              <button
                type="button"
                aria-label="Next testimonial"
                onClick={() => go(1)}
                className="inline-flex size-9 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-accent"
              >
                <ChevronRight className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
