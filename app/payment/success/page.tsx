import Cookies from "js-cookie"
import Stripe from "stripe"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-12-15.clover",
})

type Props = {
  searchParams: Promise<{
    session_id?: string
  }>
}

export default async function SuccessPage({ searchParams }: Props) {
  const params = await searchParams
  const sessionId = params.session_id

  if (!sessionId) {
    notFound()
  }

  const session = await stripe.checkout.sessions.retrieve(sessionId)

  if (session.payment_status !== "paid") {
    notFound()
  }
  const raw = Cookies.get("lastPayment")
  if(raw==sessionId){
    notFound()
  }
  // POST request to your API route
  try {
    
    await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/send`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sessionId: session.id,
      }),
    })
    Cookies.set("lastPayment", sessionId, {
      expires: 1,        // days
      secure: true,
      sameSite: "strict"
    })
  } catch (error) {
    notFound()
  }
  
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-serif">Dziękujemy za zakup 🎉</h1>

        <p className="text-muted-foreground">
          Płatność została potwierdzona dla:
        </p>

        <p className="font-medium">{session.customer_email}</p>

        <p className="text-sm text-muted-foreground">
          Link do e-booka został wysłany na e-mail.
        </p>
        <p className="text-sm text-muted-foreground flex items-center justify-center">
          <Link href="/" className="flex"><ArrowLeft className="w-4 h-4" />Powrót do strony głównej</Link>
        </p>
      </div>
    </div>
  )
}
