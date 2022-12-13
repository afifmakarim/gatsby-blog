import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-8 bg-gradient-to-r from-primaryTheme to-primaryHover text-white">
      <div className="container px-6 py-8 mx-auto">
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <StaticImage
              className="w-16 h-16 "
              src="../images/brainlessprogrammer.jpg"
              alt="logo"
            />
          </div>
          <Link to="/" className="text-2xl font-bold text-white">
            Brainless Programmer
          </Link>
          <p className="max-w-md mx-auto mt-2 text-white">
            unleashing the power of the mindless coder through tech blogging
          </p>
        </div>

        <hr className="my-10 border-gray-200" />

        <div className="flex flex-col items-center sm:flex-row sm:justify-between">
          <p className="text-sm text-white">
            © Copyright {currentYear}. All Rights Reserved.
          </p>

          <div className="flex mt-3 -mx-2 sm:mt-0">
            <a
              href="#"
              className="mx-2 text-sm text-white transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300"
              aria-label="Reddit"
            >
              Teams
            </a>

            <a
              href="#"
              className="mx-2 text-sm text-white transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300"
              aria-label="Reddit"
            >
              Privacy
            </a>

            <a
              href="#"
              className="mx-2 text-sm text-white transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300"
              aria-label="Reddit"
            >
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
