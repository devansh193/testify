import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Solution = () => {
  return (
    <div className="bg-[#F5F5F5] w-full px-8  py-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-blue-500  text-xs font-semibold uppercase tracking-wide text-center">
          SOLUTION
        </h2>
        <h1 className="text-4xl font-medium text-black sm:text-5xl text-center mt-4">
          Empower Your Business with Testify
        </h1>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          <div className="lg:col-span-2 rounded-lg shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <Card>
                <CardHeader>
                  <CardTitle>Advanced AI Algorithms</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Our platform utilizes cutting-edge AI algorithms to provide
                    accurate and efficient solutions for your business needs.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Data-Driven Insights</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Leverage our platform to gain valuable insights and make
                    informed decisions backed by advanced analytics.
                  </p>
                </CardContent>
              </Card>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Seamless Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Easily integrate our AI solutions into your existing workflows
                  and systems for a smooth and efficient operation.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-1 bg-gradient-to-br from-blue-700 to-violet-700 rounded-lg shadow-lg p-6 text-white">
            <h2 className="text-2xl font-bold mb-4">Why Choose Us</h2>
            <ul className="space-y-4">
              <li className="flex items-center">
                <svg
                  className="w-6 h-6 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Cutting-edge Technology
              </li>
              <li className="flex items-center">
                <svg
                  className="w-6 h-6 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Expert Support Team
              </li>
              <li className="flex items-center">
                <svg
                  className="w-6 h-6 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Scalable Solutions
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
