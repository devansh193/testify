import { Button } from "../ui/button";

export const Advert = () => {
    return (
      <div className="flex items-center justify-center">
        <div className="w-full max-w-3xl">
          <section className="py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                    Ready to boost your social proof?
                  </h2>
                  <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl">
                    Join thousands of businesses already using Testify to showcase
                    their customer success stories.
                  </p>
                </div>
                <Button className="bg-black text-white hover:bg-gray-800 transition-colors">
                  Start Your Free Trial
                </Button>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  };