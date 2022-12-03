import { graphql } from "gatsby";
import ArticleItem from "../components/Article/ArticleItem";
import Aside from "../components/Aside/Aside";
import Layout from "../components/Layout";
import { PageButtons } from "../components/PageButtons";
import Seo from "../components/Seo";
import * as React from "react";

export const query = graphql`
  query ArticleList($limit: Int!, $skip: Int!) {
    allStrapiArticle(
      sort: { fields: createdAt, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          slug
          title
          category {
            name
          }
          seo {
            metaDescription
            metaTitle
          }
          thumbnail {
            url
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
                thumbnail={`http://localhost:1337${item.node.thumbnail.url}`}
                categories={item?.node?.category?.name}
                description={item.node.seo?.metaDescription}
                href={`/article/${item.node.slug}`}
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

export const Head = () => <Seo seo={{ metaTitle: "Blog Post" }} />;
