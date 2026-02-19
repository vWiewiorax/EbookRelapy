import { adminDb } from "@/app/lib/firebaseAdmin"
import { BlogDocument } from "./useBlogs"

function serializeData(data: FirebaseFirestore.DocumentData) {
  return Object.fromEntries(
    Object.entries(data).map(([key, value]) => {
      if (value && typeof value === "object" && "_seconds" in value) {
        return [key, new Date(value._seconds * 1000).toISOString()]
      }
      return [key, value]
    })
  )
}

export async function getBlogById(slug: string): Promise<BlogDocument | null> {
  const snap = await adminDb.collection("blogs").where("id", "==", slug).limit(1).get()
  if (snap.empty) return null
  const doc = snap.docs[0].data()
  return serializeData(doc) as BlogDocument
}