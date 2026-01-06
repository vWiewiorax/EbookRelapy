import Stripe from "stripe";
import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-12-15.clover",
});

export async function POST(req: NextRequest) {
    const {sessionId} = await req.json();
    if(!sessionId) return new NextResponse("Niepoprawne dane",{status:404})
    const session = await stripe.checkout.sessions.retrieve(sessionId)
    if (session.payment_status !== "paid"||!session) {
        return new NextResponse("Niepoprawny token",{status:404})
      }
    // 1️⃣ Create transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // 2️⃣ Email content
    const mailOptions = {
      from: `STORIVIA`,
      to: session.customer_email!,
      subject: `Dziękujemy za zakup ebooka! 🎉`,
      html: `
      <div style="
        font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        color:#111;
        max-width:600px;
        margin:0 auto;
        padding:32px;
        background:#ffffff;
        border-radius:12px;
        border:1px solid #eaeaea;
      ">
    
        <h1 style="margin-top:0;">Dziękujemy za zakup! 🎉</h1>
    
        <p style="font-size:15px; line-height:1.6;">
          Twój e-book jest gotowy do pobrania. Kliknij przycisk poniżej:
        </p>
    
        <!-- 🔽 DOWNLOAD BUTTON -->
        <div style="text-align:center; margin:32px 0;">
         <a
          href="https://firebasestorage.googleapis.com/v0/b/vapeme-61377.firebasestorage.app/o/products%2Fbook.pdf?alt=media&token=9675b001-a3d9-4db3-b809-072a598f7af5"
          download="ebook.pdf"
          style="
            display:inline-block;
            background:#000;
            color:#fff;
            padding:14px 22px;
            border-radius:10px;
            text-decoration:none;
            font-weight:600;
            font-size:15px;
          "
        >
          📥 Pobierz e-book (PDF)
        </a>
        </div>
    
        <p style="font-size:13px; color:#555;">
          Link jest ważny przez <strong>24 godziny</strong>.
        </p>
    
        <hr style="border:none; border-top:1px solid #eaeaea; margin:32px 0;" />
    
        <p style="font-size:12px; color:#888; text-align:center;">
          © 2026 STORIVIA. Wszystkie prawa zastrzeżone.
        </p>
    
      </div>
      `,
    };
    

    // 3️⃣ Send email
    try {
      const info = await transporter.sendMail(mailOptions);
      console.log("Email sent to buyer:", info.messageId);
      return new NextResponse("Wszystko git.",{status:200})
    } catch (error) {
      console.error("Failed to send email:", error);
      return new NextResponse("Nie udało się wysłać maila do użytkownika.",{status:404})
    }
  }