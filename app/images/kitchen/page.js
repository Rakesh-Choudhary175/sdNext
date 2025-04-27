"use client";

import { ImgDataContext } from "@/app/_context/imgData";
import { useContext } from "react";
import ImagesPage from "@/app/_components/Pages/ImagesPage";

export default function Image() {
  const data = useContext(ImgDataContext);
  console.log(data);
  return <ImagesPage data={data.imgDataKic} />;
}
