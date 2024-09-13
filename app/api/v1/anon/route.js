import connectMongoDB from "@/app/_lib/mongodb";
import Anon from "@/app/_models/anonModel";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    await connectMongoDB();

    const files = await Anon.find();

    return NextResponse.json(
      {
        statusText: "success",
        message: "Files fetched successfully",
        results: files.length,
        data: {
          files,
        },
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("Error fetching files:", err);

    return NextResponse.json(
      {
        statusText: "error",
        message: "Failed to find the files.",
        error: err.message,
      },
      { status: 404 }
    );
  }
}

export async function POST(request) {
  try {
    await connectMongoDB();

    const data = await request.json(); // Parse the incoming request body
    const newFile = await Anon.create(data); // Create a new Anon file in the database

    return NextResponse.json(
      {
        statusText: "success",
        message: "File created successfully",
        data: {
          newFile,
        },
      },
      { status: 201 }
    );
  } catch (err) {
    console.error("Error creating file:", err);

    return NextResponse.json(
      {
        statusText: "error",
        message: "Failed to create the file.",
        error: err.message,
      },
      { status: 500 }
    );
  }
}
