import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!process.env.MONGODB_URI) {
  console.error("❌ MONGODB_URI not defined in environment");
}

let cached = global.mongoose || { conn: null, promise: null };

export default async function dbConnect() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI);
  }

  cached.conn = await cached.promise;
  global.mongoose = cached;

  return cached.conn;
}
