"use client";

import { createContext, useEffect, useState } from "react";

export const ImgDataContext = createContext(null);

export const ImgDataProvider = ({ children }) => {
  const [imgDataBR, setImgDataBR] = useState([]);
  const [imgDataH, setImgDataH] = useState([]);
  const [imgDataAll, setImgDataAll] = useState([]);

  useEffect(() => {
    const fetchImgDataBR = async () => {
      try {
        const response = await fetch("/api/bedroom");
        const data = await response.json();
        setImgDataBR(data.data?.resources || []);
      } catch (error) {
        console.error("Error fetching image data:", error);
      }
    };

    const fetchImgDataH = async () => {
      try {
        const response = await fetch("/api/hall");
        const data = await response.json();
        setImgDataH(data.data?.resources || []);
      } catch (error) {
        console.error("Error fetching image data:", error);
      }
    };

    const fetchImgDataAll = async () => {
      try {
        const response = await fetch("/api/all");
        const data = await response.json();
        setImgDataAll(data.data?.resources || []);
      } catch (error) {
        console.error("Error fetching image data:", error);
      }
    };

    fetchImgDataBR();
    fetchImgDataH();
    fetchImgDataAll();
  }, []);

  return (
    <ImgDataContext.Provider value={{ imgDataBR, imgDataH, imgDataAll }}>
      {children}
    </ImgDataContext.Provider>
  );
};
