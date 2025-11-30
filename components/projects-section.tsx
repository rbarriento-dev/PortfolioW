"use client"

import { ExternalLink, BarChart3, LineChart, PieChart } from "lucide-react"

export default function ProjectsSection() {
  const projects = [
    {
      title: "Dashboard de Ventas",
      description: "Dashboard interactivo en Power BI con análisis de ventas en tiempo real",
      icon: BarChart3,
      tags: ["Power BI", "DAX", "SQL"],
      link: "#",
    },
    {
      title: "Visualizador de Datos",
      description: "Aplicación React para visualizar y explorar datasets complejos",
      icon: LineChart,
      tags: ["React", "TypeScript", "Recharts"],
      link: "#",
    },
    {
      title: "Analytics Platform",
      description: "Plataforma full-stack para análisis de métricas empresariales",
      icon: PieChart,
      tags: ["Next.js", "Python", "PostgreSQL"],
      link: "#",
    },
  ]

  return (
    <section className="space-y-6">
      <div className="dashboard-card border-b-2 border-primary pb-4">
        <h2 className="text-2xl font-bold text-primary">Proyectos Destacados</h2>
        <p className="text-sm text-muted-foreground mt-2">Selección de trabajos en Data Visualization y BI</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project, idx) => {
          const Icon = project.icon
          return (
            <div key={idx} className="dashboard-card flex flex-col">
              <div className="flex items-start justify-between mb-4">
                <Icon className="w-6 h-6 text-primary" />
                <ExternalLink className="w-4 h-4 text-muted-foreground hover:text-primary transition-colors cursor-pointer" />
              </div>

              <h3 className="font-bold text-foreground mb-2 text-primary">{project.title}</h3>
              <p className="text-xs text-muted-foreground mb-4 flex-1">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs border border-primary text-primary px-2 py-1 hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
