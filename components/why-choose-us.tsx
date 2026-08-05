import { AnimatedCounter } from '@/components/animated-counter'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import {
  GitBranch,
  Layers,
  MessageSquare,
  Rocket,
  ShieldCheck,
  Sparkles,
  Timer,
  Workflow,
} from 'lucide-react'

const STATS = [
  { value: 240, suffix: '+', label: 'Products shipped' },
  { value: 98, suffix: '%', label: 'Client retention' },
  { value: 40, suffix: '+', label: 'Engineers & designers' },
  { value: 12, suffix: 'yrs', label: 'Avg. team experience' },
]

const FEATURES = [
  { icon: Rocket, title: 'End-to-End Development', desc: 'From discovery to launch and beyond — one accountable team.' },
  { icon: Sparkles, title: 'AI-First Development', desc: 'We build intelligence into every product we ship.' },
  { icon: Layers, title: 'Scalable Architecture', desc: 'Systems engineered to grow from MVP to millions of users.' },
  { icon: ShieldCheck, title: 'Security Focused', desc: 'Best-practice security baked into every layer.' },
  { icon: Timer, title: 'Performance Optimized', desc: 'Fast by default — measured, monitored, and tuned.' },
  { icon: MessageSquare, title: 'Dedicated Support', desc: 'A partner that stays long after go-live.' },
  { icon: Workflow, title: 'Agile Development', desc: 'Ship in tight iterations with continuous feedback.' },
  { icon: GitBranch, title: 'Transparent Communication', desc: 'Clear roadmaps, real progress, no surprises.' },
]

export function WhyChooseUs() {
  return (
    <section id="why-us" className="relative border-y border-border bg-card/30 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Engineering excellence, end to end"
          description="We combine senior craft with an AI-first mindset to deliver products that are fast, secure, and built to last."
        />

        <div className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 80}>
              <div className="rounded-2xl border border-border bg-card p-6 text-center">
                <div className="text-4xl font-semibold tracking-tight text-gradient sm:text-5xl">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="mt-2 text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature, i) => {
            const Icon = feature.icon
            return (
              <Reveal key={feature.title} delay={(i % 4) * 80}>
                <div className="group h-full rounded-2xl border border-border bg-card p-6 transition-colors hover:border-brand/40">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-accent text-accent-foreground transition-colors group-hover:bg-brand group-hover:text-primary-foreground">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {feature.desc}
                  </p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
