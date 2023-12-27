import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { eq } from "drizzle-orm";
import z from "zod";
import { db } from "@/db";
import { env } from "@/lib/env";
import { usersTable, contractTable, betsTable } from "@/db/schema";
import { postBet, getBet } from "@/controler/bet";

export async function GET(request: NextRequest) {
  const data = await request.json();
  try {
    const Bets = await getBet(data);
    console.log(Bets);
    return NextResponse.json({ data: Bets }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 },
    );
  }
}