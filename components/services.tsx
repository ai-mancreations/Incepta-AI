import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import {
  Bot,
  Cloud,
  Code2,
  LineChart,
  Palette,
  Smartphone,
  type LucideIcon,
} from 'lucide-react'

type Service = {
  icon: LucideIcon
  title: string
  blurb: string
  items: string[]
}

const SERVICES: Service[] = [
  {
    icon: Code2,
    title: 'Web Development',
    blurb: 'High-performance sites and custom web apps built to convert.',
    items: [
      'Business & Corporate Websites',
      'E-commerce Platforms',
      'Custom Web Applications',
      'Landing Pages & Portfolios',
    ],
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    blurb: 'Native and cross-platform apps with polished UX.',
    items: [
      'iOS Applications',
      'Android Applications',
      'Cross-platform Apps',
      'Mobile UI/UX Design',
    ],
  },
  {
    icon: Bot,
    title: 'AI Solutions',
    blurb: 'Custom AI systems, agents, and automation that ship value.',
    items: [
      'AI Chatbots & Agents',
      'Workflow Automation',
      'Generative AI Solutions',
      'AI Integrations',
    ],
  },
  {
    icon: LineChart,
    title: 'Software Development',
    blurb: 'Enterprise-grade platforms, dashboards, and APIs.',
    items: [
      'SaaS Platforms',
      'CRM & ERP Systems',
      'Dashboards & Admin Panels',
      'API Development',
    ],
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    blurb: 'Scalable infrastructure with automated delivery.',
    items: [
      'Cloud Deployment (AWS, Azure, GCP)',
      'CI/CD Pipelines',
      'Docker & Kubernetes',
      'Monitoring & Maintenance',
    ],
  },
  {
    icon: Palette,
    title: 'Branding & Design',
    blurb: 'Identity and product design that earns trust.',
    items: [
      'Brand Identity & Logos',
      'Product & UI/UX Design',
      'Graphic Design',
      'Social Media Creatives',
    ],
  },
]

export function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Services"
          title="Everything you need to build and grow"
          description="One partner across the full product lifecycle — from strategy and design to engineering, launch, and scale."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <Reveal key={service.title} delay={(i % 3) * 90}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon
  return (
    <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-6 transition-colors hover:border-brand/40">
      <div className="pointer-events-none absolute -right-16 -top-16 size-40 rounded-full bg-brand/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
      <div className="flex size-11 items-center justify-center rounded-xl border border-border bg-gradient-to-br from-brand/15 to-brand-2/10 text-brand">
        <Icon className="size-5" />
      </div>
      <h3 className="mt-5 text-lg font-semibold tracking-tight">
        {service.title}
      </h3>
      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
        {service.blurb}
      </p>
      <ul className="mt-5 space-y-2.5 border-t border-border pt-5">
        {service.items.map((item) => (
          <li
            key={item}
            className="flex items-center gap-2.5 text-sm text-muted-foreground"
          >
            <span className="size-1.5 shrink-0 rounded-full bg-brand" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
