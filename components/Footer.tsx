import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <section className="py-10 px-6 bg-blue-950 text-blue-300">
      <div className="justify-items-center grid gap-5 grid-rows-2 grid-cols-2 items-center">
        <div className="row-span-full flex flex-col items-center justify-stretch">
          <Link href="/" className="flex items-center">
            <Image
              src="/assets/logo.png"
              alt="Logo-img"
              width={50}
              height={50}
            />
            <p className="text-xl font-semibold text-blue-100">
              aviaforce&reg;
            </p>
          </Link>
          <p className="text-xs font-light">&copy; @2023 Aviatrex Pvt. Ltd.</p>
        </div>
        <div>
          <h3 className="font-medium text-sm mb-2 text-center">Products</h3>
          <ul className="font-light text-sm flex flex-col items-center justify-center gap-1">
            <li>
              <Link href={``}>Agri-Drone</Link>
            </li>
            <li>
              <Link href={``}>FPV-Drone</Link>
            </li>
            <li>
              <Link href={``}>Customized-Drone</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-medium text-sm mb-2 text-center">
            Connect with us
          </h3>
          <ul className="font-light text-sm flex flex-col items-center justify-between gap-1">
            <li>
              <Link href={`/contact-us`}>Contact us</Link>
            </li>
            <li>
              <Link href={``}>Social media 2</Link>
            </li>
            <li>
              <Link href={``}>Social Media 3</Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
