'use client'

import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import {
  ArrowRight,
  AtSign,
  CheckCircle2,
  Globe,
  Mail,
  MessageCircle,
  Phone,
  Send,
} from 'lucide-react'
import { useState } from 'react'

const CONTACT_METHODS = [
  { icon: Mail, label: 'Email', value: 'hello@axionlabs.dev', href: 'mailto:hello@axionlabs.dev' },
  { icon: Phone, label: 'Phone', value: '+1 (415) 555-0142', href: 'tel:+14155550142' },
  { icon: MessageCircle, label: 'WhatsApp', value: 'Chat with us', href: 'https://wa.me/14155550142' },
]

const SOCIALS = [
  { icon: Send, label: 'Twitter / X', href: '#' },
  { icon: Globe, label: 'LinkedIn', href: '#' },
  { icon: AtSign, label: 'Dribbble', href: '#' },
]

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something great"
          description="Tell us about your project and we'll get back to you within one business day."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-5">
          {/* Form */}
          <Reveal className="lg:col-span-3">
            <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
              {submitted ? (
                <div className="flex min-h-72 flex-col items-center justify-center text-center">
                  <span className="flex size-14 items-center justify-center rounded-full bg-brand/15 text-brand">
                    <CheckCircle2 className="size-7" />
                  </span>
                  <h3 className="mt-5 text-xl font-semibold tracking-tight">
                    Message sent
                  </h3>
                  <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                    Thanks for reaching out. A member of our team will be in
                    touch within one business day.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-6"
                    onClick={() => setSubmitted(false)}
                  >
                    Send another message
                  </Button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Full name" htmlFor="name">
                      <input id="name" name="name" required placeholder="Jane Doe" className={inputClass} />
                    </Field>
                    <Field label="Work email" htmlFor="email">
                      <input id="email" name="email" type="email" required placeholder="jane@company.com" className={inputClass} />
                    </Field>
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Company" htmlFor="company">
                      <input id="company" name="company" placeholder="Company Inc." className={inputClass} />
                    </Field>
                    <Field label="Budget" htmlFor="budget">
                      <select id="budget" name="budget" className={inputClass} defaultValue="">
                        <option value="" disabled>Select a range</option>
                        <option>$10k – $25k</option>
                        <option>$25k – $50k</option>
                        <option>$50k – $100k</option>
                        <option>$100k+</option>
                      </select>
                    </Field>
                  </div>
                  <Field label="Project details" htmlFor="message">
                    <textarea id="message" name="message" required rows={4} placeholder="Tell us what you're building..." className={cnTextarea} />
                  </Field>
                  <Button type="submit" size="lg" className="h-11 w-full text-sm sm:w-auto">
                    Send message
                    <ArrowRight className="size-4" />
                  </Button>
                </form>
              )}
            </div>
          </Reveal>

          {/* Info */}
          <Reveal delay={120} className="lg:col-span-2">
            <div className="flex h-full flex-col gap-4">
              <div className="rounded-2xl border border-border bg-card p-6">
                <div className="space-y-4">
                  {CONTACT_METHODS.map((method) => {
                    const Icon = method.icon
                    return (
                      <a
                        key={method.label}
                        href={method.href}
                        className="flex items-center gap-4 rounded-xl p-2 transition-colors hover:bg-accent"
                      >
                        <span className="flex size-10 items-center justify-center rounded-lg border border-border bg-background text-brand">
                          <Icon className="size-5" />
                        </span>
                        <span>
                          <span className="block text-xs text-muted-foreground">
                            {method.label}
                          </span>
                          <span className="block text-sm font-medium">
                            {method.value}
                          </span>
                        </span>
                      </a>
                    )
                  })}
                </div>
                <div className="mt-6 flex gap-2 border-t border-border pt-6">
                  {SOCIALS.map((social) => {
                    const Icon = social.icon
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        aria-label={social.label}
                        className="inline-flex size-10 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-brand hover:text-foreground"
                      >
                        <Icon className="size-4" />
                      </a>
                    )
                  })}
                </div>
              </div>

              <div className="relative flex-1 overflow-hidden rounded-2xl border border-border">
                <iframe
                  title="Axion Labs office location"
                  className="h-full min-h-56 w-full grayscale"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=-122.42%2C37.77%2C-122.39%2C37.79&layer=mapnik"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

const inputClass =
  'w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-brand focus-visible:ring-2 focus-visible:ring-brand/30'

const cnTextarea = `${inputClass} resize-none`

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string
  htmlFor: string
  children: React.ReactNode
}) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={htmlFor} className="text-sm font-medium text-foreground">
        {label}
      </label>
      {children}
    </div>
  )
}
