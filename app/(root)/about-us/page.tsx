import Image from "next/image";
import Link from "next/link";

export default function AboutUs() {
  return (
    <section className="p-12 bg-blue-100">
      <div className="h-auto flex flex-col items-center justify-around gap-14 my-20">
        <Image
          src={`/assets/logo.png`}
          alt="Logo of Aviaforce"
          width={200}
          height={200}
        />
        <h1 className="text-8xl align-middle text-center text-blue-900 font-bold uppercase opacity-40 tracking-widest">
          About Us
        </h1>
      </div>
      <div className="h-screen py-14 flex flex-col items-center justify-center gap-10">
        <div className="py-0.5 px-6 rounded-full opacity-30 bg-blue-400" />
        <div className="text-center">
          <Image
            src={`/assets/logo.png`}
            alt="Logo of Aviaforce"
            width={100}
            height={100}
            className="block mx-auto mb-5"
          />
          <p className="text-blue-900 font-semibold text-lg">
            We&apos;re all about making drones.
            <br />
            Agri, FPV and customized.
          </p>
        </div>
        <div className="py-0.5 px-6 rounded-full opacity-30 bg-blue-400" />
      </div>
      <div className="h-screen py-14 flex flex-col items-center justify-center gap-10">
        <div className="py-0.5 px-6 rounded-full opacity-30 bg-blue-400" />
        <div className="text-center">
          <Image
            src={`/assets/logo.png`}
            alt="Logo of Aviaforce"
            width={100}
            height={100}
            className="block mx-auto mb-5"
          />
          <p className="text-blue-900 font-semibold text-lg">
            Started in 2023, willing to serve millions worldwide.
          </p>
        </div>
        <div className="py-0.5 px-6 rounded-full opacity-30 bg-blue-400" />
      </div>
      <Link
        href={`/contact-us`}
        className="mx-auto block text-center w-1/3 mb-2 sm:mb-0 bg-blue-900 py-3 sm:px-10 font-semibold rounded-2xl text-blue-100 hover:bg-transparent hover:shadow-lg hover:text-blue-900 hover:font-bold transition-all duration-300"
      >
        Contact Us
      </Link>
    </section>
  );
}
