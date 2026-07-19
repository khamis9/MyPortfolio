import { NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";

export async function GET() {
  const supabase = getSupabase();
  if (!supabase) {
    return NextResponse.json({ reviews: [], configured: false });
  }

  const { data, error } = await supabase
    .from("reviews")
    .select("id, name, role, rating, message, created_at")
    .order("created_at", { ascending: false })
    .limit(50);

  if (error) {
    return NextResponse.json({ reviews: [], configured: true, error: error.message }, { status: 500 });
  }

  return NextResponse.json({ reviews: data, configured: true });
}

export async function POST(request) {
  const supabase = getSupabase();
  if (!supabase) {
    return NextResponse.json(
      { error: "Reviews aren't set up yet. Add Supabase keys (see README.md)." },
      { status: 503 }
    );
  }

  const body = await request.json();
  const { name, role, rating, message, website } = body;

  // Honeypot: real users never fill this hidden field, bots often do.
  if (website) {
    return NextResponse.json({ ok: true }); // pretend success, drop silently
  }

  const cleanName = String(name || "").trim().slice(0, 60);
  const cleanRole = String(role || "").trim().slice(0, 60);
  const cleanMessage = String(message || "").trim().slice(0, 500);
  const cleanRating = Math.min(5, Math.max(1, Number(rating) || 5));

  if (!cleanName || !cleanMessage) {
    return NextResponse.json({ error: "Name and review message are required." }, { status: 400 });
  }

  const { error } = await supabase.from("reviews").insert({
    name: cleanName,
    role: cleanRole || null,
    rating: cleanRating,
    message: cleanMessage,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
