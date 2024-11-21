import { Button } from "@/components/ui/button";
import Link from "next/link";

export const Advert = () => {
  return (
    <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="flex flex-col items-center justify-center space-y-6 sm:space-y-8 text-center">
          <div className="space-y-3 sm:space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
              Ready to boost your social proof?
            </h2>
            <p className="mx-auto max-w-[600px] text-gray-600 text-sm sm:text-base md:text-lg">
              Join thousands of businesses already using Testify to showcase
              their customer success stories.
            </p>
          </div>
          <Link href="/sign-up" passHref>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-sm sm:text-base py-2 px-4 sm:py-3 sm:px-6">
              Start For Free Today
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
