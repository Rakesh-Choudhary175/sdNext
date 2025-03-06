"use client";

import { useEffect, useState } from "react";
import Img from "./Img";
import Spinner from "@/app/_components/Spinner";
import Link from "next/link";

export default function Image() {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  const [loadingImages, setLoadingImages] = useState(false);
  function handleLoading(stat) {
    setLoadingImages(stat);
  }

  useEffect(() => {
    const fetchImages = async () => {
      handleLoading(true);
      try {
        const response = await fetch("/api");
        if (!response.ok) {
          throw new Error("Failed to fetch images");
        }
        const data = await response.json();
        setImages(data.data?.resources || []);
      } catch (err) {
        setError(err.message);
      }
      handleLoading(false);
    };

    fetchImages();
  }, []);

  return (
    <div>
      {loadingImages && <Spinner />}
      {error && (
        <div className="flex flex-row min-h-screen justify-center items-center">
          <h1
            className="text-4xl md:text-6xl font-serif text-white mb-6 relative inline-block"
            style={{ color: "red" }}
          >
            {error}
          </h1>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {images.map((image) => (
          <Link href={`/images/5`} key={image.public_id}>
            <Img src={image.secure_url} key={image.public_id} />
          </Link>
        ))}
      </div>
    </div>
  );
}
