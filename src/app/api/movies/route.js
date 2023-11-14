import { NextResponse } from "next/server";
import { movies } from "@/app/db/mock/movies";

export async function GET(request, params) {
  const url = new URL(request.url);
  const id = url.searchParams.get("id");
  if (id) {
    const movie = movies.find((movie, index) => index === Number(id));
    return NextResponse.json(movie);
  } else {
    return NextResponse.json(movies);
  }
}
