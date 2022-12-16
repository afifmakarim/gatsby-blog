import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Aside from "../components/Aside/Aside";
import ArticleItem from "../components/Article/ArticleItem";
import { Seo } from "../components/Seo";
import { getImage } from "gatsby-plugin-image";

export const query = graphql`
  query Category($slug: String!) {
    allStrapiCategory(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          strapi_id
          slug
          articles {
            title
            slug
            seo {
              metaDescription
            }
            publishedAt(fromNow: true)
            category {
              name
            }
            thumbnail {
              url
              localFile {
                childImageSharp {
                  gatsbyImageData(formats: WEBP, width: 640)
                }
              }
            }
          }
        }
      }
    }
  }
`;

const Category: React.FC<any> = ({ data }) => {
  const category = data?.allStrapiCategory?.edges[0]?.node?.slug;

  return (
    <Layout>
      <Seo title="Category Page" />

      <main className="max-w-7xl mx-auto p-5 grid grid-cols-1 gap-4 md:grid-cols-4">
        <Aside active={category} />
        <article className="grid grid-cols-1 gap-4 col-span-3 md:grid-cols-3">
          {data?.allStrapiCategory.edges[0].node.articles.map(
            (item: any, idx: number) => (
              <ArticleItem
                key={idx}
                title={item.title}
                thumbnail={getImage(item.thumbnail.localFile.childImageSharp)}
                categories={item?.category?.name}
                description={item.seo?.metaDescription}
                href={`/article/${item.slug}`}
                timestamp={item.publishedAt}
              />
            )
          )}
        </article>
      </main>
    </Layout>
  );
};

export default Category;
