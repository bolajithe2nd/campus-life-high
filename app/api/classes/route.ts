import { classes } from "@/lib/dummy-data/classes";
import { NextResponse } from "next/server";
export async function GET() {
  try {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return NextResponse.json(classes);
  } catch (error) {
    return NextResponse.json(
      { error, message: "Failed to fetch classes" },
      { status: 500 }
    );
  }
}
