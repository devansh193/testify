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
          {/* Left Column - Features */}
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
                <div className="flex items-center justify-center mt-4 rounded-md overflow-hidden transform transition-transform duration-300 hover:scale-105">
                  <Image
                    className="rounded-xl p-2"
                    src={"/marketing.jpeg"}
                    alt="img"
                    height={300}
                    width={450}
                  />
                </div>
              </div>

              {/* Feature 2 */}
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h1 className="text-black text-xl font-semibold mb-4">
                  Centralized Testimonial Hub
                </h1>
                <p className="text-gray-600 font-medium text-base">
                  Collect and organize all your testimonials in one place. No
                  more scattered reviews—just a clean, easy-to-manage hub.
                </p>
                <div className="flex items-center justify-center mt-4 rounded-md overflow-hidden transform transition-transform duration-300 hover:scale-105">
                  <Image
                    className="rounded-xl p-2"
                    src={"/testimonials.png"}
                    alt="img"
                    height={300}
                    width={450}
                  />
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
              <div className="flex items-center justify-center mt-4 rounded-md overflow-hidden transform transition-transform duration-300 hover:scale-105">
                <Image
                  className="rounded-xl p-2"
                  src={"/create.png"}
                  alt="img"
                  height={350}
                  width={500}
                />
              </div>
            </div>
          </div>

          {/* Right Column - Why Choose Us */}
          <div className="bg-gradient-to-br from-blue-700 to-violet-700 rounded-xl shadow-lg p-6 text-white">
            <h2 className="text-2xl font-bold mb-6">Why Choose Testify</h2>
            <div className="flex items-center justify-center mt-4 rounded-md overflow-hidden transform transition-transform duration-300 hover:scale-105">
              <Image
                className="rounded-xl p-2"
                src={"/sidebar.png"}
                alt="img"
                height={500}
                width={400}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
