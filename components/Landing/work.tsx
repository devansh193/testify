import { ArrowRight, CheckCircle, Star } from "lucide-react";
export const Work = () => {
  return (
    <div className="flex items-center justify-center py-20">
      <div className="flex items-center justify-center">
        <section className="w-full lg:pb-12 lg:pt-6">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl font-bold text-center mb-8">
              How Testify Works
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="bg-gray-100 p-3 rounded-full">
                  <CheckCircle className="h-10 w-10 text-green-500" />
                </div>
                <h3 className="text-xl font-bold">1. Easy Setup</h3>
                <p className="text-gray-500">
                  Create your testimonial page in just a few clicks. Customize
                  the design to match your brand.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="bg-gray-100 p-3 rounded-full">
                  <Star className="h-10 w-10 text-yellow-400" />
                </div>
                <h3 className="text-xl font-bold">2. Collect Testimonials</h3>
                <p className="text-gray-500">
                  Share your unique URL with customers. They can easily submit
                  their testimonials through a user-friendly form.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="bg-gray-100 p-3 rounded-full">
                  <ArrowRight className="h-10 w-10 text-blue-500" />
                </div>
                <h3 className="text-xl font-bold">3. Showcase & Convert</h3>
                <p className="text-gray-500">
                  Display your testimonials on your website. Use our analytics
                  to optimize and increase conversions.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
