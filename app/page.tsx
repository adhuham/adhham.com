import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { CallToAction } from '@/components/call-to-action'
import { WorkExperience } from '@/components/work-experience'
import { Education } from '@/components/education'
import { CurrentlyBuilding } from '@/components/currently-building'
import { Writing } from '@/components/writing'
import { Projects } from '@/components/projects'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen text-foreground">
      <Header />
      <Hero />
      <CallToAction />
      <WorkExperience />
      <Education />
      {/*
      <CurrentlyBuilding />
      <Writing />
      <Projects />
      */}
      <Contact />
      <Footer />
    </main>
  )
}
