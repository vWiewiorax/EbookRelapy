import { NextResponse } from "next/server"
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-12-15.clover",
})

export async function POST(req: Request) {
  const { email } = await req.json()

  if (!email) {
    return NextResponse.json({ error: "Missing email" }, { status: 400 })
  }

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    payment_method_types: ["card", "blik"],
    customer_email: email,

    line_items: [
      {
        price_data: {
          currency: "pln",
          product_data: {
            name: "Jak dbać o relacje w związku (E-book)",
          },
 
           unit_amount: 200, // 99 zł
        },
        quantity: 1,
      },
    ],

    success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/payment/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/payment`,
  })

  return NextResponse.json({ url: session.url })
}
