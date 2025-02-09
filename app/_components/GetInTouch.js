import Form from "./forms/Form";

function GetInTouch() {
  return (
    <section id="contact" className="py-20 bg-[#003D33]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header  */}
        <div className="text-center mb-16 animate__animated animate__fadeIn">
          <h2 className="text-4xl font-serif text-white mb-4">Get in Touch</h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form  */}
          <div className="bg-neutral-900 p-8 rounded-lg animate__animated animate__fadeInLeft">
            <Form />
          </div>

          {/* Contact Information  */}
          <div className="space-y-8 animate__animated animate__fadeInRight">
            {/* Map  */}
            <div className="h-64 rounded-lg border-4 border-[#D4AF37] overflow-hidden">
              <div id="map" className="w-full h-full bg-neutral-800">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d622.4082940777886!2d73.85676870964488!3d18.461316528970972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eb4dbfcb65b9%3A0xbc0a38f2f37d2ac8!2sSpecterior%20Designs!5e0!3m2!1sen!2sin!4v1676184012562!5m2!1sen!2sin"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* Contact Details  */}
            <div className="bg-neutral-900 p-8 rounded-lg">
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="text-[#D4AF37] w-10">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      ></path>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      ></path>
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-[#D4AF37] font-serif">Address</h4>
                    <p className="text-white">
                      Mudra Society,Vasant Baug Society,Padmavati Nager,Pune
                      411009
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="text-[#D4AF37] w-10">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                      ></path>
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-[#D4AF37] font-serif">Phone</h4>
                    <p className="text-white">9112168758 </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="text-[#D4AF37] w-10">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      ></path>
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-[#D4AF37] font-serif">Email</h4>
                    <p className="text-white">specteriordesigns@gmail.com </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GetInTouch;
