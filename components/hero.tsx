import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/reveal'
import { ArrowRight, Play, Sparkles } from 'lucide-react'

const TRUST = ['Northwind', 'Vectra', 'Lumen', 'Kernel', 'Meridian', 'Halcyon']

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Aurora backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute inset-0 bg-background" />
        <div className="animate-aurora absolute -top-40 left-1/2 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-brand/40 blur-[110px]" />
        <div className="animate-aurora absolute top-24 right-0 h-[30rem] w-[30rem] rounded-full bg-brand-2/30 blur-[110px] [animation-delay:-6s]" />
        <div className="animate-aurora absolute top-10 left-0 h-[26rem] w-[26rem] rounded-full bg-brand/25 blur-[120px] [animation-delay:-12s]" />
        <div
          className="absolute inset-0 opacity-[0.4] [mask-image:radial-gradient(ellipse_at_center,black,transparent_72%)]"
          style={{
            backgroundImage:
              'linear-gradient(to right, color-mix(in oklch, var(--foreground) 8%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in oklch, var(--foreground) 8%, transparent) 1px, transparent 1px)',
            backgroundSize: '56px 56px',
          }}
        />
      </div>

      <div className="mx-auto max-w-6xl px-4 pt-36 pb-20 sm:px-6 md:pt-44 md:pb-28">
        <Reveal>
          <div className="mx-auto flex w-fit items-center gap-2 rounded-full border border-border bg-card/50 px-3.5 py-1.5 text-xs font-medium text-muted-foreground">
            <Sparkles className="size-3.5 text-brand" />
            AI-first product engineering
          </div>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="mx-auto mt-6 max-w-4xl text-center text-4xl font-semibold tracking-tight text-balance sm:text-6xl md:text-7xl">
            We build digital products{' '}
            <span className="text-gradient">that scale.</span>
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-relaxed text-muted-foreground text-pretty">
            From websites and mobile apps to AI-powered software and automation,
            we engineer technology that helps businesses grow faster — from idea
            to launch and beyond.
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              size="lg"
              className="h-11 px-5 text-sm"
              nativeButton={false}
              render={<a href="#contact" />}
            >
              Start Your Project
              <ArrowRight className="size-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-11 px-5 text-sm"
              nativeButton={false}
              render={<a href="#portfolio" />}
            >
              <Play className="size-4" />
              View Our Work
            </Button>
          </div>
        </Reveal>

        <Reveal delay={340}>
          <div className="mt-16">
            <p className="text-center text-xs font-medium tracking-widest text-muted-foreground uppercase">
              Trusted by teams building the future
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
              {TRUST.map((name) => (
                <span
                  key={name}
                  className="text-lg font-semibold tracking-tight text-muted-foreground/70 transition-colors hover:text-foreground"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
