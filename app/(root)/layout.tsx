import Navbar from "@/components/Navbar";
import "../globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Footer from "@/components/Footer";
import { Suspense } from "react";
import Loading from "./loading";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aviaforce | Building skies",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Suspense fallback={<Loading />}>
          <Navbar />
          {children}
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}
