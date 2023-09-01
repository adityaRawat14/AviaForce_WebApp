"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, delay } from "framer-motion";

export default function Hero() {
  return (
    <section className="flex flex-col-reverse lg:flex-row lg:h-screen lg:justify-around lg:gap-5 items-center gap-8 justify-between p-8 lg:p-12 bg-gradient-to-br from-blue-50 to-blue-400">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className=""
      >
        <h1 className="text-center lg:text-left text-4xl lg:text-5xl lg:mb-10 font-extrabold text-blue-950 mb-5">
          We build drones- Agri, FPV and Customized!
        </h1>
        <h4 className="mb-10 text-center lg:text-left font-medium text-blue-900">
          Crafted for precision: From agriculture to FPVs, customize your drone
          with our expert manufacturing. <br className="lg:hidden" />
          Contact us today!
        </h4>
        <div className="mb-1 text-center lg:text-left lg:justify-start flex flex-col sm:items-center sm:gap-2 sm:justify-center sm:flex-row gap-3">
          <Link
            href={`/contact-us`}
            className="mb-2 sm:mb-0 bg-blue-900 py-3 sm:px-10 font-semibold rounded-2xl text-blue-100 hover:bg-transparent hover:shadow-lg hover:text-blue-900 hover:font-bold transition-all duration-300"
          >
            Contact Us
          </Link>
          <Link
            href={`/about-us`}
            className="text-blue-900 font-semibold transition-all duration-300 underline hover:no-underline sm:px-10"
          >
            About us
          </Link>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="grow-1"
      >
        <Image
          src="/assets/hero-drone.png"
          alt="A drone"
          width={600}
          height={600}
          className="my-0 mx-auto rounded-xl lg:w-[90rem]"
        />
      </motion.div>
    </section>
  );
}
