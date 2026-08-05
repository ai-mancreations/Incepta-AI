import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

type SectionHeadingProps = {
  eyebrow: string
  title: string
  description?: string
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'flex flex-col',
        align === 'center' ? 'items-center text-center' : 'items-start',
        className,
      )}
    >
      <Reveal>
        <span className="inline-flex items-center gap-2 font-mono text-xs tracking-widest text-brand uppercase">
          <span className="h-px w-6 bg-brand" />
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={80}>
        <h2
          className={cn(
            'mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl md:text-5xl',
            align === 'center' && 'mx-auto',
          )}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={160}>
          <p
            className={cn(
              'mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty',
              align === 'center' && 'mx-auto',
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  )
}
