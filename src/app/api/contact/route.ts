import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, business, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "SwiftSite <hello@swiftsite.tech>",
      to: "harrison.boyns@hotmail.com",
      replyTo: email,
      subject: `New enquiry from ${name}${business ? ` — ${business}` : ""}`,
      text: `Name: ${name}\nEmail: ${email}\nBusiness: ${business || "—"}\n\n${message}`,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Resend error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
