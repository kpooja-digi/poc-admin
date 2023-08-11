import { NextResponse } from "next/server";

export async function GET(Request) {
  return NextResponse.json(
    {
      message: "Please enter title",
    },
    {
      status: 400,
    }
  );
}
