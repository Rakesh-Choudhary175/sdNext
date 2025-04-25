"use client";

import Img from "./Img";
import Spinner from "@/app/_components/Spinner";

import { ImgDataContext } from "@/app/_context/imgData";
import { useContext } from "react";

export default function Image() {
  const data = useContext(ImgDataContext);
  console.log(data);
  return (
    <div>
      {data.imgDataH[0] == null && <Spinner />}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {data.imgDataH.map((image) => (
          <Img src={image.secure_url} key={image.public_id} />
        ))}
      </div>
    </div>
  );
}
