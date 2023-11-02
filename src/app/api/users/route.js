import { NextResponse } from "next/server";

export async function GET(request) {
  const mockdata = [
    { name: "john", surname: "doe" },
    { name: "jane", surname: "doe" },
  ];
  return NextResponse.json(mockdata);
}

export async function POST(request) {
  const res = await request.json();
  const { id } = res;
  return NextResponse.json("ok");
}

