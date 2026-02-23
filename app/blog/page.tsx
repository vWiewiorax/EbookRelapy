"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { useEffect } from "react"
import { BlogDocument, formatDate, useBlogs } from "../lib/useBlogs"
import { Button } from "../components/ui/button"
import Footer from "../components/layout/Footer"
import Navbar from "../components/layout/Navbar"

// ── Skeleton card ────────────────────────────────────────────────────────────
function BlogCardSkeleton() {
  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden animate-pulse">
      {/* image area */}
      <div className="aspect-[4/3] bg-zinc-200" />
      {/* text area */}
      <div className="p-6 space-y-3">
        <div className="h-3 w-24 bg-zinc-200 rounded-full" />
        <div className="h-5 w-3/4 bg-zinc-200 rounded-full" />
        <div className="h-4 w-full bg-zinc-100 rounded-full" />
        <div className="h-4 w-5/6 bg-zinc-100 rounded-full" />
      </div>
    </div>
  )
}

// ── Page ─────────────────────────────────────────────────────────────────────
export default function BlogPage() {
  const { products: blogPosts, isLoaded, listenToProducts } = useBlogs()

  useEffect(() => {
    const unsubscribe = listenToProducts()
    return unsubscribe
  }, [listenToProducts])

  return (
    <div className="min-h-screen text-zinc-900">
      <Navbar />

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-zinc-500 mb-6">Blog</p>
          <h1 className="font-serif text-5xl md:text-6xl mb-6 leading-tight">
            Inspiracje <span className="text-red-600">i porady</span> dla Twojego związku
          </h1>
          <p className="text-lg text-zinc-600 leading-relaxed">
            Praktyczne wskazówki, przemyślenia i historie, które pomogą Ci budować głębsze i bardziej satysfakcjonujące relacje.
          </p>
        </motion.div>

        {/* Blog Grid — skeletons while loading, real cards when ready */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {!isLoaded
            ? Array.from({ length: 6 }).map((_, i) => <BlogCardSkeleton key={i} />)
            : blogPosts.length === 0
            ? (
              <div className="col-span-full text-center py-20">
                <p className="text-zinc-400 text-lg">Brak wpisów na blogu.</p>
              </div>
            )
            : blogPosts.map((post: BlogDocument, index: number) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="group bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <Link href={`/blog/${post.id}`} className="block">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={post.mainImage || "/placeholder.svg"}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <span className="text-xs uppercase tracking-wider text-white/80 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-sm text-zinc-400 mb-2">{formatDate(post.createdAt)}</p>
                      <h2 className="font-serif text-xl mb-2 text-zinc-900 group-hover:text-red-600 transition-colors leading-snug">
                        {post.title}
                      </h2>
                      <p className="text-zinc-600 text-sm leading-relaxed">{post.excerpt}</p>
                    </div>
                  </Link>
                </motion.article>
              ))}
        </div>

        {/* Load More */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <Button variant="hero" className="px-8">
            Wczytaj więcej
          </Button>
        </motion.div>
      </section>

      <Footer />
    </div>
  )
}