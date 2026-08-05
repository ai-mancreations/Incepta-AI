import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Services } from '@/components/services'
import { WhyChooseUs } from '@/components/why-choose-us'
import { Process } from '@/components/process'
import { Technologies } from '@/components/technologies'
import { Portfolio } from '@/components/portfolio'
import { Testimonials } from '@/components/testimonials'
import { Faq } from '@/components/faq'
import { Contact } from '@/components/contact'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <Process />
        <Technologies />
        <Portfolio />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
