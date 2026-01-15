"use client"

import { X } from "lucide-react"
import { Button } from "../ui/button"
import { getUserCookie, saveUserCookie } from "@/app/lib/cookies"
import { useEffect, useState } from "react"
import Link from "next/link"

export default function CookieWindow() {
  const [visible, setVisible] = useState(false)

  // Check cookie ONCE on mount
  useEffect(() => {
    const choice = getUserCookie()
    if (choice === null) {
      setVisible(true) // no decision yet
    }
  }, [])

  const acceptCookies = () => {
    saveUserCookie("true")
    setVisible(false)
  }

  const declineCookies = () => {
    saveUserCookie("false")
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black/95 backdrop-blur-sm border-t border-white/10 z-50">
     <div className="container mx-auto px-6 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex-1">
                <h3 className="font-serif text-lg mb-2">Używamy plików cookie</h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  Ta strona wykorzystuje pliki cookie w celu zapewnienia najlepszej jakości usług. Kontynuując
                  przeglądanie strony, wyrażasz zgodę na ich użycie.{" "}
                  <Link href="/cookies" className="underline hover:text-white transition-colors">
                    Dowiedz się więcej
                  </Link>
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  onClick={() => setVisible(false)}
                  className="border-white/20 text-white hover:bg-white/10"
                >
                  Ustawienia
                </Button>
                <Button onClick={acceptCookies} className="bg-white text-black hover:bg-white/90">
                  Akceptuj wszystkie
                </Button>
                <button
                  onClick={declineCookies}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                  aria-label="Zamknij"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
    </div>
  )
}
