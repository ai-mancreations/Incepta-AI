const COLUMNS = [
  {
    title: 'Services',
    links: ['Web Development', 'Mobile Development', 'AI Solutions', 'Cloud & DevOps', 'Branding & Design'],
  },
  {
    title: 'Company',
    links: ['About', 'Our Work', 'Careers', 'Blog', 'Contact'],
  },
  {
    title: 'Technologies',
    links: ['Next.js & React', 'Node & Python', 'AI & LangChain', 'AWS & GCP', 'Kubernetes'],
  },
  {
    title: 'Legal',
    links: ['Privacy Policy', 'Terms & Conditions', 'Security', 'Cookie Settings'],
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card/40">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_repeat(4,1fr)]">
          <div>
            <div className="flex items-center gap-2.5">
              <img
                src="/logo/incepta-brain-mark.png"
                alt="Incepta AI"
                className="h-8 w-auto"
              />
              <span className="text-base font-semibold tracking-tight">
                Incepta AI
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              A product engineering and AI solutions company building
              world-class digital products from idea to scale.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              hello@incepta.ai
            </p>
          </div>

          {COLUMNS.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-semibold tracking-tight">
                {column.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Incepta AI. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Engineered with precision.
          </p>
        </div>
      </div>
    </footer>
  )
}
