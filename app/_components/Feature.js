function Feature() {
  return (
    <section id="featured-services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-[#003D33] mb-4 animate__animated animate__fadeIn">
            Our Featured Services
          </h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            className="bg-white rounded-lg shadow-xl p-6 hover:transform hover:scale-105 transition-all duration-300 group animate__animated animate__fadeInUp"
            // style="opacity: 1; transform: translateY(0px);"
          >
            <div className="h-16 w-16 mx-auto mb-6 text-[#D4AF37] group-hover:text-[#003D33] transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                ></path>
              </svg>
            </div>
            <h3 className="text-xl font-serif text-[#003D33] mb-4">
              Modular Furniture Design
            </h3>
            <p className="text-gray-600">
              Custom-designed modular solutions that maximize space and
              functionality while maintaining aesthetic excellence.
            </p>
          </div>

          <div
            className="bg-white rounded-lg shadow-xl p-6 hover:transform hover:scale-105 transition-all duration-300 group animate__animated animate__fadeInUp"
            // style="animation-delay: 0.2s; opacity: 1; transform: translateY(0px);"
          >
            <div className="h-16 w-16 mx-auto mb-6 text-[#D4AF37] group-hover:text-[#003D33] transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                ></path>
              </svg>
            </div>
            <h3 className="text-xl font-serif text-[#003D33] mb-4">
              Luxury Residential Interiors
            </h3>
            <p className="text-gray-600">
              Transform your living spaces into luxurious sanctuaries that
              reflect your personal style and sophistication.
            </p>
          </div>

          <div
            className="bg-white rounded-lg shadow-xl p-6 hover:transform hover:scale-105 transition-all duration-300 group animate__animated animate__fadeInUp"
            // style="animation-delay: 0.4s; opacity: 1; transform: translateY(0px);"
          >
            <div className="h-16 w-16 mx-auto mb-6 text-[#D4AF37] group-hover:text-[#003D33] transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                ></path>
              </svg>
            </div>
            <h3 className="text-xl font-serif text-[#003D33] mb-4">
              Commercial Space Planning
            </h3>
            <p className="text-gray-600">
              Strategic space planning and design solutions for businesses that
              enhance productivity and brand image.
            </p>
          </div>

          <div
            className="bg-white rounded-lg shadow-xl p-6 hover:transform hover:scale-105 transition-all duration-300 group animate__animated animate__fadeInUp"
            // style="animation-delay: 0.6s; opacity: 1; transform: translateY(0px);"
          >
            <div className="h-16 w-16 mx-auto mb-6 text-[#D4AF37] group-hover:text-[#003D33] transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                ></path>
              </svg>
            </div>
            <h3 className="text-xl font-serif text-[#003D33] mb-4">
              Bespoke Furniture
            </h3>
            <p className="text-gray-600">
              Handcrafted, custom-made furniture pieces that perfectly align
              with your vision and space requirements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Feature;
