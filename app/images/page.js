"use client";

import { useEffect, useState } from "react";

function Image() {
  const [imageData, setImageData] = useState([]);

  console.log(imageData);

  useEffect(() => {
    async function fetchImages() {
      const data = await fetch(
        "https://api.cloudinary.com/v1_1/dbzhqgaqd/resources/image",
        {
          headers: {
            Authorization: "Basic 826283531429994:Jbh6_PrnCexcyt8R0pBlfV-0nwc",
            AccessControlAllowOrigin: "http://localhost:8000",
            AccessControlAllowCredentials: true,
          },
        }
      );
      setImageData(await data.json());
    }
    fetchImages();
  }, []);

  return (
    <div>
      <h1>image</h1>
    </div>
  );
}

export default Image;
