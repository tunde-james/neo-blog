import githubIcon from "../../public/github-icon.svg";
import twitterIcon from "../../public/twitter-icon.svg";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <div className="bg-gray-800 px-4 py-12 text-white">
      <div className="container flex justify-between">
        <div className="flex flex-row items-center">
          <div>
            <div className="mb-3 text-2xl">Neo Blog</div>
            <div className="text-sm">© 2023 Neo Blog</div>
          </div>
        </div>
        <div className="flex">
          <Link href="https://github.com" target="_blank" className="mr-3">
            <Image src={githubIcon} alt="github" width={32} height={32} />
          </Link>
          <Link href="https://twitter.com" target="_blank">
            <Image src={twitterIcon} alt="twitter" width={32} height={32} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
