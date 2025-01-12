import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main>
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
              About Testify
            </h2>
            <p className="mt-4 text-xl text-gray-500">
              Empowering businesses to showcase their customer success stories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600 mb-4">
                At Testify, we believe in the power of authentic customer
                voices. Our mission is to provide businesses with a seamless
                platform to collect, manage, and showcase genuine customer
                testimonials, helping them build trust and credibility in an
                increasingly digital world.
              </p>
              <p className="text-gray-600">
                We&apos;re committed to creating tools that not only simplify
                the testimonial process but also amplify the impact of customer
                stories, driving growth and fostering stronger connections
                between businesses and their customers.
              </p>
            </div>
            <div className="relative h-64 md:h-auto">
              <Image
                src=""
                alt="Team collaboration"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Our Values
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Authenticity",
                  description:
                    "We believe in the power of genuine customer experiences and strive to showcase them in their truest form.",
                },
                {
                  title: "Innovation",
                  description:
                    "We continuously evolve our platform to meet the changing needs of businesses and their customers.",
                },
                {
                  title: "Empowerment",
                  description:
                    "We empower businesses to take control of their narrative through the voices of their satisfied customers.",
                },
              ].map((value, index) => (
                <Card key={index} className="bg-white shadow-lg">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-semibold mb-2">
                      {value.title}
                    </h4>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Our Team
            </h3>
            <div className="flex items-center justify-around gap-x-8">
              {[
                {
                  name: "Devansh Verma",
                  role: "CEO",
                  image: "",
                },
                {
                  name: "Pulkit Bhatt",
                  role: "CTO",
                  image: "",
                },
                {
                  name: "Priyanshu Tariyal",
                  role: "Head of Design",
                  image: "",
                },
              ].map((member, index) => (
                <div key={index} className="text-center">
                  <h4 className="text-lg font-semibold">{member.name}</h4>
                  <p className="text-gray-500">{member.role}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Join Us in Revolutionizing Testimonials
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Whether you&apos;re a small startup or a large enterprise, Testify
              is here to help you harness the power of customer testimonials.
              Let&apos;s work together to build trust, showcase success, and
              drive growth.
            </p>
            <Link href={"/dashboard"}>
              <Button size="lg">Get Started with Testify</Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
