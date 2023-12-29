import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { eq } from "drizzle-orm";
import z from "zod";
import { db } from "@/db";
import { env } from "@/lib/env";
import { usersTable, contractTable, betsTable } from "@/db/schema";
import { postUser, addDollar } from "@/controler/user";

export async function POST(request: NextRequest) {
  const data = await request.json();
  try {
    const user = await postUser(data);
    console.log(user);
    return NextResponse.json({ data: user }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 },
    );
  }
}
export async function PUT(request: NextRequest) {
  const data = await request.json();
  try {
    const afterAddDollar = await addDollar(data);
    console.log(afterAddDollar);
    return NextResponse.json({ data: afterAddDollar }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 },
    );
  }
}