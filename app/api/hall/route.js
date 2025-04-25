import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  try {
    const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME_H; // Replace with actual cloud name
    const apiKey = process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY_H;
    const apiSecret = process.env.CLOUDINARY_API_SECRET_H;
    const auth = Buffer.from(`${apiKey}:${apiSecret}`).toString("base64");

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/resources/image?max_results=500`,
      {
        headers: {
          Authorization: `Basic ${auth}`,
        },
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch Cloudinary resources");
    }

    const data = await res.json();
    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ message: "error", error: error.message });
  }
}
