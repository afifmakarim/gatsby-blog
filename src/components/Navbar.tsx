import { Link } from "gatsby";
import { FaYoutube } from "@react-icons/all-files/fa/FaYoutube";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";

export default function Navbar() {
  return (
    <header className="text-gray-600 body-font drop-shadow bg-white">
      <div className="max-w-7xl mx-auto flex flex-wrap py-5 px-2 flex-col md:flex-row items-center">
        <Link
          to="#"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <span className="ml-3 text-xl">Brainless Programmer</span>
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link to="#" className="mr-5 hover:text-gray-900">
            First Link
          </Link>
          <Link to="#" className="mr-5 hover:text-gray-900">
            First Link
          </Link>
          <Link to="#" className="mr-5 hover:text-gray-900">
            First Link
          </Link>
          <Link to="#" className="mr-5 hover:text-gray-900">
            First Link
          </Link>
        </nav>
        <div className="inline-flex gap-2">
          <button className="items-center border-0 py-2 px-3 focus:outline-none hover:text-gray-400 rounded text-base mt-4 md:mt-0">
            <FaYoutube className="text-primaryTheme" />
          </button>
          <button className="items-center bg-gray-100 border-0 py-2 px-3 focus:outline-none rounded text-base mt-4 md:mt-0 bg-primaryTheme text-white">
            <FaGithub className="bg-primaryTheme" />
          </button>
        </div>
      </div>
    </header>
  );
}
