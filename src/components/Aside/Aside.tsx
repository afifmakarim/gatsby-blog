import * as React from "react";
import AsideItem from "./AsideItem";
import { StaticQuery, graphql } from "gatsby";

export default function Aside({ active }: any) {
  const query = graphql`
    query myquery {
      allStrapiCategory {
        edges {
          node {
            slug
            strapi_id
            name
          }
        }
      }
    }
  `;

  return (
    <aside className="flex flex-col py-2 gap-4">
      <StaticQuery
        query={query}
        render={(data) => (
          <>
            <AsideItem
              title="Categories"
              list={data.allStrapiCategory.edges}
              active={active}
            />
          </>
        )}
      />
    </aside>
  );
}
