import * as React from "react";
import { graphql, Link, PageProps } from "gatsby";
import Layout from "../components/Layout";
import { Seo } from "../components/Seo";
import Article from "../components/Article/Article";
import Aside from "../components/Aside/Aside";
export const query = graphql`
  query ArticleList {
    allStrapiArticle(sort: { fields: createdAt, order: DESC }, limit: 6) {
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

const IndexPage: React.FC<PageProps> = ({ data }) => {
  return (
    <Layout>
      <main className="max-w-7xl mx-auto p-5 grid grid-cols-1 gap-4 md:grid-cols-4">
        <Aside />
        <Article data={data} />
      </main>
      <div className="max-w-7xl mx-auto flex justify-end px-5">
        <Link
          to="/blogs"
          className="inline-block p-2 bg-primaryTheme text-sm text-white rounded-md"
        >
          Older Post
        </Link>
      </div>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <Seo />;
