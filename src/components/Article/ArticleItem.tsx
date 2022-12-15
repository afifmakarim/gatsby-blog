import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import * as React from "react";

export default function ArticleItem({
  title,
  thumbnail,
  categories,
  href,
  description,
  timestamp,
}: any) {
  const cover = getImage(thumbnail);

  return (
    <div className="max-w-2xl mx-auto w-full bg-white rounded-xl shadow-md overflow-hidden border max-h-80">
      <GatsbyImage
        loading="eager"
        image={cover}
        alt={title}
        className="h-40 object-cover min-w-full"
      />
      <div className="p-8">
        <Link
          to="#"
          className="tracking-wide text-xs text-white font-semibold bg-primaryTheme hover:bg-primaryHover inline-block px-2 py-1 rounded-lg"
        >
          {categories}
        </Link>
        <h1 className="block mt-2 text-lg leading-tight font-medium text-black truncate">
          {title}
        </h1>
        <p className="mt-2 text-slate-500 break-words h-28">
          {description.slice(0, 100) + (description.length > 100 ? "..." : "")}
        </p>
        <div className="">
          <div className="flex items-center justify-between">
            <Link
              to={href}
              className="uppercase tracking-wide text-xs text-white font-semibold px-2 py-1 rounded-lg bg-primaryTheme hover:bg-primaryHover"
            >
              Read More
            </Link>
            <p className="text-xs">{timestamp}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
