import { GatsbyImage, getImage } from "gatsby-plugin-image";
import * as React from "react";
import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";

import Breadcrumbs from "../Breadcrumbs";

export default function Post({
  title,
  description,
  imageArray,
  content,
  timestamp,
  slug,
}: any) {
  // const contentParse = content.replaceAll(
  //   "/uploads",
  //   "http://localhost:1337/uploads"
  // );
  return (
    <div className="max-w-6xl mx-auto p-5">
      <Breadcrumbs title={title} />
      <header className="py-8">
        <h1 className="text-4xl font-bold text-neutral-700 text-center">
          {title}
        </h1>
        <p className="mt-4 text-2xl text-neutral-500 text-center">
          {description}
        </p>
        <div className="grid grid-rows-2 grid-cols-4 gap-4 max-h-40 mt-8 md:max-h-60">
          {imageArray?.map((item: any, idx: number) => (
            <GatsbyImage
              image={getImage(item.localFile?.childImageSharp!)}
              alt={title}
              className={`${
                idx === 0
                  ? "row-span-2 col-span-3 rounded-md shadow-md"
                  : "rounded-md shadow-md"
              } `}
            />
          ))}
        </div>
      </header>
      <section id="article-post">
        <div
          className="break-words"
          dangerouslySetInnerHTML={{
            __html: content,
          }}
        />
      </section>
      <div className="mt-8 flex justify-between border-t-2 py-8">
        <div className="flex items-center gap-4">
          <img
            className="shrink-0 h-16 w-16 rounded-full"
            src="https://via.placeholder.com/150"
            alt="author"
          />
          <div className="flex flex-col gap-1">
            <p className="text-sm font-medium text-slate-900">Afif Makarim</p>
            <p className="text-sm font-light text-slate-900">{timestamp}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <a
            href={`https://twitter.com/intent/tweet?text=rojoinferno.com/article/${slug}`}
            target="_blank"
            className="px-4 py-2 border bg-primaryTheme hover:bg-primaryHover rounded-md shadow-md ease-in duration-200"
          >
            <FaTwitter className="text-white" />
          </a>
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=rojoinferno.com/article/${slug}`}
            target="_blank"
            className="px-4 py-2 border bg-primaryTheme hover:bg-primaryHover rounded-md shadow-md ease-in duration-200"
          >
            <FaFacebook className="text-white" />
          </a>
        </div>
      </div>
    </div>
  );
}
