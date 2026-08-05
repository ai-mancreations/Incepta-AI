'use client'

import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/theme-toggle'
import { cn } from '@/lib/utils'
import { ArrowRight, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'

const NAV = [
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Work', href: '#portfolio' },
  { label: 'Tech', href: '#technologies' },
  { label: 'FAQ', href: '#faq' },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-border/70 glass'
          : 'border-b border-transparent',
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2.5">
          <Logo />
          <span className="text-base font-semibold tracking-tight">
            Axion Labs
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button
            size="lg"
            className="hidden sm:inline-flex"
            nativeButton={false}
            render={<a href="#contact" />}
          >
            Start Your Project
            <ArrowRight className="size-4" />
          </Button>
          <button
            type="button"
            className="inline-flex size-9 items-center justify-center rounded-lg border border-border text-foreground md:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border/70 glass md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-4 py-3 sm:px-6">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
            <Button
              size="lg"
              className="mt-2 w-full"
              nativeButton={false}
              render={<a href="#contact" onClick={() => setOpen(false)} />}
            >
              Start Your Project
              <ArrowRight className="size-4" />
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}

function Logo() {
  return (
    <span className="flex size-8 items-center justify-center rounded-lg bg-gradient-to-br from-brand to-brand-2 text-primary-foreground">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="size-4.5"
        aria-hidden="true"
      >
        <path
          d="M12 2 3 20h4l5-11 5 11h4L12 2Z"
          fill="currentColor"
          className="text-background"
        />
      </svg>
    </span>
  )
}
