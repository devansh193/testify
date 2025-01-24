import Image from "next/image";

export const Solution = () => {
  return (
    <div className="bg-[#F5F5F5] w-full px-4 sm:px-8 py-24">
      <div className="max-w-7xl mx-auto">
        {/* Heading Section */}
        <div className="text-center">
          <h2 className="text-blue-500 text-xs font-semibold uppercase tracking-wide">
            SOLUTION
          </h2>
          <h1 className="text-4xl font-medium text-black sm:text-5xl mt-4">
            Empower Your Business with Testify
          </h1>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-10">
          <div className="lg:col-span-2 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Feature 1 */}
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow transform duration-500">
                <h1 className="text-black text-xl font-semibold mb-4">
                  Seamlessly Manage Your Boards
                </h1>
                <p className="text-gray-600 font-medium text-base">
                  Collect and organize all your testimonials in one place. No
                  more scattered reviews—just a clean, easy-to-manage hub.
                </p>
                <div className="flex items-center justify-center mt-5">
                  <div className="relative rounded-xl overflow-hidden transform transition-transform duration-300 hover:scale-105 shadow-lg">
                    <Image
                      className="rounded-[12px]"
                      src={"/marketing.jpeg"}
                      alt="Centralized Testimonial Hub"
                      height={300}
                      width={450}
                    />
                  </div>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                <h1 className="text-black text-xl font-semibold mb-3 text-center">
                  Centralized Testimonial Hub
                </h1>
                <p className="text-gray-600 font-medium text-base text-center leading-relaxed">
                  Collect and organize all your testimonials in one place. No
                  more scattered reviews—just a clean, easy-to-manage hub.
                </p>
                <div className="flex items-center justify-center mt-5">
                  <div className="relative rounded-xl overflow-hidden transform transition-transform duration-300 hover:scale-105 shadow-lg">
                    <Image
                      className="rounded-[12px]"
                      src="/testimonials.png"
                      alt="Centralized Testimonial Hub"
                      height={300}
                      width={450}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h1 className="text-black text-xl font-semibold mb-4">
                Effortless Add Your Product
              </h1>
              <p className="text-gray-600 font-medium text-base">
                Curate, update, and showcase the best testimonials in seconds.
                Keep your social proof fresh and relevant.
              </p>
              <div className="flex items-center justify-center mt-5">
                <div className="relative rounded-xl overflow-hidden transform transition-transform duration-300 hover:scale-105 shadow-lg">
                  <Image
                    className="rounded-md"
                    src={"/create.png"}
                    alt="Centralized Testimonial Hub"
                    height={300}
                    width={450}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Why Choose Us */}
          <div className="bg-gradient-to-br from-blue-700 to-violet-700 rounded-xl shadow-lg p-6 text-white">
            <h2 className="text-2xl font-bold mb-4">Seamless integration</h2>
            <p className="text-white font-medium text-base">
              Curate, update, and showcase the best testimonials in seconds.
              Keep your social proof fresh and relevant.
            </p>
            <div className="flex items-center justify-center mt-4 shadow-lg rounded-2xl overflow-hidden transform transition-transform duration-300 hover:scale-105">
              <Image
                className="rounded-[18px] p-2"
                src={"/sidebar.png"}
                alt="img"
                height={1200}
                width={500}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
