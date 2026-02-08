"use client"

import type React from "react"
import { useState } from "react"
import { Mail, Phone } from "lucide-react"
import Link from "next/link"

import { Input } from "../components/ui/input"
import { Button } from "../components/ui/button"
import { Textarea } from "../components/ui/textarea"

import { motion } from "framer-motion"
import Footer from "../components/layout/Footer"
import Navbar from "../components/layout/Navbar"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    description: "",
  })
  const [loading, setLoading] = useState(false)
  const [accepted, setAccepted] = useState(false)
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
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          from: formData.email,
          subject: formData.subject,
          message: formData.description,
        }),
      })

      const data = await res.json()

      if (!res.ok) {
        if (res.status === 429) {
          setError("Osiągnięto dzienny limit wiadomości. Spróbuj jutro.")
        } else {
          setError(data?.error || "Wystąpił błąd podczas wysyłania.")
        }
        return
      }

      setSuccess("Wiadomość została wysłana ✔️")
      setTimeout(() => setSuccess(null), 4000)
      setFormData({ email: "", subject: "", description: "" })
    } catch {
      setError("Nie udało się połączyć z serwerem.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#fafafa] text-zinc-900">
      <Navbar />

      {/* Hero */}
      <section className="container mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-zinc-500 mb-6">
            Skontaktuj się z nami
          </p>
          <h1 className="font-serif text-5xl md:text-6xl mb-6">
            Jesteśmy tutaj, aby <span className="text-red-600">pomóc</span>
          </h1>
          <p className="text-lg text-zinc-600 leading-relaxed">
            Masz pytania dotyczące naszego e-booka lub budowania relacji?
            Napisz do nas — chętnie odpowiemy.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-10"
          >
            <div>
              <h2 className="font-serif text-3xl mb-8">
                Informacje <span className="text-red-600">kontaktowe</span>
              </h2>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="p-3 bg-red-50 rounded-lg border border-red-100 text-red-600">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-zinc-500">Email</p>
                    <a
                      href="mailto:kontakt@relapy.pl"
                      className="text-lg hover:text-red-600 transition-colors"
                    >
                      kontakt@relapy.pl
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="p-3 bg-red-50 rounded-lg border border-red-100 text-red-600">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-zinc-500">Telefon</p>
                    <a
                      href="tel:+48123456789"
                      className="text-lg hover:text-red-600 transition-colors"
                    >
                      +48 123 456 789
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-zinc-200">
              <h3 className="text-xl font-serif mb-3">Godziny pracy</h3>
              <p className="text-zinc-600">
                Poniedziałek – Piątek: 9:00 – 17:00
              </p>
              <p className="text-zinc-600">Weekend: Zamknięte</p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white border border-zinc-200 rounded-2xl p-8 shadow-sm"
          >
            <h2 className="font-serif text-2xl mb-6">
              Napisz <span className="text-red-600">do nas</span>
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm mb-2 text-zinc-600">
                  Email
                </label>
                <Input
                  type="email"
                  placeholder="twoj@email.pl"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="bg-white border-zinc-300 text-zinc-900 placeholder:text-zinc-400 focus:border-red-500"
                />
              </div>

              <div>
                <label className="block text-sm mb-2 text-zinc-600">
                  Temat
                </label>
                <Input
                  type="text"
                  placeholder="Czego dotyczy wiadomość?"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  required
                  className="bg-white border-zinc-300 text-zinc-900 placeholder:text-zinc-400 focus:border-red-500"
                />
              </div>

              <div>
                <label className="block text-sm mb-2 text-zinc-600">
                  Wiadomość
                </label>
                <Textarea
                  rows={6}
                  placeholder="Opisz swoją sprawę..."
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      description: e.target.value,
                    })
                  }
                  required
                  className="bg-white border-zinc-300 text-zinc-900 placeholder:text-zinc-400 focus:border-red-500"
                />
              </div>

              <div className="flex items-start gap-2 text-sm text-zinc-600">
                <input
                  type="checkbox"
                  className="mt-1"
                  onChange={(e) => setAccepted(e.target.checked)}
                />
                <p>
                  Wyrażam zgodę na przetwarzanie danych osobowych zgodnie z{" "}
                  <Link href="/policy" className="text-red-600 underline">
                    polityką prywatności
                  </Link>
                </p>
              </div>

              {success && (
                <div className="text-sm text-green-700 bg-green-50 border border-green-200 rounded-lg p-3">
                  {success}
                </div>
              )}

              {error && (
                <div className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-lg p-3">
                  {error}
                </div>
              )}

              <Button
                type="submit"
                variant="hero"
                disabled={loading || !accepted}
                className="w-full h-11 text-base disabled:opacity-50"
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
