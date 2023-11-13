import { NextResponse } from "next/server";
import { movies } from "@/app/db/mock/movies";

export async function GET() {
  return NextResponse.json(movies);
}
