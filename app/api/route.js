// export async function GET(request, { params }) {
//   try {
//     const res = await fetch(
//       "https://api.cloudinary.com/v1_1/dbzhqgaqd/resources/image",
//       {
//         headers: {
//           Authorization: "Basic 826283531429994:Jbh6_PrnCexcyt8R0pBlfV-0nwc",
//         },
//       }
//     );
//     const data = await res.json();

//     return Response.json({ data });
//   } catch {
//     return Response.json({ message: "Cabin not found" });
//   }
// }

import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  try {
    const cloudName = "dbzhqgaqd"; // Replace with actual cloud name
    const apiKey = "826283531429994";
    const apiSecret = "Jbh6_PrnCexcyt8R0pBlfV-0nwc";
    const auth = Buffer.from(`${apiKey}:${apiSecret}`).toString("base64");

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/resources/image`,
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
