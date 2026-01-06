import Stripe from "stripe";
import { headers } from "next/headers";
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-12-15.clover",
});

export async function POST(req: Request) {
  const body = await req.text();
  const headerstemp =await headers();
  const signature = headerstemp.get("stripe-signature")!;

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err) {
    console.error("Webhook error:", err);
    return new NextResponse("Webhook error.",{status:404})
  }

  if (event.type === "checkout.session.completed") {
    return new NextResponse("Succesfully paid",{status:200})
  }
}
