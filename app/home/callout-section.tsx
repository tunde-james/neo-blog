import Image from "next/image";
import Newsletter from "./newsletter-subscribe";

function CalloutSection() {
  return (
    <div className="mt-12 border-b-2 border-t-2 bg-indigo-500 p-8">
      <div className="container grid grid-cols-12">
        <div className="col-span-8 flex flex-col place-self-center">
          <h2 className="mb-5 text-4xl font-semibold">stay in the know</h2>
          <p className="max-w-2xl">
            Stay up-to-date with the latest tech news and announcements by
            reading our curated articles, ranging from bite-sized pieces to
            in-depth features. Perfect for busy users who want to stay informed
            on the go and for those who prefer to dive deep into a topic.
          </p>
          <Newsletter />
        </div>
        <div className="relative col-span-4 h-[100px] w-[100px] self-center rounded-full border-2 md:h-[300px] md:w-[300px]">
          <Image
            src=""
            alt="avatar"
            width={300}
            height={300}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform"
          />
        </div>
      </div>
    </div>
  );
}

export default CalloutSection;
