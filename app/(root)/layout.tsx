import Navbar from "@/components/Navbar";
import "../globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Footer from "@/components/Footer";
import { Suspense } from "react";
import Loading from "./loading";
import { Toaster } from "@/components/ui/toaster"
import SessionContextProvider from "../context/SessionContextProvider";
import { Session, getServerSession } from "next-auth";
import authOptions from "@/auth.config";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aviaforce | Building skies",
  description:
    "We build and sell drones, agriculture drones, fpv drones and customized drones. Buy drones now!",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session:any=await getServerSession(authOptions);
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <SessionContextProvider session={session} >
        <Suspense fallback={<Loading />}>
          <Navbar />
          {children}
          <Footer />
        </Suspense>
        <Toaster />

        </SessionContextProvider>
      </body>
    </html>
  );
}
