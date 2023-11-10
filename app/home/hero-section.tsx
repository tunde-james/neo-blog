import Image from "next/image";
import Link from "next/link";

function HeroSection() {
  return (
    <section className="mt-6 grid grid-cols-1 sm:grid-cols-12">
      <div className="col-span-7 w-full place-self-center justify-self-start text-center sm:text-left">
        <h1 className="text-2xl capitalize sm:text-4xl md:text-6xl md:leading-normal">
          tech news for busy peeps
        </h1>
        <Link
          href="/blog/all"
          className="mt-3 w-fit rounded border-2 bg-indigo-500 px-4 py-2 capitalize text-white shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,1)] sm:px-6 sm:py-4"
        >
          browse articles
        </Link>
      </div>

      <div className="col-span-5 place-self-center">
        <Image
          src="/coffee-call.png"
          width={300}
          height={300}
          alt="person walking with a coffee cup while on a call"
        />
      </div>
    </section>
  );
}

export default HeroSection;
