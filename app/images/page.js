// import { useEffect, useState } from "react";
"use client";

// import { CldImage } from "next-cloudinary";
// import { getImageData } from "./getImageData";
// import { useEffect, useState } from "react";

// export async function getData() {
//   const response = await fetch(
//     "https://api.cloudinary.com/v1_1/dbzhqgaqd/resources/image",
//     {
//       headers: {
//         Authorization: "Basic 826283531429994:Jbh6_PrnCexcyt8R0pBlfV-0nwc",
//       },
//     }
//   );
//   const data = await response.json();
//   console.log(data);

//   return {
//     props: { imgData: data },
//   };
// }

// function Image() {
// const [imageData, setImageData] = useState([]);

// async function getImg() {
//   const data = await getImageData();
//   setImageData(data);
// }

// getImg();

// console.log(imageData);

// useEffect(() => {
//   async function fetchImages() {
//     const data = await fetch(
//       "https://api.cloudinary.com/v1_1/dbzhqgaqd/resources/image",
//       {
//         headers: {
//           Authorization: "Basic 826283531429994:Jbh6_PrnCexcyt8R0pBlfV-0nwc",
//           "Access-Control-Allow-Origin": "*",
//         },
//       }
//     );
//     setImageData(await data.json());
//   }
//   fetchImages();
// }, []);

//   return (
//     <div>
//       <CldImage
//         width="960"
//         height="600"
//         src="Gemini_Generated_Image_a0u9fsa0u9fsa0u9_mcubpc"
//         sizes="100vw"
//         alt="Description of my image"
//       />
//     </div>
//   );
// }

// export default Image;

// In a React component
import { useEffect, useState } from "react";
import Img from "./Img";

export default function Image() {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch("/api"); // Replace with your actual route
        if (!response.ok) {
          throw new Error("Failed to fetch images");
        }
        const data = await response.json();
        setImages(data.data?.resources || []); // Cloudinary's response contains `resources`
      } catch (err) {
        setError(err.message);
      }
    };

    fetchImages();
  }, []);

  return (
    <div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {images.map((image) => (
          <Img src={image.url} key={image.public_id} />
        ))}
      </div>
    </div>
  );
}
