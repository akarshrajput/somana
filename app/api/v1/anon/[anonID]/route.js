import connectMongoDB from "@/app/_lib/mongodb";
import Anon from "@/app/_models/anonModel";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    await connectMongoDB();

    // Extracting anonId from the request URL
    const anonId = request.url.split("anon/")[1];

    const file = await Anon.findOne({ anonId });

    if (!file) {
      return NextResponse.json(
        {
          statusText: "error",
          message: "File not found with the provided ID.",
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        statusText: "success",
        message: "File retrieved successfully",
        data: {
          file,
        },
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("Error fetching file:", err);

    return NextResponse.json(
      {
        statusText: "error",
        message: "Failed to find the file.",
        error: err.message,
      },
      { status: 500 }
    );
  }
}
