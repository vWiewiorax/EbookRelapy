"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, X } from "lucide-react"
import Link from "next/link"
import { Input } from "../components/ui/input"
import { Button } from "../components/ui/button"
import { Textarea } from "../components/ui/textarea"

import { motion } from "framer-motion"
import Footer from "../components/layout/Footer"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    description: "",
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
  
    setLoading(true)
    setError(null)
    setSuccess(null)
  
    try {
      const res = await fetch("/api/send_email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: formData.email,
          subject: formData.subject,
          message: formData.description,
        }),
      })
  
      const data = await res.json()
  
      if (!res.ok) {
        // Daily limit reached (429)
        if (res.status === 429) {
          setError("Osiągnięto dzienny limit wiadomości. Spróbuj jutro.")
        } else {
          setError(data?.error || "Wystąpił błąd podczas wysyłania.")
        }
        return
      }
  
      setSuccess("Wiadomość została wysłana ✔️")
      setFormData({ email: "", subject: "", description: "" })
    } catch {
      setError("Nie udało się połączyć z serwerem.")
    } finally {
      setLoading(false)
    }
  }
  

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="border-b border-white/10"
      >
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-serif font-bold tracking-tight">
              RELAPY
            </Link>
            <div className="flex items-center gap-8">
              <Link href="/" className="text-sm hover:text-white/80 transition-colors">
                Strona główna
              </Link>
              <Link href="/about" className="text-sm hover:text-white/80 transition-colors">
                O nas
              </Link>
              <Link href="/contact" className="text-sm hover:text-white/80 transition-colors">
                Kontakt
              </Link>
              <Button className="bg-white text-black hover:bg-white/90 rounded-full px-6">Kup e-booka</Button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-white/60 mb-6">SKONTAKTUJ SIĘ Z NAMI</p>
          <h1 className="font-serif text-5xl md:text-6xl mb-6 text-balance leading-tight">Jesteśmy tutaj, aby pomóc</h1>
          <p className="text-lg text-white/70 leading-relaxed">
            Masz pytania dotyczące naszego e-booka? Chcesz dowiedzieć się więcej o budowaniu wartościowych związków?
            Skontaktuj się z nami - chętnie odpowiemy na wszystkie pytania.
          </p>
        </motion.div>

        {/* Contact Info & Form Grid */}
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h2 className="font-serif text-3xl mb-8">Informacje kontaktowe</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-white/60 mb-1">Email</p>
                    <a href="mailto:kontakt@relapy.pl" className="text-lg hover:text-white/80 transition-colors">
                      kontakt@relapy.pl
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-white/60 mb-1">Telefon</p>
                    <a href="tel:+48123456789" className="text-lg hover:text-white/80 transition-colors">
                      +48 123 456 789
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-white/10">
              <h3 className="text-xl font-serif mb-4">Godziny pracy</h3>
              <div className="space-y-2 text-white/70">
                <p>Poniedziałek - Piątek: 9:00 - 17:00</p>
                <p>Weekend: Zamknięte</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-8"
          >
            <h2 className="font-serif text-2xl mb-6">Napisz do nas</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm mb-2 text-white/80">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="twoj@email.pl"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-black/50 border-white/20 text-white placeholder:text-white/40"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm mb-2 text-white/80">
                  Temat
                </label>
                <Input
                  id="subject"
                  type="text"
                  placeholder="Czego dotyczy Twoja wiadomość?"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  required
                  className="bg-black/50 border-white/20 text-white placeholder:text-white/40"
                />
              </div>

              <div>
                <label htmlFor="description" className="block text-sm mb-2 text-white/80">
                  Wiadomość
                </label>
                <Textarea
                  id="description"
                  placeholder="Opisz szczegółowo swoją sprawę..."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  required
                  rows={6}
                  className="bg-black/50 border-white/20 text-white placeholder:text-white/40 resize-none"
                />
              </div>
              {success && (
                <div className="text-sm text-green-400 bg-green-400/10 border border-green-400/20 rounded-lg p-3">
                    {success}
                </div>
                )}

                {error && (
                <div className="text-sm text-red-400 bg-red-400/10 border border-red-400/20 rounded-lg p-3">
                    {error}
                </div>
                )}
             <Button
            type="submit"
            disabled={loading}
            className="w-full bg-white text-black hover:bg-white/90 h-11 text-base disabled:opacity-50"
            >
            {loading ? "Wysyłanie..." : "Wyślij wiadomość"}
            </Button>
            </form>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
