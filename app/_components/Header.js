import Image from "next/image";
import logo from "@/public/logo.jpg";
import Link from "next/link";

function Header() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-20">
        <div className="flex-shrink-0">
          <Link
            href="https://specterior-interio6hgg.rollout.site/#"
            className="flex items-center"
          >
            <span className="text-[#D4AF37] text-2xl font-serif">
              <Image
                src={logo}
                height="80"
                width="80"
                alt="The Wild Oasis logo"
                quality={100}
              />
            </span>
          </Link>
        </div>

        <div className="hidden md:block">
          <div className="ml-10 flex items-center space-x-8">
            <Link
              href="https://specterior-interio6hgg.rollout.site/#"
              className="text-white hover:text-[#D4AF37] transition-colors"
            >
              Home
            </Link>
            <Link
              href="https://specterior-interio6hgg.rollout.site/#"
              className="text-white hover:text-[#D4AF37] transition-colors"
            >
              About Us
            </Link>
            <Link
              href="https://specterior-interio6hgg.rollout.site/#"
              className="text-white hover:text-[#D4AF37] transition-colors"
            >
              Services
            </Link>
            <Link
              href="https://specterior-interio6hgg.rollout.site/#"
              className="text-white hover:text-[#D4AF37] transition-colors"
            >
              Portfolio
            </Link>

            <Link
              href="https://specterior-interio6hgg.rollout.site/#"
              className="text-white hover:text-[#D4AF37] transition-colors"
            >
              Testimonials
            </Link>
            <Link
              href="https://specterior-interio6hgg.rollout.site/#"
              className="text-white hover:text-[#D4AF37] transition-colors"
            >
              Contact Us
            </Link>
            <button
              className="bg-[#003D33] text-[#D4AF37] px-6 py-2 rounded-lg hover:bg-[#D4AF37] hover:text-white transition-colors"
              // style={{transform: scale(1) box-shadow: none}}
            >
              Get a Quote
            </button>
          </div>
        </div>

        <div className="md:hidden">
          <button
            id="mobile-menu-button"
            className="text-gray-300 hover:text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
