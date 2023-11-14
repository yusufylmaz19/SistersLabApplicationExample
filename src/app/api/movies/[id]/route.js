import { NextResponse } from "next/server";

export async function GET(request, params) {
  const { id } = await request.json;
  return NextResponse.json(movies);
}
