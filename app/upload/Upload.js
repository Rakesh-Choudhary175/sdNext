"use client";
import Image from "next/image";
import Spinner from "../_components/Spinner";
import { useState } from "react";

function Upload() {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "ml_default"); // Replace with your Cloudinary upload preset
    data.append("cloud_name", process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME);

    setLoading(true);

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
      {
        // Replace with your Cloudinary cloud name
        method: "POST",
        body: data,
      }
    );

    const file = await res.json();

    console.log(file);

    setImage(file.secure_url);
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen  py-6">
      <h1 className="text-3xl font-bold mb-6">Upload Image</h1>
      <input
        type="file"
        name="file"
        placeholder="Upload an image"
        onChange={uploadImage}
        className="mb-4 p-2 border border-gray-300 rounded-md"
      />
      {loading ? (
        <Spinner />
      ) : (
        image && (
          <Image
            alt="img"
            style={{ transform: "translate3d(0, 0, 0)" }}
            className="transform rounded-lg brightness-90 transition group-hover:brightness-110"
            src={image}
            width={720}
            height={480}
            // loading={5 < 4 ? "eager" : "lazy"}
            sizes="(max-width: 640px) 100vw,
                (max-width: 1280px) 50vw,
                (max-width: 1536px) 33vw,
                25vw"
          />
          // <Image
          //   src={image}
          //   alt="Uploaded image"
          //   className="mt-4 w-72 h-72 object-cover rounded-md shadow-md"
          // />
        )
      )}
    </div>
  );
}

export default Upload;
