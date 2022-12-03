import * as React from "react";
import { FaRegStickyNote } from "@react-icons/all-files/fa/FaRegStickyNote";
import { Link } from "gatsby";

export default function AsideItem({ title, list, active }: any) {
  return (
    <>
      <span className="inline-flex items-center gap-4 border-b-2 pb-4 text-primaryTheme">
        <FaRegStickyNote className="text-sm" />
        <h4 className="font-bold text-lg">{title}</h4>
      </span>
      <ul className="flex flex-col gap-2 text-md">
        {list.map((item: any, idx: number) => (
          <Link
            to={`/category/${item.node.slug}`}
            key={idx}
            className={`${
              active === item.node.slug ? "bg-primaryTheme text-white" : ""
            } px-4 py-2 rounded-md hover:bg-primaryTheme cursor-pointer hover:text-white`}
          >
            {item.node.name}
          </Link>
        ))}
      </ul>
    </>
  );
}
