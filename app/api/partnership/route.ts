import { NextRequest, NextResponse } from "next/server";
import transporter from "@/lib/mailConfig";

// 1. Define the type-safe interface for the new form fields
interface PartnershipFormData {
  companyName: string;
  productName: string;
  contactName: string;
  website: string;
  businessEmail: string;
  phoneNumber: string;
  partnerType: string;
  consent: boolean;
}

export async function POST(request: NextRequest) {
  try {
    const body: PartnershipFormData = await request.json();

    // 2. Validate required fields (including consent)
    if (
      !body.companyName ||
      !body.productName ||
      !body.contactName ||
      !body.businessEmail ||
      !body.partnerType
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    if (!body.consent) {
      return NextResponse.json(
        { error: "Consent is required to process the partnership request." },
        { status: 400 }
      );
    }

    // 3. Email validation regex
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(body.businessEmail)) {
      return NextResponse.json(
        { error: "Invalid business email format" },
        { status: 400 }
      );
    }

    // 4. Verify environment variables are set
    if (
      !process.env.ZOHO_MAIL_USER ||
      !process.env.ZOHO_MAIL_PASSWORD ||
      !process.env.CONTACT_EMAIL_RECIPIENT ||
      !process.env.ZOHO_MAIL_FROM
    ) {
      console.error("Email configuration is missing");
      return NextResponse.json(
        { error: "Email service is not configured" },
        { status: 500 }
      );
    }

    // 5. Email template for admin notification
    const adminEmailHtml = `
      <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #0b1f3a 0%, #1a365d 100%); padding: 20px; border-radius: 8px 8px 0 0; color: white;">
          <h2 style="margin: 0;">New Partnership Request</h2>
        </div>
        <div style="padding: 20px; background-color: #f9f9f9; border: 1px solid #ddd;">
          <h3 style="color: #0b1f3a; border-bottom: 2px solid #7ac74f; padding-bottom: 5px;">Company Details</h3>
          <p><strong>Company Name:</strong> ${body.companyName}</p>
          <p><strong>Product/Platform:</strong> ${body.productName}</p>
          <p><strong>Website:</strong> <a href="${body.website}" target="_blank">${body.website || "Not provided"}</a></p>
          <p><strong>Partner Type:</strong> ${body.partnerType}</p>
          
          <h3 style="color: #0b1f3a; border-bottom: 2px solid #7ac74f; padding-bottom: 5px; margin-top: 20px;">Contact Details</h3>
          <p><strong>Contact Name:</strong> ${body.contactName}</p>
          <p><strong>Business Email:</strong> <a href="mailto:${body.businessEmail}">${body.businessEmail}</a></p>
          <p><strong>Phone:</strong> ${body.phoneNumber || "Not provided"}</p>
          
          <p style="margin-top: 20px; font-size: 12px; color: #666;">
            <em>* User has consented to data processing and business communications.</em>
          </p>
        </div>
        <div style="padding: 15px; background-color: #f0f0f0; border-radius: 0 0 8px 8px; text-align: center; font-size: 12px; color: #666;">
          <p>This is an automated message from Fuworx Partnership Form</p>
        </div>
      </div>
    `;

    // 6. Email template for user confirmation
    const userEmailHtml = `
      <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #0b1f3a 0%, #1a365d 100%); padding: 20px; border-radius: 8px 8px 0 0; color: white;">
          <h2 style="margin: 0;">Thank You for Partnering with Fuworx</h2>
        </div>
        <div style="padding: 20px; background-color: #f9f9f9; border: 1px solid #ddd;">
          <p>Hi ${body.contactName},</p>
          <p>Thank you for your interest in joining the Fuworx partner ecosystem. We have received your request regarding <strong>${body.companyName}</strong>.</p>
          <p>Our partnerships team is reviewing your application for the <strong>${body.partnerType}</strong> program and will reach out to you shortly at <strong>${body.businessEmail}</strong> to discuss the next steps.</p>
          
          <hr style="border: none; border-top: 1px solid #ddd; margin: 25px 0;">
          
          <h4 style="margin-bottom: 5px; color: #0b1f3a;">Your Submission Summary:</h4>
          <ul style="list-style-type: none; padding-left: 0; background-color: white; padding: 15px; border-left: 4px solid #7ac74f;">
            <li><strong>Company:</strong> ${body.companyName}</li>
            <li><strong>Product:</strong> ${body.productName}</li>
            <li><strong>Partner Type:</strong> ${body.partnerType}</li>
          </ul>
        </div>
        <div style="padding: 15px; background-color: #f0f0f0; border-radius: 0 0 8px 8px;">
          <p style="text-align: center; font-size: 12px; color: #666; margin: 0;">
            © ${new Date().getFullYear()} Fuworx. All rights reserved.
          </p>
        </div>
      </div>
    `;

    // 7. Send email to admin
    await transporter.sendMail({
      from: process.env.ZOHO_MAIL_FROM,
      to: process.env.CONTACT_EMAIL_RECIPIENT, // Or process.env.PARTNERSHIP_EMAIL_RECIPIENT if you have a separate inbox
      subject: `New ${body.partnerType} Partnership Request: ${body.companyName}`,
      html: adminEmailHtml,
    });

    // 8. Send confirmation email to user
    await transporter.sendMail({
      from: process.env.ZOHO_MAIL_FROM,
      to: body.businessEmail,
      subject: "We've Received Your Partnership Request - Fuworx",
      html: userEmailHtml,
    });

    console.log("Partnership form submission processed:", {
      company: body.companyName,
      email: body.businessEmail,
      type: body.partnerType,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        success: true,
        message: "Your partnership request has been submitted successfully! We'll get back to you soon.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Partnership form error:", error);
    return NextResponse.json(
      {
        error: "Failed to submit partnership request. Please try again later.",
        details: process.env.NODE_ENV === "development" ? String(error) : undefined,
      },
      { status: 500 }
    );
  }
}