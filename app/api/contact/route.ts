import { NextRequest, NextResponse } from "next/server";
import transporter from "@/lib/mailConfig";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    // Validate the data
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Email validation regex
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Verify environment variables are set
    if (
      !process.env.ZOHO_MAIL_USER ||
      !process.env.ZOHO_MAIL_PASSWORD ||
      !process.env.CONTACT_EMAIL_RECIPIENT
    ) {
      console.error("Email configuration is missing");
      return NextResponse.json(
        { error: "Email service is not configured" },
        { status: 500 }
      );
    }

    // Email template for admin notification
    const adminEmailHtml = `
      <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #002366 0%, #003d99 100%); padding: 20px; border-radius: 8px 8px 0 0; color: white;">
          <h2 style="margin: 0;">New Contact Form Submission</h2>
        </div>
        <div style="padding: 20px; background-color: #f9f9f9; border: 1px solid #ddd;">
          <p><strong>Name:</strong> ${body.name}</p>
          <p><strong>Email:</strong> <a href="mailto:${body.email}">${body.email}</a></p>
          <p><strong>Phone:</strong> ${body.phone || "Not provided"}</p>
          <hr style="border: none; border-top: 1px solid #ddd; margin: 15px 0;">
          <p><strong>Message:</strong></p>
          <p style="background-color: white; padding: 10px; border-left: 4px solid #002366;">
            ${body.message.replace(/\n/g, "<br>")}
          </p>
        </div>
        <div style="padding: 15px; background-color: #f0f0f0; border-radius: 0 0 8px 8px; text-align: center; font-size: 12px; color: #666;">
          <p>This is an automated message from Fuworx Contact Form</p>
        </div>
      </div>
    `;

    // Email template for user confirmation
    const userEmailHtml = `
      <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #002366 0%, #003d99 100%); padding: 20px; border-radius: 8px 8px 0 0; color: white;">
          <h2 style="margin: 0;">Thank You for Contacting Fuworx</h2>
        </div>
        <div style="padding: 20px; background-color: #f9f9f9; border: 1px solid #ddd;">
          <p>Hi ${body.name},</p>
          <p>Thank you for reaching out to Fuworx. We have received your message and will get back to you as soon as possible.</p>
          <hr style="border: none; border-top: 1px solid #ddd; margin: 15px 0;">
          <p><strong>Your Message Summary:</strong></p>
          <div style="background-color: white; padding: 10px; border-left: 4px solid #002366;">
            <p><strong>Phone:</strong> ${body.phone || "Not provided"}</p>
            <p><strong>Message:</strong> ${body.message.replace(/\n/g, "<br>")}</p>
          </div>
          <p style="margin-top: 20px;">We'll contact you shortly at <strong>${body.email}</strong></p>
        </div>
        <div style="padding: 15px; background-color: #f0f0f0; border-radius: 0 0 8px 8px;">
          <p style="text-align: center; font-size: 12px; color: #666; margin: 0;">
            © 2026 Fuworx Innovations. All rights reserved.
          </p>
        </div>
      </div>
    `;

    // Send email to admin
    await transporter.sendMail({
      from: process.env.ZOHO_MAIL_FROM,
      to: process.env.CONTACT_EMAIL_RECIPIENT,
      subject: `New Contact Form Submission from ${body.name}`,
      html: adminEmailHtml,
    });

    // Send confirmation email to user
    await transporter.sendMail({
      from: process.env.ZOHO_MAIL_FROM,
      to: body.email,
      subject: "We've Received Your Message - Fuworx",
      html: userEmailHtml,
    });

    console.log("Contact form submission processed:", {
      name: body.name,
      email: body.email,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        success: true,
        message: "Your message has been sent successfully! We'll get back to you soon.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      {
        error: "Failed to send message. Please try again later.",
        details: process.env.NODE_ENV === "development" ? String(error) : undefined,
      },
      { status: 500 }
    );
  }
}
