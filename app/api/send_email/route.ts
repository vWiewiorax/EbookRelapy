"use server";

import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const MAX_MESSAGES_PER_DAY = 3;
const ONE_DAY = 24 * 60 * 60 * 1000;
const COOKIE_NAME = "contact_limit";

export async function POST(req: NextRequest) {
  try {
    const { from, subject, message } = await req.json();

    const ALLOWED_ORIGINS = [
        "https://relapy.pl",
        "https://www.relapy.pl",
        "http://localhost:3000"
      ];
      
      const origin = req.headers.get("origin");
      if (!origin || !ALLOWED_ORIGINS.includes(origin)) {
        return NextResponse.json(
          { error: "Forbidden origin" },
          { status: 403 }
        );
      }
      if (req.headers.get("content-type") !== "application/json") {
        return NextResponse.json({ error: "Invalid content type" }, { status: 415 });
      }
    if (!subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // -------------------------------------
    // 1. Read cookie
    // -------------------------------------
    const rawCookie = req.cookies.get(COOKIE_NAME)?.value;

    let count = 0;
    let lastReset = Date.now();

    if (rawCookie) {
      try {
        const decoded = JSON.parse(
          Buffer.from(rawCookie, "base64").toString("utf-8")
        );

        count = decoded.count ?? 0;
        lastReset = decoded.lastReset ?? lastReset;
      } catch {
        // corrupted cookie → reset
        count = 0;
        lastReset = Date.now();
      }
    }

    const now = Date.now();

    // -------------------------------------
    // 2. Reset after 24h
    // -------------------------------------
    if (now - lastReset >= ONE_DAY) {
      count = 0;
      lastReset = now;
    }

    // -------------------------------------
    // 3. Hard block after limit
    // -------------------------------------
    if (count >= MAX_MESSAGES_PER_DAY) {
      return NextResponse.json(
        { error: "Too many messages sent today." },
        { status: 429 }
      );
    }

    // -------------------------------------
    // 4. Send email ONLY if count <= 2
    // -------------------------------------
    if (count <= 2) {
      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASSWORD,
        },
      });

      await transporter.sendMail({
        to: "kontakt@relapy.pl",
        subject:`${subject} from: ${from}`,
        html: message,
      });
    }

    // -------------------------------------
    // 5. Update cookie
    // -------------------------------------
    const newCookieValue = Buffer.from(
      JSON.stringify({
        count: count + 1,
        lastReset,
      })
    ).toString("base64");

    const res = NextResponse.json({ success: true });

    res.cookies.set(COOKIE_NAME, newCookieValue, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      maxAge: 60 * 60 * 24, // 1 day
    });

    return res;
  } catch (err) {
    console.error("Contact API error:", err);

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
