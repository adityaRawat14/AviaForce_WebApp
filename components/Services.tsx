import Image from "next/image";
import Link from "next/link";
import ServiceCard from "./cards/ServiceCard";
import { dataProducts } from "@/lib/data";

export default function Services() {
  return (
    <section className="p-12 bg-blue-100 text-center">
      <div className="mb-8">
        <h3 className="uppercase tracking-wider font-regular text-blue-400 mb-1">
          You can get...
        </h3>
        <h1 className="font-bold text-3xl text-blue-800">Our Products</h1>
      </div>
      <div className="flex flex-col">
        {dataProducts.map((product) => (
          <ServiceCard
            key={product.id}
            id={product.id}
            description={product.description}
            coverImage={product.coverImage}
            tagline={product.tagline}
            name={product.name}
          />
        ))}
      </div>
      <Link
        href={`/contact-us`}
        className="mb-2 bg-blue-900 py-3 px-8 font-semibold rounded-2xl text-blue-100 hover:bg-transparent hover:shadow-lg hover:text-blue-900 hover:font-bold transition-all duration-300"
      >
        Contact Us
      </Link>
    </section>
  );
}
