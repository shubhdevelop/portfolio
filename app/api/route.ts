import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest, res: NextResponse) {
  return new NextResponse("<h1> Hello!! </h1>", {
    headers: { "Content-Type": "text/html" },
  });
}
