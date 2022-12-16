import { graphql } from "gatsby";
import Layout from "../components/Layout";
import { getImage } from "gatsby-plugin-image";
import Post from "../components/Post/Post";
import * as React from "react";
import { Seo } from "../components/Seo";

const ArticlePage = ({ data }: any) => {
  const article = data.strapiArticle;
  const cover = getImage(article?.thumbnail?.localFile?.childImageSharp);
  const imagePreviewArray = article?.image_preview;
  const content = article?.content?.data?.childMarkdownRemark.html;
  const seo = article?.seo;
  return (
    <>
      <Seo title={seo.metaTitle} description={seo.metaDescription} />
      <Layout>
        <Post
          slug={article.slug}
          title={article.title}
          description={article.seo.metaDescription}
          thumbnail={cover}
          imageArray={imagePreviewArray}
          content={content}
          timestamp={article.publishedAt}
        />
      </Layout>
    </>
  );
};

export const pageQuery = graphql`
  query ($slug: String) {
    strapiArticle(slug: { eq: $slug }) {
      title
      strapi_id
      id
      slug
      publishedAt(fromNow: true)
      seo {
        metaTitle
        metaDescription
      }
      content {
        data {
          content
          childMarkdownRemark {
            html
            rawMarkdownBody
          }
        }
      }
      thumbnail {
        url
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      image_preview {
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

export default ArticlePage;

// export const Head = () => <Seo seo={{ metaTitle: "Post" }} />;
