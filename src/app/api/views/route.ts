import { Redis } from "@upstash/redis";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});


export async function GET() {
  const cookieStore = await cookies();
  const viewed = cookieStore.get("viewed");

  if (!viewed) {
    await redis.incr("portfolio:views");
    cookieStore.set("viewed", "true", { maxAge: 86400 }); 
  }

  const views = await redis.get("portfolio:views");
  return NextResponse.json({ views });
}
