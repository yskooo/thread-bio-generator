import Image from "next/image";
import Link from "next/link";

import Github from "../components/GitHub";

export default function Header() {
  return (
    <header className="flex justify-between items-center w-full mt-5 border-b-2 pb-7 sm:px-4 px-2">
      <Link href="/" className="flex space-x-3 items-center"> {/* Add "items-center" to align vertically */}
        <h1 className="sm:text-6xl text-6xl font-bold ml-2 tracking-tight">
          @
        </h1>
      </Link>
      <Link
        className="flex max-w-fit items-center justify-center  rounded-full border border-gray-300 bg-white px-4 py-4 text-sm text-gray-600 shadow-md transition-colors hover:bg-gray-100 mb-5"
        href="https://github.com/yskooo/thread-bio-generator"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Github />
      </Link>
    </header>
  );
}
