"use client";
import React, { useState, useEffect } from "react";

function ScrollComponent() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const currentPosition = window.scrollY;
    setScrollPosition(currentPosition);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollPosition > 100) {
      console.log("Scrolled past 100px");
    }
  }, [scrollPosition]);

  return (
    <div style={{ height: "200vh" }}>
      <p>Scroll Position: {scrollPosition}px</p>
    </div>
  );
}

export default ScrollComponent;
