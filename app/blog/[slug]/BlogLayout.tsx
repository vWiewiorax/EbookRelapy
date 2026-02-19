"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Calendar, Tag } from "lucide-react"
import { Button } from "@/app/components/ui/button"
import { formatDate, BlogDocument } from "@/app/lib/useBlogs"
import Navbar from "@/app/components/layout/Navbar"
import Footer from "@/app/components/layout/Footer"

export default function BlogPostClient({ post }: { post: BlogDocument }) {
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
        className="prose max-w-3xl mx-auto px-6 mb-16  [&_p]:leading-relaxed [&_h2]:font-serif [&_h3]:font-serif [&_img]:rounded-xl [&_img]:my-6 [&_a]:text-red-600 [&_a]:underline [&_ul]:text-zinc-700 [&_ol]:text-zinc-700 [&_li]:text-zinc-700 [&_blockquote]:border-l-zinc-300 [&_blockquote]:text-zinc-600 [&_strong]:text-zinc-900 [&_em]:text-zinc-700"
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