"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Github, Linkedin, Send } from "lucide-react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", message: "" })
  }

  const socialLinks = [
    { icon: Github, label: "GitHub", url: "#" },
    { icon: Linkedin, label: "LinkedIn", url: "#" },
    { icon: Mail, label: "Email", url: "mailto:rodrigo@example.com" },
  ]

  return (
    <section className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Contact Form */}
        <div className="dashboard-card">
          <h2 className="text-2xl font-bold text-foreground mb-6">Contacto</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-xs uppercase tracking-wider text-muted-foreground block mb-2">Nombre</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-muted border border-border rounded px-3 py-2 text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                placeholder="Tu nombre"
                required
              />
            </div>

            <div>
              <label className="text-xs uppercase tracking-wider text-muted-foreground block mb-2">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-muted border border-border rounded px-3 py-2 text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                placeholder="tu@email.com"
                required
              />
            </div>

            <div>
              <label className="text-xs uppercase tracking-wider text-muted-foreground block mb-2">Mensaje</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-muted border border-border rounded px-3 py-2 text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none h-24"
                placeholder="Tu mensaje..."
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground px-4 py-2 rounded text-sm font-bold uppercase tracking-wider hover:bg-accent transition-colors flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              Enviar
            </button>
          </form>
        </div>

        {/* Social Links & Info */}
        <div className="space-y-6">
          <div className="dashboard-card">
            <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-4">Redes Sociales</h3>
            <div className="space-y-3">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.url}
                    className="flex items-center gap-3 p-3 bg-muted/50 border border-border rounded hover:bg-primary/10 hover:border-primary transition-all group"
                  >
                    <Icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-bold text-foreground">{social.label}</span>
                  </a>
                )
              })}
            </div>
          </div>

          <div className="dashboard-card">
            <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-4">Información</h3>
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Email</p>
                <p className="text-foreground font-bold">rodrigo@example.com</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Ubicación</p>
                <p className="text-foreground font-bold">Colombia</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Disponibilidad</p>
                <p className="text-foreground font-bold">Abierto a proyectos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
