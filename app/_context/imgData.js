"use client";

import { createContext, useEffect, useState } from "react";

export const ImgDataContext = createContext(null);

export const ImgDataProvider = ({ children }) => {
  const [imgDataBR, setImgDataBR] = useState([]);
  const [imgDataH, setImgDataH] = useState([]);
  const [imgDataKic, setImgDataKic] = useState([]);
  const [imgDataKR, setImgDataKR] = useState([]);

  useEffect(() => {
    const fetchImgDataBR = async () => {
      try {
        const responseBR = await fetch("/api/bedroom");
        const responseH = await fetch("/api/hall");
        const responseKic = await fetch("/api/kitchen");
        const responseKR = await fetch("/api/kidsroom");

        const dataBR = await responseBR.json();
        const dataH = await responseH.json();
        const dataKic = await responseKic.json();
        const dataKR = await responseKR.json();
        setImgDataBR(dataBR.data?.resources || []);
        setImgDataH(dataH.data?.resources || []);
        setImgDataKic(dataKic.data?.resources || []);
        setImgDataKR(dataKR.data?.resources || []);
      } catch (error) {
        console.error("Error fetching image data:", error);
      }
    };

    // const fetchImgDataH = async () => {
    //   try {
    //     const response = await fetch("/api/hall");
    //     const data = await response.json();
    //     setImgDataH(data.data?.resources || []);
    //   } catch (error) {
    //     console.error("Error fetching image data:", error);
    //   }
    // };

    // const fetchImgDataKic = async () => {
    //   try {
    //     const response = await fetch("/api/kitchen");
    //     const data = await response.json();
    //     setImgDataKic(data.data?.resources || []);
    //   } catch (error) {
    //     console.error("Error fetching image data:", error);
    //   }
    // };

    fetchImgDataBR();
    // fetchImgDataH();
    // fetchImgDataKic();
  }, []);

  return (
    <ImgDataContext.Provider
      value={{ imgDataBR, imgDataH, imgDataKic, imgDataKR }}
    >
      {children}
    </ImgDataContext.Provider>
  );
};
