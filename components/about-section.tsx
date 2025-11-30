"use client"

export default function AboutSection() {
  return (
    <section className="space-y-6">
      {/* Main About Card */}
      <div className="dashboard-card">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Photo & Info */}
          <div className="md:col-span-2 flex flex-col justify-center">
            <div className="w-32 h-32 border-2 border-primary mb-6 flex items-center justify-center bg-secondary">
              <span className="text-5xl font-bold text-primary">RB</span>
            </div>
            <h2 className="text-3xl font-bold text-primary mb-3">Rodrigo Barrientos</h2>
            <p className="text-sm leading-relaxed text-foreground mb-4">
              Analista especializado en Data Visualization, Frontend y soluciones BI. Combino diseño y análisis para
              crear dashboards claros y funcionales que transforman datos en insights.
            </p>
            <p className="text-xs text-muted-foreground uppercase tracking-wider">
              Especializado en Power BI, React, DAX, SQL
            </p>
          </div>

          {/* KPIs */}
          <div className="md:col-span-2 grid grid-cols-1 gap-6">
            <div className="border-l-2 border-primary pl-4">
              <div className="kpi-value">5+</div>
              <div className="kpi-label">Años de Experiencia</div>
            </div>
            <div className="border-l-2 border-primary pl-4">
              <div className="kpi-value">15+</div>
              <div className="kpi-label">Proyectos Completados</div>
            </div>
            <div className="border-l-2 border-primary pl-4">
              <div className="kpi-value">10+</div>
              <div className="kpi-label">Herramientas Dominadas</div>
            </div>
          </div>
        </div>
      </div>

      {/* Tools Stack */}
      <div className="dashboard-card">
        <h3 className="text-xs uppercase tracking-wider text-primary font-bold mb-4 border-b border-primary pb-3">
          Herramientas: Power BI, React, DAX, SQL
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {["Power BI", "React", "TypeScript", "DAX", "Python", "SQL", "Tableau", "Next.js", "Tailwind", "Git"].map(
            (skill) => (
              <div
                key={skill}
                className="border border-primary px-3 py-2 text-xs text-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {skill}
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  )
}
