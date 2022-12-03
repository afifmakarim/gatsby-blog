import * as React from "react";
import { Link } from "gatsby";
import { HomeIcon } from "@heroicons/react/20/solid";

export default function Breadcrumbs({ title }: any) {
  return (
    <div className="flex items-center py-4 overflow-y-auto whitespace-nowrap">
      <Link to="/" className="text-gray-600">
        <HomeIcon className="w-5 h-5" />
      </Link>

      <span className="mx-2 text-gray-500 rtl:-scale-x-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clip-rule="evenodd"
          />
        </svg>
      </span>

      <p className="text-gray-600 hover:underline text-xs">{title}</p>
    </div>
  );
}
