"use client";

import TopElement from "./_components/TopElement";
import Feature from "./_components/Feature";
import Footer from "./_components/Footer";
import GetInTouch from "./_components/GetInTouch";
import Header from "./_components/Header";
import Portfolio from "./_components/Portfolio";
import PopupForm from "./_components/forms/PopupForm";
import { useEffect, useState } from "react";

export default function Home() {
  const [quote, setquote] = useState(false);

  function handleQuote() {
    setquote(!quote);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setquote(true);
    }, 5000);
    // I will be deleted while component is unmounting.
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Header handleQuote={handleQuote} />
      <TopElement />
      <div className={`${quote ? "" : "hidden"}`}>
        <PopupForm handleQuote={handleQuote} />
      </div>
      <Feature />
      <Portfolio />
      <GetInTouch />
      <Footer />
    </>
  );
}
