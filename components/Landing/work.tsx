"use client";

import { Upload, Zap, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { StepImage } from "@/components/Landing/step-image";
import { ProgressBar } from "@/components/Landing/progress-bar";

const steps = [
  {
    icon: Upload,
    title: "1. Create Your Board",
    description:
      "Simply upload your data to our secure platform. We support various file formats and data types to ensure a seamless integration with your existing systems.",
  },
  {
    icon: Zap,
    title: "2. Share Link With Your Users",
    description:
      "Our advanced AI algorithms automatically process and analyze your data, extracting valuable insights and patterns that would be difficult to identify manually.",
  },
  {
    icon: Sparkles,
    title: "3. Manage Your Testimonials",
    description:
      "Receive clear, actionable insights and recommendations based on the AI analysis. Use these insights to make data-driven decisions and improve your business strategies.",
  },
];

const STEP_DURATION = 3000;

export default function HowItWorks() {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const stepInterval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length);
      setProgress(0);
    }, STEP_DURATION);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) {
          return prev + 1;
        }
        return prev;
      });
    }, STEP_DURATION / 100);

    return () => {
      clearInterval(stepInterval);
      clearInterval(progressInterval);
    };
  }, []);

  const totalProgress = (currentStep * 100 + progress) / steps.length;

  return (
    <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-8 lg:px-16 lg:mx-36">
      <div className="flex justify-center mb-8">
        <div className="text-center">
          <p className="text-blue-500 font-medium tracking-wide uppercase text-xs">
            HOW IT WORKS
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-black mt-4">
            Just 3 steps to get started
          </h2>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        <div className="space-y-8 sm:space-y-12">
          <div className="space-y-4"></div>
          <div className="space-y-8 sm:space-y-12 relative">
            <div className="hidden md:block">
              <ProgressBar progress={totalProgress} />
            </div>
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className={`flex gap-4 sm:gap-6 pl-6 sm:pl-8 transition-opacity duration-300 ${
                  currentStep === index ? "opacity-100" : "opacity-50"
                }`}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: currentStep === index ? 1 : 0.5 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex-shrink-0">
                  <div
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-50 flex items-center justify-center transition-all duration-300 ${
                      currentStep === index ? "scale-110 bg-blue-100" : ""
                    }`}
                  >
                    <step.icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500" />
                  </div>
                </div>
                <div className="space-y-1 sm:space-y-2">
                  <h3 className="text-lg sm:text-xl font-semibold text-black">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="hidden md:block lg:pl-8">
          <StepImage currentStep={currentStep} />
        </div>
      </div>
    </section>
  );
}
