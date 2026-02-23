"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Calendar, Tag } from "lucide-react"
import { useEffect, useState } from "react"
import { Button } from "@/app/components/ui/button"
import { formatDate, BlogDocument } from "@/app/lib/useBlogs"
import Navbar from "@/app/components/layout/Navbar"
import Footer from "@/app/components/layout/Footer"

// ── Skeleton ─────────────────────────────────────────────────────────────────
function BlogPostSkeleton() {
  return (
    <div className="min-h-screen bg-[#fafafa]">
      <Navbar />

      {/* Hero image skeleton */}
      <div className="relative h-[60vh] mt-[3.4rem] min-h-[500px] rounded-b-2xl overflow-hidden bg-zinc-200 animate-pulse">
        {/* category + date chips */}
        <div className="absolute bottom-16 left-6 md:left-[max(1.5rem,calc(50%-672px))] flex items-center gap-4">
          <div className="h-6 w-28 bg-white/20 rounded-full" />
          <div className="h-6 w-36 bg-white/20 rounded-full" />
        </div>
        {/* title lines */}
        <div className="absolute bottom-6 left-6 md:left-[max(1.5rem,calc(50%-672px))] w-full max-w-2xl space-y-3 pr-12">
          <div className="h-8 w-full bg-white/20 rounded-lg" />
          <div className="h-8 w-4/5 bg-white/20 rounded-lg" />
          <div className="h-8 w-2/3 bg-white/20 rounded-lg" />
        </div>
      </div>

      {/* Back link skeleton */}
      <div className="container mx-auto px-6 py-8">
        <div className="h-4 w-32 bg-zinc-200 rounded-full animate-pulse" />
      </div>

      {/* Article skeleton */}
      <div className="max-w-3xl mx-auto px-6 mb-16 space-y-4 animate-pulse">
        {[100, 90, 95, 80, 100, 85, 70, 100, 60].map((w, i) => (
          <div key={i} className={`h-4 bg-zinc-200 rounded-full`} style={{ width: `${w}%` }} />
        ))}
        {/* fake image in article */}
        <div className="h-56 bg-zinc-200 rounded-xl my-6" />
        {[95, 88, 100, 75, 90].map((w, i) => (
          <div key={i + 20} className="h-4 bg-zinc-200 rounded-full" style={{ width: `${w}%` }} />
        ))}
      </div>

      <Footer />
    </div>
  )
}

// ── Not-found state ───────────────────────────────────────────────────────────
function BlogPostNotFound() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-zinc-900">
      <Navbar />
      <div className="flex items-center justify-center min-h-[70vh]">
        <div className="text-center">
          <h1 className="font-serif text-4xl mb-4">Nie znaleziono wpisu</h1>
          <p className="text-zinc-500 mb-6">Wpis mógł zostać usunięty lub nie istnieje.</p>
          <Link href="/blog" className="text-red-600 hover:text-red-700 underline">
            Wróć do bloga
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}

// ── Main client component ─────────────────────────────────────────────────────
export default function BlogPostClient({ post }: { post: BlogDocument | null }) {
  const [timedOut, setTimedOut] = useState(false)

  // If post is null (not yet resolved on client side), start a 20-second timer
  useEffect(() => {
    if (post) return
    const id = setTimeout(() => setTimedOut(true), 20_000)
    return () => clearTimeout(id)
  }, [post])

  // Still loading
  if (!post) {
    return timedOut ? <BlogPostNotFound /> : <BlogPostSkeleton />
  }

  // Loaded ✓
  return (
    <div className="min-h-screen bg-[#fafafa] text-zinc-900">
      <Navbar />

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-[60vh] mt-[3.4rem] min-h-[500px] rounded-b-2xl overflow-hidden shadow-sm"
      >
        <Image
          src={post.mainImage || "/placeholder.svg"}
          alt={post.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 via-transparent to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-6 pb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="text-sm uppercase tracking-wider text-white bg-red-600/20 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-2">
                  <Tag className="w-3 h-3" />
                  {post.category}
                </span>
                <span className="text-sm text-zinc-200 flex items-center gap-2">
                  <Calendar className="w-3 h-3" />
                  {formatDate(post.createdAt)}
                </span>
              </div>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl max-w-4xl leading-tight text-white">
                {post.title}
              </h1>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="container mx-auto px-6 py-8"
      >
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Wróć do bloga
        </Link>
      </motion.div>

      {/* Article Content */}
      <article
        className="prose max-w-3xl mx-auto px-6 mb-16 [&_p]:leading-relaxed [&_h2]:font-serif [&_h3]:font-serif [&_img]:rounded-xl [&_img]:my-6 [&_a]:text-red-600 [&_a]:underline [&_ul]:text-zinc-700 [&_ol]:text-zinc-700 [&_li]:text-zinc-700 [&_blockquote]:border-l-zinc-300 [&_blockquote]:text-zinc-600 [&_strong]:text-zinc-900 [&_em]:text-zinc-700"
        dangerouslySetInnerHTML={{ __html: post.htmlContent }}
      />

      {/* CTA */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="border-t border-zinc-200 py-16"
      >
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl mb-6">Chcesz więcej?</h2>
          <p className="text-zinc-600 mb-8 max-w-xl mx-auto">
            Sprawdź naszego e-booka, który pomoże Ci budować głębsze i bardziej satysfakcjonujące relacje.
          </p>
          <Button
            className="bg-red-600 text-white hover:bg-red-700 px-8"
            onClick={() => (window.location.href = "/payment")}
          >
            Kup e-booka
          </Button>
        </div>
      </motion.section>

      <Footer />
    </div>
  )
}