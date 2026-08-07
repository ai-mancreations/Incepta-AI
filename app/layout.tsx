import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ subsets: ['latin'], variable: '--font-geist-sans' })
const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://incepta-ai.dev'),
  title: {
    default: 'Incepta AI — We Build Digital Products That Scale',
    template: '%s · Incepta AI',
  },
  description:
    'Incepta AI is a product engineering and AI solutions company. We design, develop, and scale custom web, mobile, AI, and cloud products from idea to launch.',
  keywords: [
    'product engineering',
    'AI solutions',
    'web development',
    'mobile app development',
    'SaaS development',
    'cloud & DevOps',
    'custom software',
  ],
  authors: [{ name: 'Incepta AI' }],
  openGraph: {
    title: 'Incepta AI — We Build Digital Products That Scale',
    description:
      'Product engineering and AI solutions company building world-class digital products.',
    type: 'website',
    siteName: 'Incepta AI',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Incepta AI — We Build Digital Products That Scale',
    description:
      'Product engineering and AI solutions company building world-class digital products.',
  },
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'dark light',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f7f7fb' },
    { media: '(prefers-color-scheme: dark)', color: '#0b0b12' },
  ],
}

const themeInit = `(function(){try{var t=localStorage.getItem('theme');var d=t?t==='dark':true;document.documentElement.classList.toggle('dark',d);}catch(e){document.documentElement.classList.add('dark');}})();`

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`dark bg-background ${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
