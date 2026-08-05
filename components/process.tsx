import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const STEPS = [
  { title: 'Discovery', desc: 'We dig into your goals, users, and constraints to define what success looks like.' },
  { title: 'Planning', desc: 'Scope, architecture, and a realistic roadmap with clear milestones.' },
  { title: 'Design', desc: 'Interface and system design that balances beauty with usability.' },
  { title: 'Development', desc: 'Senior engineers build in tight, reviewable iterations.' },
  { title: 'Testing', desc: 'Automated and manual QA to ship with confidence.' },
  { title: 'Deployment', desc: 'Zero-downtime releases on scalable cloud infrastructure.' },
  { title: 'Growth & Support', desc: 'Ongoing optimization, monitoring, and iteration.' },
]

export function Process() {
  return (
    <section id="process" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="How We Work"
          title="A proven path from idea to launch"
          description="A transparent, repeatable process refined across hundreds of products."
        />

        <ol className="relative mt-14 border-l border-border pl-6 sm:pl-8">
          {STEPS.map((step, i) => (
            <Reveal as="li" key={step.title} delay={(i % 3) * 70} className="relative pb-10 last:pb-0">
              <span className="absolute -left-[calc(1.5rem+7px)] top-1 flex size-3.5 items-center justify-center sm:-left-[calc(2rem+7px)]">
                <span className="size-3.5 rounded-full border-2 border-brand bg-background" />
              </span>
              <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:gap-6">
                <span className="font-mono text-sm text-brand">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="text-lg font-semibold tracking-tight">
                    {step.title}
                  </h3>
                  <p className="mt-1 max-w-xl text-sm leading-relaxed text-muted-foreground">
                    {step.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
