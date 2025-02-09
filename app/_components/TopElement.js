import Image from "next/image";
import image2 from "@/public/image.jpeg";

function TopElement() {
  return (
    <section
      id="hero"
      className="relative min-h-[70vh] bg-[#003D33] overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-4 gap-4 h-full w-full">
          <div className="border-[#D4AF37] border-[0.5px] rotate-45"></div>
          <div className="border-[#D4AF37] border-[0.5px] rotate-45"></div>
          <div className="border-[#D4AF37] border-[0.5px] rotate-45"></div>
          <div className="border-[#D4AF37] border-[0.5px] rotate-45"></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div
          className="text-center space-y-8 animate__animated animate__fadeIn"
          style={{ opacity: 1 }}
        >
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-6 relative inline-block">
            Specterior Interior
            <span className="absolute bottom-0 left-0 w-full h-1 bg-[#D4AF37]"></span>
          </h1>

          <p className="text-xl md:text-2xl text-white font-light max-w-3xl mx-auto">
            Specterior Interior Design Pvt Ltd – Where Design Meets Elegance.
          </p>

          <div className="mt-10">
            <button
              className="bg-[#D4AF37] text-white px-8 py-4 rounded-lg text-lg font-semibold 
              hover:bg-white hover:text-[#D4AF37] transition-all duration-300 
              animate__animated animate__pulse animate__infinite"
            >
              Explore Our Services
            </button>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            fill="#D4AF37"
            fillOpacity="0.1"
          >
            <path d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,128C960,117,1056,75,1152,64C1248,53,1344,75,1392,85.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </div>
    </section>
  );
}

export default TopElement;
