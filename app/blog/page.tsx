"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { useEffect } from "react"
import { Loader2 } from "lucide-react"
import { BlogDocument, formatDate, useBlogs } from "../lib/useBlogs"
import { Button } from "../components/ui/button"
import Footer from "../components/layout/Footer"
import Navbar from "../components/layout/Navbar"

export default function BlogPage() {
  const { products: blogPosts, isLoaded, listenToProducts } = useBlogs()

  useEffect(() => {
    const unsubscribe = listenToProducts()
    return unsubscribe
  }, [listenToProducts])
  return (
    <div className="min-h-screen  text-white">
      <Navbar />
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-white/60 mb-6">BLOG</p>
          <h1 className="font-serif text-5xl md:text-6xl mb-6 text-balance leading-tight">
            Inspiracje i porady dla Twojego związku
          </h1>
          <p className="text-lg text-white/70 leading-relaxed">
            Praktyczne wskazówki, przemyślenia i historie, które pomogą Ci budować głębsze i bardziej satysfakcjonujące
            relacje.
          </p>
        </motion.div>

        {/* Loading State */}
        {!isLoaded && (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-white/60" />
          </div>
        )}

        {/* Empty State */}
        {isLoaded && blogPosts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-white/60 text-lg">Brak wpisów na blogu.</p>
          </div>
        )}

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {blogPosts.length>0&&blogPosts.map((post:BlogDocument, index:number) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="group"
            >
              <Link href={`/blog/${post.id}`} className="block">
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl mb-4">
                  <Image
                    src={post.mainImage || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="text-xs uppercase tracking-wider text-white/80 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-white/50 mb-2">{formatDate(post.createdAt)}</p>
                <h2 className="font-serif text-xl mb-2 group-hover:text-white/80 transition-colors leading-snug">
                  {post.title}
                </h2>
                <p className="text-white/60 text-sm leading-relaxed">{post.excerpt}</p>
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
          <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 bg-transparent">
            Wczytaj więcej
          </Button>
        </motion.div>
      </section>

      {/* Footer */}
     <Footer />
    </div>
  )
}
