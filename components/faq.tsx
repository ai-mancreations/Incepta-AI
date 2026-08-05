'use client'

import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { cn } from '@/lib/utils'
import { Plus } from 'lucide-react'
import { useState } from 'react'

const FAQS = [
  {
    q: 'How much does a project cost?',
    a: 'Every engagement is scoped to your goals. After a short discovery call we provide a fixed-price or milestone-based proposal. Most projects start in the mid five figures, with enterprise builds scaling from there.',
  },
  {
    q: 'How long does it take to launch?',
    a: 'Landing pages and MVPs typically ship in 4–8 weeks. Larger platforms run 3–6 months depending on scope. We work in tight iterations so you see progress every week.',
  },
  {
    q: 'What technologies do you work with?',
    a: 'We favor modern, proven tools — React, Next.js, Node.js, Python, and the leading AI platforms — but we always choose the stack that best fits your product and team.',
  },
  {
    q: 'Do you offer ongoing support?',
    a: 'Yes. We offer flexible support and growth retainers covering monitoring, maintenance, optimization, and continued feature development after launch.',
  },
  {
    q: 'Can you work with our existing team?',
    a: 'Absolutely. We can embed with your team, augment specific capabilities, or take full ownership of a product — whatever moves you fastest.',
  },
  {
    q: 'Do you sign NDAs and own IP transfer?',
    a: 'Yes. We happily sign NDAs, and all intellectual property is transferred to you as work is delivered and invoices are settled.',
  },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="relative border-t border-border bg-card/30 py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions, answered"
          description="Everything you need to know about working with us."
        />

        <div className="mt-12 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
          {FAQS.map((item, i) => {
            const isOpen = open === i
            return (
              <Reveal key={item.q} delay={(i % 3) * 60}>
                <div>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
                  >
                    <span className="text-base font-medium tracking-tight">
                      {item.q}
                    </span>
                    <Plus
                      className={cn(
                        'size-5 shrink-0 text-brand transition-transform duration-300',
                        isOpen && 'rotate-45',
                      )}
                    />
                  </button>
                  <div
                    className={cn(
                      'grid transition-all duration-300 ease-out',
                      isOpen
                        ? 'grid-rows-[1fr] opacity-100'
                        : 'grid-rows-[0fr] opacity-0',
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground sm:px-6">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
