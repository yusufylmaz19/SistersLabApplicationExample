import { NextResponse } from "next/server";
import { posts } from "@/app/db/mock/posts";

export async function GET(req) {
  return NextResponse.json(posts);
}
