import { NextResponse } from "next/server";

const prices: Record<string, number> = {
  "Spiritual Guidance": 1499,
  "Vedic Astrology Reading": 1999,
  "Energy Healing Support": 1499,
  "Dream Interpretation": 999,
  "Unusual Experience Consultation": 1499,
  "Meditation & Sadhana Guidance": 1499,
};

export async function POST(request: Request) {
  try {
    const { service } = await request.json();
    const amount = prices[service];
    if (!amount) return NextResponse.json({ error: "Invalid service selected." }, { status: 400 });

    const keyId = process.env.RAZORPAY_KEY_ID;
    const keySecret = process.env.RAZORPAY_KEY_SECRET;
    if (!keyId || !keySecret) return NextResponse.json({ error: "Razorpay is not configured on the server." }, { status: 500 });

    const auth = Buffer.from(`${keyId}:${keySecret}`).toString("base64");
    const response = await fetch("https://api.razorpay.com/v1/orders", {
      method: "POST",
      headers: { Authorization: `Basic ${auth}`, "Content-Type": "application/json" },
      body: JSON.stringify({ amount: amount * 100, currency: "INR", receipt: `ims_${Date.now()}`, notes: { service } }),
      cache: "no-store",
    });
    const data = await response.json();
    if (!response.ok) return NextResponse.json({ error: data?.error?.description || "Unable to create payment order." }, { status: response.status });

    return NextResponse.json({ orderId: data.id, amount: data.amount, currency: data.currency, keyId, service, displayAmount: amount });
  } catch {
    return NextResponse.json({ error: "Unable to create payment order." }, { status: 500 });
  }
}
