"use client"

import { Github, Linkedin, Mail } from "lucide-react"

export default function ContactPanel() {
  const socialLinks = [
    { icon: Github, label: "GitHub", url: "https://github.com" },
    { icon: Linkedin, label: "LinkedIn", url: "https://linkedin.com" },
    { icon: Mail, label: "Email", url: "mailto:rodrigo@example.com" },
  ]

  return (
    <div className="dashboard-card h-full flex flex-col">
      <h3 className="text-xs uppercase tracking-wider text-primary font-bold mb-4 border-b border-primary pb-3">
        Contacto
      </h3>
      <div className="space-y-3 flex-1">
        {socialLinks.map((social) => {
          const Icon = social.icon
          return (
            <a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 border border-primary text-foreground hover:bg-primary hover:text-primary-foreground transition-all group"
            >
              <Icon className="w-5 h-5" />
              <span className="text-sm font-bold">{social.label}</span>
            </a>
          )
        })}
      </div>
    </div>
  )
}
