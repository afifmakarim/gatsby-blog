import { Link } from "gatsby";
import * as React from "react";

// Create URL path for numeric pagination
const getPageNumberPath = (currentIndex: any) => {
  if (currentIndex === 0) {
    return "/blogs";
  }
  return "/blogs/" + (currentIndex + 1);
};

export const PageButtons = ({ pageInfo }: any) => {
  if (!pageInfo) return null;
  const { currentPage, pageCount } = pageInfo;

  // Create URL path for previous and next buttons
  const prevPagePath =
    currentPage - 1 === 1 ? "/blogs" : "/blogs/" + (currentPage - 1).toString();
  const nextPagePath = "/blogs/" + (currentPage + 1).toString();

  // Check if page is first or last to disable previous and next buttons
  const prevClass = currentPage === 1 ? "cursor-not-allowed" : "cursor-pointer";
  const nextClass =
    currentPage === pageCount ? "cursor-not-allowed" : "cursor-pointer";

  return (
    <div className="flex mt-8">
      <Link
        to={currentPage === 1 ? "" : prevPagePath}
        className={`${prevClass} flex items-center justify-center px-4 py-2 mx-1 text-gray-500 capitalize rounded-md rtl:-scale-x-100 hover:bg-primaryTheme hover:text-white`}
      >
        Prev
      </Link>
      {/*  Render numeric pagination  */}
      {Array.from({ length: pageCount }, (_, i) => {
        let numClass = "pageNumber";
        if (currentPage === i + 1) {
          numClass = "currentPage";
        }
        return (
          <Link
            to={getPageNumberPath(i)}
            key={i + 1}
            className={`${
              currentPage === i + 1 ? "bg-primaryTheme text-white" : ""
            } hidden px-4 py-2 mx-1 transition-colors duration-300 transform  rounded-md sm:inline hover:bg-primaryTheme hover:text-white`}
          >
            {i + 1}
          </Link>
        );
      })}
      <Link
        to={currentPage === pageCount ? "" : nextPagePath}
        className={`${nextClass} flex items-center justify-center px-4 py-2 mx-1 text-gray-500 capitalize rounded-md rtl:-scale-x-100 hover:bg-primaryTheme hover:text-white`}
      >
        Next
      </Link>
    </div>
  );
};
