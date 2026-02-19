import type { Metadata } from "next"
import Link from "next/link"
import { getBlogById } from "@/app/lib/getBlogById"
import BlogPostClient from "./BlogLayout"

// ─── generateMetadata ────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = await getBlogById(slug)
  console.log(post)
  if (!post) {
    return {
      title: "Nie znaleziono wpisu | Relapy",
    }
  }

  return {
    title: post.title,
    description: post.excerpt ?? post.title,
    alternates: {
      canonical: `https://relapy.pl/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt ?? post.title,
      url: `https://relapy.pl/blog/${slug}`,
      siteName: "Relapy",
      images: post.mainImage
        ? [{ url: post.mainImage, width: 1200, height: 630 }]
        : [{ url: "https://relapy.pl/ebook-cover.webp", width: 1200, height: 630 }],
      locale: "pl_PL",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt ?? post.title,
      images: [post.mainImage ?? "https://relapy.pl/ebook-cover.webp"],
    },
  }
}

// ─── Page (server component) ─────────────────────────────────────────────────

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await getBlogById(slug)

  if (!post) {
    return (
      <div className="min-h-screen bg-[#fafafa] text-zinc-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-4xl mb-4">Nie znaleziono wpisu</h1>
          <Link href="/blog" className="text-red-600 hover:text-red-700 underline">
            Wróć do bloga
          </Link>
        </div>
      </div>
    )
  }

  return <BlogPostClient post={post} />
}