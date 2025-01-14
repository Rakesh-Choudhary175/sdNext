import logo from "@/public/logo.jpg";
import Image from "next/image";
import Link from "next/link";
import LinkButton from "./LinkButton";
import LinkButtonMobile from "./LinkButtonMobile";

function Header() {
  return (
    <nav id="navbar" className="bg-neutral-900 fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo  */}
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

          {/*  Desktop Menu  */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <LinkButton link="https://specterior-interio6hgg.rollout.site/#">
                Home
              </LinkButton>
              <LinkButton link="https://specterior-interio6hgg.rollout.site/#">
                About Us
              </LinkButton>
              <LinkButton link="https://specterior-interio6hgg.rollout.site/#">
                Services
              </LinkButton>
              <LinkButton link="https://specterior-interio6hgg.rollout.site/#">
                Portfolio
              </LinkButton>
              <LinkButton link="https://specterior-interio6hgg.rollout.site/#">
                Blog
              </LinkButton>
              <LinkButton link="https://specterior-interio6hgg.rollout.site/#">
                Testimonials
              </LinkButton>
              <LinkButton link="https://specterior-interio6hgg.rollout.site/#">
                Contact Us
              </LinkButton>
              <button className="bg-[#003D33] text-[#D4AF37] px-6 py-2 rounded-lg hover:bg-[#D4AF37] hover:text-white transition-colors">
                Get a Quote
              </button>
            </div>
          </div>

          {/*  Mobile menu button  */}
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

      {/* Mobile Menu  */}
      <div id="mobile-menu" className="hidden md:hidden bg-neutral-900">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <LinkButtonMobile link="https://specterior-interio6hgg.rollout.site/#">
            Home
          </LinkButtonMobile>
          <LinkButtonMobile link="https://specterior-interio6hgg.rollout.site/#">
            About Us
          </LinkButtonMobile>
          <LinkButtonMobile link="https://specterior-interio6hgg.rollout.site/#">
            Services
          </LinkButtonMobile>
          <LinkButtonMobile link="https://specterior-interio6hgg.rollout.site/#">
            Portfolio
          </LinkButtonMobile>
          <LinkButtonMobile link="https://specterior-interio6hgg.rollout.site/#">
            Blog
          </LinkButtonMobile>
          <LinkButtonMobile link="https://specterior-interio6hgg.rollout.site/#">
            Testimonials
          </LinkButtonMobile>
          <LinkButtonMobile link="https://specterior-interio6hgg.rollout.site/#">
            Contact Us
          </LinkButtonMobile>
          <button className="w-full mt-2 bg-[#003D33] text-[#D4AF37] px-6 py-2 rounded-lg hover:bg-[#D4AF37] hover:text-white transition-colors">
            Get a Quote
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Header;
