import { Navigation } from '@/components/Navigation'
import { HeroSection } from '@/components/sections/HeroSection'
import { WhatIsSection } from '@/components/sections/WhatIsSection'
import { ExamplesSection } from '@/components/sections/ExamplesSection'
import { CausesSection } from '@/components/sections/CausesSection'
import { WhyMattersSection } from '@/components/sections/WhyMattersSection'
import { ImpactSection } from '@/components/sections/ImpactSection'
import { TimelineSection } from '@/components/sections/TimelineSection'
import { ActionPlanSection } from '@/components/sections/ActionPlanSection'
import { QuoteSection } from '@/components/sections/QuoteSection'
import { SocialSection } from '@/components/sections/SocialSection'
import { Footer } from '@/components/sections/Footer'

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background" role="main">
        <HeroSection />
        <WhatIsSection />
        <ExamplesSection />
        <CausesSection />
        <WhyMattersSection />
        <ImpactSection />
        <TimelineSection />
        <ActionPlanSection />
        <QuoteSection />
        <SocialSection />
      </main>
      <Footer />
    </>
  )
}
