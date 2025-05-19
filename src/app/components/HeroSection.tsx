"use client";
import { motion } from "motion/react";
import Link from "next/link";

export function HeroSection() {
  return (
    <div className="w-screen bg-sky-900 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="relative my-10 flex w-full flex-col items-center justify-center">
        <div className="px-4 py-10 md:py-20">
          <h1 className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-gray-100 md:text-4xl lg:text-7xl dark:text-slate-300">
            {"Innovating Solutions for a Healthier Nation"
              .split(" ")
              .map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                  animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.1,
                    ease: "easeInOut",
                  }}
                  className="mr-2 inline-block"
                >
                  {word}
                </motion.span>
              ))}
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.8 }}
            className="relative z-10 mx-auto max-w-xl py-4 text-center text-lg font-normal text-gray-300 dark:text-neutral-400"
          >
            Exceptional Government IT Solutions
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 1 }}
            className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <Link href="/" passHref>
              <button className="w-60 transform rounded-lg border border-gray-300 px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
                Explore Now
              </button>
            </Link>
            <Link href="/contact" passHref>
              <button className="w-60 transform rounded-lg border border-gray-300 px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
                Contact Support
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
