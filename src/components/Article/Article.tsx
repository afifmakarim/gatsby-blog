import * as React from "react";
import ArticleItem from "./ArticleItem";

export default function Article({ data }: any) {
  return (
    <>
      <article className="grid grid-cols-1 gap-4 col-span-3 md:grid-cols-3">
        {data.allStrapiArticle.edges.map((item: any, idx: number) => (
          <ArticleItem
            key={idx}
            title={item.node.title}
            thumbnail={item.node.thumbnail.localFile?.childImageSharp}
            categories={item?.node?.category?.name}
            description={item.node.seo?.metaDescription}
            href={`/article/${item.node.slug}`}
            timestamp={item.node.publishedAt}
          />
        ))}
      </article>
    </>
  );
}
