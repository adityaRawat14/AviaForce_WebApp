import Image from "next/image";
import Link from "next/link";

interface Props {
  id: number;
  name: string;
  tagline: string;
  description: string;
  coverImage: string;
}

export default function ServiceCard({
  id,
  name,
  tagline,
  description,
  coverImage,
}: Props) {
  return (
    <div className="mb-8 bg-blue-50 p-6 rounded-xl shadow-xl hover:shadow-2xl hover:bg-blue-100 hover:-translate-y-2 transition-all duration-300">
      <Link href={``}>
        <Image
          src={coverImage}
          alt={name}
          width={300}
          height={100}
          className="rounded-xl mx-auto block"
        />
        <p className="text-3xl my-4 text-blue-900 font-semibold">{name}</p>
        <p className="text-7xl font-extrabold text-blue-200">{id}</p>
        <p className="font-light italic text-blue-600 my-3">{tagline}</p>
        <p className="text-blue-950">{description}</p>
      </Link>
    </div>
  );
}
