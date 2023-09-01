"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, spring } from "framer-motion";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  return (
    <header className="px-4 lg:px-6 py-2 bg-blue-950">
      <nav className="relative flex items-center justify-between">
        <div>
          <Link href="/" className="flex items-center">
            <Image
              src="/assets/logo.png"
              alt="Logo-img"
              width={50}
              height={50}
              className="lg:w-16"
            />
            <p className="text-xl lg:text-2xl font-semibold text-blue-100">
              aviaforce&reg;
            </p>
          </Link>
        </div>
        <ul>
          <li>
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ scale: 1.2 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ type: "spring", duration: 0.2, stiffness: 500 }}
              >
                <Image
                  src={isMenuOpen ? "/assets/cross.svg" : "/assets/menu.svg"}
                  alt="Menu"
                  width={24}
                  height={24}
                  className="cursor-pointer md:hidden"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                />
              </motion.div>
            </AnimatePresence>
          </li>
        </ul>
        <AnimatePresence>
          <ul className="hidden md:flex md:gap-4 items-center justify-end text-blue-200 lg:text-lg">
            <li>
              <Link
                className={`${
                  pathname === "/about-us" && "bg-blue-100 text-blue-800"
                } hover:bg-blue-100 hover:text-blue-800 p-2 font-semibold rounded-lg transition-all duration-300`}
                href={`/about-us`}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                className={`${
                  pathname === "/blog" && "bg-blue-100 text-blue-800"
                } hover:bg-blue-100 hover:text-blue-800 p-2 font-semibold rounded-lg transition-all duration-300`}
                href={`/blog`}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                className={`${
                  pathname === "/book-a-session" && "bg-blue-100 text-blue-800"
                } hover:bg-blue-100 hover:text-blue-800 p-2 font-semibold rounded-lg transition-all duration-300`}
                href={`/book-a-session`}
              >
                Book a session
              </Link>
            </li>
            <li>
              <Link
                className={`${
                  pathname === "/contact-us" && "bg-blue-100 text-blue-800"
                } hover:bg-blue-100 hover:text-blue-800 p-2 font-semibold rounded-lg transition-all duration-300`}
                href={`/contact-us`}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </AnimatePresence>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -100 }}
              transition={{ type: "spring", bounce: 0.5 }}
              className="absolute right-1 top-10 w-full md:hidden"
            >
              <ul
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="rounded-2xl transition-all duration-300 flex flex-col md:flex-row gap-6 md:gap-8 items-center justify-evenly md:justify-end font-semibold md:font-normal text-lg md:text-sm text-blue-950 md:text-blue-200 shadow-xl bg-blue-200 md:bg-transparent p-4 md:p-0"
              >
                <li>
                  <Link href={`/about-us`}>About Us</Link>
                  <div className="w-25 py-[1px] md:hidden rounded-full bg-blue-300"></div>
                </li>
                <li>
                  <Link href={``}>Blog</Link>
                  <div className="w-25 py-[1px] md:hidden rounded-full bg-blue-300"></div>
                </li>
                <li>
                  <Link href={``}>Book a session</Link>
                  <div className="w-25 py-[1px] md:hidden rounded-full bg-blue-300"></div>
                </li>
                <li>
                  <Link href="/contact-us">Contact Us!</Link>
                  <div className="w-25 py-[1px] md:hidden rounded-full bg-blue-300"></div>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
