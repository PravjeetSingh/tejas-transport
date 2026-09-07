import { Resend } from "resend";

function escapeHtml(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed",
    });
  }

  if (
    !process.env.RESEND_API_KEY ||
    !process.env.RESEND_FROM_EMAIL ||
    !process.env.RESEND_TO_EMAIL
  ) {
    return res.status(500).json({
      success: false,
      message: "Email service is not configured.",
    });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const {
      name,
      phone,
      email,
      pickup,
      delivery,
      container,
      message,
    } = req.body;

    if (!name || !phone || !pickup || !delivery) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields.",
      });
    }

    const safeName = escapeHtml(name);
    const safePhone = escapeHtml(phone);
    const safeEmail = escapeHtml(email || "Not provided");
    const safePickup = escapeHtml(pickup);
    const safeDelivery = escapeHtml(delivery);
    const safeContainer = escapeHtml(container || "Not specified");
    const safeMessage = escapeHtml(
      message || "No additional message"
    ).replace(/\n/g, "<br />");

    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL,
      to: [process.env.RESEND_TO_EMAIL],
      replyTo: email || undefined,
      subject: `New Transportation Enquiry - ${name}`,

      html: `
        <div style="font-family: Arial, sans-serif; max-width: 650px; margin: auto; color: #222;">

          <div style="background: #e53935; color: white; padding: 20px;">
            <h2 style="margin: 0;">
              New Transportation Enquiry
            </h2>
          </div>

          <div style="padding: 25px; border: 1px solid #eee;">

            <h3>Customer Details</h3>

            <p><strong>Name:</strong> ${safeName}</p>
            <p><strong>Phone:</strong> ${safePhone}</p>
            <p><strong>Email:</strong> ${safeEmail}</p>

            <hr />

            <h3>Transportation Details</h3>

            <p><strong>Pickup Location:</strong> ${safePickup}</p>
            <p><strong>Delivery Location:</strong> ${safeDelivery}</p>
            <p><strong>Container Requirement:</strong> ${safeContainer}</p>

            <hr />

            <h3>Message</h3>

            <p>${safeMessage}</p>

          </div>

          <div style="padding: 15px; font-size: 12px; color: #777;">
            This enquiry was submitted through the Tejas Transport website.
          </div>

        </div>
      `,
    });

    if (error) {
      console.error("Resend Error:", error);

      return res.status(500).json({
        success: false,
        message: "Failed to send enquiry.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Enquiry sent successfully.",
      id: data?.id,
    });
  } catch (error) {
    console.error("Email Server Error:", error);

    return res.status(500).json({
      success: false,
      message: "Something went wrong while sending the enquiry.",
    });
  }
}