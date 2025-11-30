"use client"

import Header from "@/components/header"
import AboutSection from "@/components/about-section"
import SkillsChart from "@/components/skills-chart"
import ContactPanel from "@/components/contact-panel"
import ProjectsSection from "@/components/projects-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground grid-lines">
      <Header />

      <div className="max-w-7xl mx-auto px-4 py-12 space-y-8">
        {/* Row 1: About Section */}
        <AboutSection />

        {/* Row 2: Skills Chart + Contact Panel */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <SkillsChart />
          </div>
          <div>
            <ContactPanel />
          </div>
        </div>

        {/* Row 3: Projects */}
        <ProjectsSection />
      </div>
    </main>
  )
}
