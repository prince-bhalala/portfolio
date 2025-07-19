import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Contact from "@/models/Contact.model";

export async function POST(req) {
  try {
    await dbConnect();
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    const contact = new Contact({ name, email, message });
    await contact.save();

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API Error:", err);

    return NextResponse.json({ success: false  ,  error: "Server Error" }, { status: 500 });
  }
}
