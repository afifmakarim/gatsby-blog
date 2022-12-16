import { graphql } from "gatsby";
import ArticleItem from "../components/Article/ArticleItem";
import Aside from "../components/Aside/Aside";
import Layout from "../components/Layout";
import { PageButtons } from "../components/PageButtons";
import { Seo } from "../components/Seo";
import * as React from "react";
import { getImage } from "gatsby-plugin-image";

export const query = graphql`
  query ArticleList($limit: Int!, $skip: Int!) {
    allStrapiArticle(
      sort: { fields: publishedAt, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          slug
          title
          publishedAt(fromNow: true)
          category {
            name
          }
          seo {
            metaDescription
            metaTitle
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
      pageInfo {
        currentPage
        pageCount
      }
    }
  }
`;

const ArticleList = ({ data }: any) => {
  if (!data) return null;
  return (
    <Layout>
      <main className="max-w-7xl mx-auto p-5 grid grid-cols-1 gap-4 md:grid-cols-4">
        <Aside />
        <article className="col-span-3">
          <div className="grid grid-cols-1 gap-4 col-span-3 md:grid-cols-3">
            {data.allStrapiArticle.edges.map((item: any, idx: number) => (
              <ArticleItem
                key={idx}
                title={item.node.title}
                thumbnail={getImage(
                  item.node.thumbnail.localFile.childImageSharp
                )}
                categories={item?.node?.category?.name}
                description={item.node.seo?.metaDescription}
                href={`/article/${item.node.slug}`}
                timestamp={item.node.publishedAt}
              />
            ))}
          </div>
          <div className="flex justify-center">
            <PageButtons pageInfo={data.allStrapiArticle.pageInfo} />
          </div>
        </article>
      </main>
    </Layout>
  );
};

export default ArticleList;

export const Head = () => <Seo title="Blog Post" />;
