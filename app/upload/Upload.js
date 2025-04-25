"use client";
import Image from "next/image";
import Spinner from "../_components/Spinner";
import { useState } from "react";

function Upload() {
  const [imageBR, setImageBR] = useState(null);
  const [imageHall, setImageHall] = useState(null);
  const [imageAll, setImageAll] = useState(null);
  const [loading, setLoading] = useState(false);

  const uploadBedroomImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "ml_default");
    data.append("cloud_name", process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME_BR);

    setLoading(true);

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME_BR}/image/upload`,
      {
        method: "POST",
        body: data,
      }
    );

    const file = await res.json();

    console.log(file);

    setImageBR(file.secure_url);
    setLoading(false);
  };

  const uploadHallImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "ml_default");
    data.append("cloud_name", process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME_H);

    setLoading(true);

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME_H}/image/upload`,
      {
        method: "POST",
        body: data,
      }
    );

    const file = await res.json();

    console.log(file);

    setImageHall(file.secure_url);
    setLoading(false);
  };

  const uploadAllImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "ml_default");
    data.append(
      "cloud_name",
      process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME_ALL
    );

    setLoading(true);

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME_ALL}/image/upload`,
      {
        method: "POST",
        body: data,
      }
    );

    const file = await res.json();

    console.log(file);

    setImageAll(file.secure_url);
    setLoading(false);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center   py-6">
        <h1 className="text-3xl font-bold mb-6">BedRoom Image</h1>
        <input
          type="file"
          name="file"
          placeholder="Upload an image"
          onChange={uploadBedroomImage}
          className="mb-4 p-2 border border-gray-300 rounded-md"
        />
        {loading ? (
          <Spinner />
        ) : (
          imageBR && (
            <Image
              alt="img"
              style={{ transform: "translate3d(0, 0, 0)" }}
              className="transform rounded-lg brightness-90 transition group-hover:brightness-110"
              src={imageBR}
              width={720}
              height={480}
              // loading={5 < 4 ? "eager" : "lazy"}
              sizes="(max-width: 640px) 100vw,
                (max-width: 1280px) 50vw,
                (max-width: 1536px) 33vw,
                25vw"
            />
          )
        )}
      </div>

      <div className="flex flex-col items-center justify-center  py-6">
        <h1 className="text-3xl font-bold mb-6">Hall Image</h1>
        <input
          type="file"
          name="file"
          placeholder="Upload an image"
          onChange={uploadHallImage}
          className="mb-4 p-2 border border-gray-300 rounded-md"
        />
        {loading ? (
          <Spinner />
        ) : (
          imageHall && (
            <Image
              alt="img"
              style={{ transform: "translate3d(0, 0, 0)" }}
              className="transform rounded-lg brightness-90 transition group-hover:brightness-110"
              src={imageHall}
              width={720}
              height={480}
              // loading={5 < 4 ? "eager" : "lazy"}
              sizes="(max-width: 640px) 100vw,
                (max-width: 1280px) 50vw,
                (max-width: 1536px) 33vw,
                25vw"
            />
          )
        )}
      </div>

      <div className="flex flex-col items-center justify-center   py-6">
        <h1 className="text-3xl font-bold mb-6">All Image</h1>
        <input
          type="file"
          name="file"
          placeholder="Upload an image"
          onChange={uploadAllImage}
          className="mb-4 p-2 border border-gray-300 rounded-md"
        />
        {loading ? (
          <Spinner />
        ) : (
          imageAll && (
            <Image
              alt="img"
              style={{ transform: "translate3d(0, 0, 0)" }}
              className="transform rounded-lg brightness-90 transition group-hover:brightness-110"
              src={imageAll}
              width={720}
              height={480}
              // loading={5 < 4 ? "eager" : "lazy"}
              sizes="(max-width: 640px) 100vw,
                (max-width: 1280px) 50vw,
                (max-width: 1536px) 33vw,
                25vw"
            />
          )
        )}
      </div>
    </>
  );
}

export default Upload;
