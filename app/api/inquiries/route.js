import { NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";

export async function POST(request) {
  const supabase = getSupabase();
  if (!supabase) {
    return NextResponse.json(
      { error: "The contact form isn't set up yet. Add Supabase keys (see README.md)." },
      { status: 503 }
    );
  }

  const body = await request.json();
  const { name, email, company, message, website } = body;

  // Honeypot: real users never fill this hidden field, bots often do.
  if (website) {
    return NextResponse.json({ ok: true }); // pretend success, drop silently
  }

  const cleanName = String(name || "").trim().slice(0, 60);
  const cleanEmail = String(email || "").trim().slice(0, 120);
  const cleanCompany = String(company || "").trim().slice(0, 60);
  const cleanMessage = String(message || "").trim().slice(0, 1000);

  if (!cleanName || !cleanEmail || !cleanMessage) {
    return NextResponse.json({ error: "Name, email, and message are required." }, { status: 400 });
  }

  const { error } = await supabase.from("inquiries").insert({
    name: cleanName,
    email: cleanEmail,
    company: cleanCompany || null,
    message: cleanMessage,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
