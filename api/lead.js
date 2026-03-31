export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, phone, car, dealership, price } = req.body;

  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  const CALLMEBOT_API_KEY = process.env.CALLMEBOT_API_KEY;
  const LEAD_EMAIL = process.env.LEAD_EMAIL;
  const LEAD_PHONE = process.env.LEAD_PHONE;

  const results = { email: null, whatsapp: null };

  // ── EMAIL via Resend ──────────────────────────────
  try {
    const emailRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Carla AI <onboarding@resend.dev>",
        to: [LEAD_EMAIL],
        subject: `New Test Drive Request — ${car}`,
        html: `
          <div style="font-family: sans-serif; max-width: 520px; margin: 0 auto; padding: 24px;">
            <div style="background: linear-gradient(135deg, #4F46E5, #7C3AED); padding: 20px 24px; border-radius: 12px 12px 0 0;">
              <h2 style="color: white; margin: 0; font-size: 20px;">New Test Drive Request</h2>
              <p style="color: rgba(255,255,255,0.8); margin: 4px 0 0; font-size: 14px;">Carla AI — Trinidad & Tobago</p>
            </div>
            <div style="background: #f9fafb; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px; padding: 24px;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr><td style="padding: 8px 0; color: #6b7280; font-size: 13px; width: 120px;">Vehicle</td><td style="padding: 8px 0; font-weight: 700; color: #111827;">${car}</td></tr>
                <tr><td style="padding: 8px 0; color: #6b7280; font-size: 13px;">Price</td><td style="padding: 8px 0; font-weight: 700; color: #111827;">${price}</td></tr>
                <tr><td style="padding: 8px 0; color: #6b7280; font-size: 13px;">Dealership</td><td style="padding: 8px 0; font-weight: 700; color: #111827;">${dealership}</td></tr>
                <tr><td colspan="2" style="border-top: 1px solid #e5e7eb; padding-top: 16px; margin-top: 8px;"></td></tr>
                <tr><td style="padding: 8px 0; color: #6b7280; font-size: 13px;">Name</td><td style="padding: 8px 0; font-weight: 700; color: #111827;">${name}</td></tr>
                <tr><td style="padding: 8px 0; color: #6b7280; font-size: 13px;">Phone</td><td style="padding: 8px 0; font-weight: 700; color: #111827;">${phone}</td></tr>
                <tr><td style="padding: 8px 0; color: #6b7280; font-size: 13px;">Email</td><td style="padding: 8px 0; font-weight: 700; color: #111827;">${email || "Not provided"}</td></tr>
              </table>
            </div>
          </div>
        `,
      }),
    });
    results.email = emailRes.ok ? "sent" : "failed";
  } catch (err) {
    results.email = "error";
  }

  // ── WHATSAPP via CallMeBot ────────────────────────
  try {
    const message = encodeURIComponent(
      `New Test Drive Request\n\nVehicle: ${car}\nPrice: ${price}\nDealership: ${dealership}\n\nName: ${name}\nPhone: ${phone}\nEmail: ${email || "Not provided"}`
    );
    const waRes = await fetch(
      `https://api.callmebot.com/whatsapp.php?phone=${LEAD_PHONE}&text=${message}&apikey=${CALLMEBOT_API_KEY}`
    );
    results.whatsapp = waRes.ok ? "sent" : "failed";
  } catch (err) {
    results.whatsapp = "error";
  }

  return res.status(200).json({ success: true, results });
}
