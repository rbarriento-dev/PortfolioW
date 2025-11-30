"use client"

export default function SkillsChart() {
  const skills = [
    { name: "Power BI", level: 95 },
    { name: "React", level: 90 },
    { name: "SQL", level: 88 },
    { name: "DAX", level: 92 },
    { name: "TypeScript", level: 85 },
  ]

  return (
    <div className="dashboard-card">
      <h3 className="text-xs uppercase tracking-wider text-primary font-bold mb-6 border-b border-primary pb-3">
        Habilidades más utilizadas
      </h3>
      <div className="space-y-4">
        {skills.map((skill) => (
          <div key={skill.name}>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-bold text-foreground">{skill.name}</span>
              <span className="text-xs text-muted-foreground">{skill.level}%</span>
            </div>
            <div className="w-full h-2 border border-primary bg-secondary">
              <div className="h-full bg-primary transition-all duration-300" style={{ width: `${skill.level}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
