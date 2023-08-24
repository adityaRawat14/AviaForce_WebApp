"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="px-4 py-2 bg-blue-950">
      <nav className="relative flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image src="/assets/logo.png" alt="Logo-img" width={50} height={50} />
          <p className="text-xl font-semibold text-blue-100">aviaforce&reg;</p>
        </Link>
        <ul>
          <li>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Image
                src={isMenuOpen ? "/assets/cross.svg" : "/assets/menu.svg"}
                alt="Menu"
                width={24}
                height={24}
                className="cursor-pointer hover:scale-110 transition-all duration-300"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              />
            </motion.div>
          </li>
        </ul>
        {isMenuOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute right-1 top-10 w-full"
          >
            <ul
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="rounded-2xl transition-all duration-300 flex flex-col gap-6 items-center justify-evenly font-semibold text-lg text-blue-950 shadow-xl bg-blue-200 p-4"
            >
              <li>
                <Link href={``}>About Us</Link>
                <div className="w-25 py-[1px] rounded-full bg-blue-300"></div>
              </li>
              <li>
                <Link href={``}>Drones</Link>
                <div className="w-25 py-[1px] rounded-full bg-blue-300"></div>
              </li>
              <li>
                <Link href={``}>Blog</Link>
                <div className="w-25 py-[1px] rounded-full bg-blue-300"></div>
              </li>
              <li>
                <Link href={``}>Book a session</Link>
                <div className="w-25 py-[1px] rounded-full bg-blue-300"></div>
              </li>
              <li>
                <Link href="/contact-us">Contact Us!</Link>
                <div className="w-25 py-[1px] rounded-full bg-blue-300"></div>
              </li>
            </ul>
          </motion.div>
        ) : (
          <></>
        )}
      </nav>
    </header>
  );
}
