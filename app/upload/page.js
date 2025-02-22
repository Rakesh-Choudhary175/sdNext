"use client";
import { useState } from "react";
import Upload from "./Upload";

export default function UploadPage() {
  const [code, setCode] = useState("");
  const [check, setCheck] = useState(false);

  function handleCode(event) {
    setCode(event.target.value);
  }

  function onSubmit(event) {
    event.preventDefault();

    console.log(code);

    if (code === "SDUI") {
      setCheck(true);
    }
  }

  if (check) return <Upload />;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen  py-6">
      <form id="contactForm" className="space-y-6 " onSubmit={onSubmit}>
        <div>
          <label className="block text-white mb-2">code</label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-4 py-3 bg-neutral-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
            required=""
            onChange={handleCode}
            value={code}
          />
        </div>
        <button
          type="submit"
          className="w-full py-4 bg-[#D4AF37] text-white rounded-lg hover:bg-white hover:text-[#D4AF37] transition-colors duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
