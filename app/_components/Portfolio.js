import Image from "next/image";

import image from "@/public/image.jpeg";
import image1 from "@/public/prof.jpg";
import image2 from "@/public/2.jpg";

function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate__animated animate__fadeIn">
          <h2 className="text-4xl font-serif text-white mb-4">Our Portfolio</h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto"></div>
          <p className="text-white mt-6 max-w-2xl mx-auto">
            Explore our collection of meticulously crafted spaces that showcase
            our dedication to excellence in interior design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="group relative h-80 overflow-hidden rounded-lg animate__animated animate__fadeInUp">
            <div className="absolute inset-0 bg-[#003D33]">
              <figure>
                <Image
                  src={image}
                  alt="#"
                  loading="lazy"
                  height={1000}
                  width={1000}
                  className="transition-opacity duration-300 opacity-100"
                />
              </figure>
            </div>
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="text-center p-4">
                <h3 className="text-[#D4AF37] text-xl font-serif mb-2">
                  Luxury Villa Interior
                </h3>
                <p className="text-white">Contemporary Design</p>
              </div>
            </div>
          </div>

          <div
            className="group relative h-80 overflow-hidden rounded-lg animate__animated animate__fadeInUp"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="absolute inset-0 bg-[#003D33]">
              <figure>
                <Image
                  src={image}
                  alt="#"
                  loading="lazy"
                  height={1000}
                  width={1000}
                  className="transition-opacity duration-300 opacity-100"
                />
              </figure>
            </div>
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>

            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="text-center p-4">
                <h3 className="text-[#D4AF37] text-xl font-serif mb-2">
                  Modern Office Space
                </h3>
                <p className="text-white">Corporate Design</p>
              </div>
            </div>
          </div>

          <div
            className="group relative h-80 overflow-hidden rounded-lg animate__animated animate__fadeInUp"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="absolute inset-0 bg-[#003D33]">
              <figure>
                <Image
                  src={image}
                  alt="#"
                  loading="lazy"
                  height={1000}
                  width={1000}
                  className="transition-opacity duration-300 opacity-100"
                />
              </figure>
            </div>
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="text-center p-4">
                <h3 className="text-[#D4AF37] text-xl font-serif mb-2">
                  Boutique Restaurant
                </h3>
                <p className="text-white">Commercial Design</p>
              </div>
            </div>
          </div>
        </div>

        <section id="aboutus" className="py-20 bg-neutral-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate__animated animate__fadeIn">
              <h2 className="text-4xl font-serif text-white mb-4">About Us</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="group relative h-80 overflow-hidden rounded-lg animate__animated animate__fadeInUp">
                <div className="absolute inset-0 bg-[#003D33]">
                  <figure>
                    <Image
                      src={image1}
                      alt="#"
                      height={1000}
                      width={1000}
                      loading="lazy"
                      className="transition-opacity duration-300 opacity-100"
                    />
                  </figure>
                </div>
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-center p-4">
                    <h3 className="text-[#D4AF37] text-xl font-serif mb-2">
                      Luxury Villa Interior
                    </h3>
                    <p className="text-white">Contemporary Design</p>
                  </div>
                </div>
              </div>

              <div
                className="group relative h-80 overflow-hidden rounded-lg animate__animated animate__fadeInUp"
                style={{ animationDelay: "0.2s" }}
              >
                <div className="absolute inset-0 bg-[#003D33]">
                  <figure>
                    <Image
                      src={image2}
                      alt="#"
                      height={1000}
                      width={1000}
                      loading="lazy"
                      className="transition-opacity duration-300 opacity-100"
                    />
                  </figure>
                </div>
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-center p-4">
                    <h3 className="text-[#D4AF37] text-xl font-serif mb-2">
                      Modern Office Space
                    </h3>
                    <p className="text-white">Corporate Design</p>
                  </div>
                </div>
              </div>

              <div
                className="group relative h-80 overflow-hidden rounded-lg animate__animated animate__fadeInUp"
                style={{ animationDelay: "0.4s" }}
              >
                <div>
                  <p className="text-white">
                    At Specterior, we,ve been transforming spaces into
                    extraordinary experiences since our inception. Our journey
                    began with a simple yet powerful vision: to create interior
                    spaces that perfectly balance luxury, functionality, and
                    personal expression. With years of expertise in the
                    industry, we,ve established ourselves as leaders in
                    innovative design solutions, committed to delivering
                    excellence in every project we undertake.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

export default Portfolio;
