import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const GROUPS = [
  { label: 'Frontend', items: ['React', 'Next.js', 'Vue', 'TypeScript', 'Tailwind CSS'] },
  { label: 'Backend', items: ['Node.js', 'Python', 'Java', 'Go'] },
  { label: 'Databases', items: ['PostgreSQL', 'MongoDB', 'MySQL', 'Firebase'] },
  { label: 'AI', items: ['OpenAI', 'Claude', 'Gemini', 'LangChain', 'Vector DBs'] },
  { label: 'Cloud', items: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes'] },
]

export function Technologies() {
  return (
    <section
      id="technologies"
      className="relative border-y border-border bg-card/30 py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Technologies"
          title="A modern stack, chosen for the job"
          description="We work with battle-tested, best-in-class tools across the entire stack."
        />

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {GROUPS.map((group, i) => (
            <Reveal key={group.label} delay={(i % 3) * 90}>
              <div className="h-full rounded-2xl border border-border bg-card p-6">
                <h3 className="font-mono text-xs tracking-widest text-brand uppercase">
                  {group.label}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg border border-border bg-background px-3 py-1.5 text-sm font-medium text-foreground/90 transition-colors hover:border-brand/50 hover:text-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
