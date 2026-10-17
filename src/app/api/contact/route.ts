
import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim();
    const company = String(body.company ?? "").trim();
    const projectType = String(body.projectType ?? "").trim();
    const projectDescription = String(
      body.projectDescription ?? ""
    ).trim();
    const honeypot = body.honeypot;

    // Silently ignore spam submissions
    if (honeypot) {
      return NextResponse.json({
        success: true,
        message: "Thank you for your message.",
      });
    }

    // Validate required fields
    if (!name || !email || !projectDescription) {
      return NextResponse.json(
        {
          success: false,
          message: "Please fill in all required fields.",
        },
        { status: 400 }
      );
    }

    // Validate field lengths
    if (
      name.length > 100 ||
      email.length > 254 ||
      company.length > 150 ||
      projectType.length > 100 ||
      projectDescription.length > 5000
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Some fields are too long.",
        },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          success: false,
          message: "Please provide a valid email address.",
        },
        { status: 400 }
      );
    }

    // Check environment variables
    const apiKey = process.env.RESEND_API_KEY;
    const contactEmail = process.env.CONTACT_EMAIL;

    if (!apiKey || !contactEmail) {
      console.error("Resend environment variables are missing.");

      return NextResponse.json(
        {
          success: false,
          message: "Email service is not configured.",
        },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    // 1. Send the enquiry to AJ Tech World
    const { error: enquiryError } = await resend.emails.send({
      from: "AJ Tech World <onboarding@resend.dev>",
      to: [contactEmail],
      replyTo: email,
      subject: `New website enquiry from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Company: ${company || "Not provided"}`,
        `Project Type: ${projectType || "Not provided"}`,
        "",
        "Project Description:",
        projectDescription,
      ].join("\n"),
    });

    if (enquiryError) {
      console.error("Enquiry email failed:", enquiryError);

      return NextResponse.json(
        {
          success: false,
          message:
            "We couldn't send your enquiry. Please try again later.",
        },
        { status: 502 }
      );
    }

    // 2. Send a welcome email to the client
    const { error: welcomeError } = await resend.emails.send({
      from: "AJ Tech World <onboarding@resend.dev>",
      to: [email],
      subject: "Thank You for Contacting AJ Tech World!",
      text: [
        `Hi ${name},`,
        "",
        "Thank you for contacting AJ Tech World!",
        "",
        "We have received your project enquiry and appreciate your interest.",
        "Our team will review your requirements and get back to you.",
        "",
        "Best regards,",
        "AJ Tech World Team",
        "ajtechworldofficial@gmail.com",
      ].join("\n"),
    });

    // The enquiry was sent even if the welcome email fails
    if (welcomeError) {
      console.error("Welcome email failed:", welcomeError);
    }

    return NextResponse.json({
      success: true,
      message: welcomeError
        ? "Your enquiry was received. The confirmation email could not be sent."
        : "Thank you! Your enquiry has been received successfully.",
    });
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          "An unexpected error occurred. Please try again later.",
      },
      { status: 500 }
    );
  }
}
