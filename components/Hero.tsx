import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex flex-col-reverse items-center gap-8 justify-between p-8 bg-gradient-to-br from-blue-50 to-blue-200">
      <div>
        <h1 className="text-center text-4xl font-extrabold text-blue-950 mb-5">
          We build drones- Agri, FPV and Customized!
        </h1>
        <h4 className="mb-10 text-center font-medium text-blue-900">
          Crafted for precision: From agriculture to FPVs, customize your drone
          with our expert manufacturing.
          <br />
          Contact us today!
        </h4>
        <div className="mb-1 text-center flex flex-col sm:items-center sm:gap-5 sm:justify-center sm:flex-row gap-3">
          <Link
            href={`/contact-us`}
            className="mb-2 sm:mb-0 bg-blue-900 py-3 sm:px-6 font-semibold rounded-2xl text-blue-100 hover:bg-transparent hover:shadow-lg hover:text-blue-900 hover:font-bold transition-all duration-300"
          >
            Contact Us
          </Link>
          <Link
            href={``}
            className="text-blue-900 font-semibold transition-all duration-300 underline hover:no-underline"
          >
            About us
          </Link>
        </div>
      </div>
      <Image
        src="/assets/hero-drone.png"
        alt="A drone"
        width={600}
        height={600}
        className="my-0 mx-auto rounded-xl"
      />
    </section>
  );
}
