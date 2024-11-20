import { students } from "@/lib/dummy-data/students";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return NextResponse.json(students);
  } catch (error) {
    return NextResponse.json(
      { error, message: "Failed to fetch students" },
      { status: 500 }
    );
  }
}
