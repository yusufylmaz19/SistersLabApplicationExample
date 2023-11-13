import { NextResponse } from "next/server";
import { casts } from "@/app/db/mock/casts";

export async function GET(request, params) {
  const name = params.params.name;
  const cast = casts.find((cast, index) => cast.name === name);
  return NextResponse.json(cast.movies);
}
