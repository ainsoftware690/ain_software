/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";
import { Resend } from "resend";

// ==============================
// Resend Configuration
// ==============================
const resend = new Resend(process.env.RESEND_API_KEY);

// ==============================
// Admin Email
// ==============================
const ADMIN_EMAIL = "helpdesk@earthconntravels.com";

// ==============================
// Escape HTML
// ==============================
function escape(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// ==============================
// Validation
// ==============================
function validate(data: {
  full_name: string;
  email: string;
  type_of_service: string;
  message: string;
}): string | null {
  const { full_name, email, type_of_service, message } = data;

  if (!full_name || full_name.trim().length < 2) {
    return "Name is required";
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return "Valid email is required";
  }

  if (!type_of_service) {
    return "Please select a service";
  }

  if (!message || message.trim().length < 10) {
    return "Message must be at least 10 characters";
  }

  return null;
}

// ==============================
// POST API
// ==============================
export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      full_name,
      email,
      type_of_service,
      message,
    } = body;

    // ==========================
    // Validate
    // ==========================
    const validationError = validate({
      full_name,
      email,
      type_of_service,
      message,
    });

    if (validationError) {
      return NextResponse.json(
        {
          success: false,
          error: validationError,
        },
        { status: 400 }
      );
    }

    // ==========================
    // Sanitize Inputs
    // ==========================
    const safeName = escape(full_name.trim());
    const safeEmail = email.trim();
    const safeService = escape(type_of_service.trim());
    const safeMessage = escape(message.trim()).replace(/\n/g, "<br />");

    // ==========================
    // SEND EMAIL TO ADMIN
    // ==========================
    await resend.emails.send({
      from: "EarthConn Travels <helpdesk@earthconntravels.com>",
      to: [ADMIN_EMAIL],
      replyTo: safeEmail,
      subject: `New Inquiry - ${safeService}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: 0 auto;">
          
          <h2 style="color: #4f46e5;">
            New Contact Form Submission
          </h2>

          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 12px; font-weight: bold;">Name</td>
              <td style="padding: 12px;">${safeName}</td>
            </tr>

            <tr>
              <td style="padding: 12px; font-weight: bold;">Email</td>
              <td style="padding: 12px;">${safeEmail}</td>
            </tr>

            <tr>
              <td style="padding: 12px; font-weight: bold;">Service</td>
              <td style="padding: 12px;">${safeService}</td>
            </tr>
          </table>

          <div style="margin-top: 24px;">
            <strong>Message:</strong>
            <p style="line-height: 1.7;">
              ${safeMessage}
            </p>
          </div>

        </div>
      `,
    });

    // ==========================
    // AUTO REPLY TO USER
    // ==========================
    await resend.emails.send({
      from: "EarthConn Travels <helpdesk@earthconntravels.com>",
      to: [safeEmail],
      subject: "We received your inquiry - EarthConn Travels",
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: 0 auto;">

          <h2 style="color: #4f46e5;">
            Hello ${safeName},
          </h2>

          <p style="line-height: 1.7;">
            Thank you for contacting EarthConn Travels.
          </p>

          <p style="line-height: 1.7;">
            We received your inquiry regarding
            <strong>${safeService}</strong>.
          </p>

          <p style="line-height: 1.7;">
            Our team will contact you shortly.
          </p>

          <div style="background: #f5f5f5; padding: 16px; border-radius: 8px; margin-top: 20px;">
            <strong>Your Message:</strong>

            <p style="margin-top: 10px; line-height: 1.7;">
              ${safeMessage}
            </p>
          </div>

          <br />

          <p>
            Regards,<br />
            <strong>EarthConn Travels Team</strong>
          </p>

        </div>
      `,
    });

    // ==========================
    // Success Response
    // ==========================
    return NextResponse.json({
      success: true,
      message: "Message sent successfully",
    });

  } catch (error: any) {
    console.error("RESEND ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        error: error?.message || "Failed to send email",
      },
      { status: 500 }
    );
  }
}