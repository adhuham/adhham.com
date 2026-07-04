import { Header } from '@/components/home/header'
import { Hero } from '@/components/home/hero'
import { CallToAction } from '@/components/home/call-to-action'
import { WorkExperience } from '@/components/home/work-experience'
import { Education } from '@/components/home/education'
import { CurrentlyBuilding } from '@/components/home/currently-building'
import { Writing } from '@/components/home/writing'
import { Projects } from '@/components/home/projects'
import { Contact } from '@/components/home/contact'
import { Footer } from '@/components/home/footer'

export default function Home() {
  return (
    <main className="min-h-screen text-foreground">
      <Header />
      <Hero />
      <CallToAction />
      <WorkExperience />
      <Education />
      <Writing />
      {/*
      <CurrentlyBuilding />
      <Projects />
      */}
      <Contact />
      <Footer />
    </main>
  )
}
