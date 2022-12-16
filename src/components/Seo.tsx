import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

// const Seo = ({ seo = {} }) => {
//   const { strapiGlobal } = useStaticQuery(graphql`
//     query {
//       strapiGlobal {
//         siteName
//         favicon {
//           localFile {
//             url
//           }
//         }
//         defaultSeo {
//           metaTitle
//           metaDescription
//         }
//       }
//     }
//   `);

//   const { siteName, defaultSeo, favicon } = strapiGlobal;

//   // Merge default and page-specific SEO values
//   const fullSeo = { ...defaultSeo, ...seo };

//   // Add site name to title
//   fullSeo.metaTitle = `${fullSeo.metaTitle} | ${siteName}`;

//   const getMetaTags = () => {
//     const tags = [];

//     if (fullSeo.metaTitle) {
//       tags.push(
//         {
//           property: "og:title",
//           content: fullSeo.metaTitle,
//         },
//         {
//           name: "twitter:title",
//           content: fullSeo.metaTitle,
//         }
//       );
//     }
//     if (fullSeo.metaDescription) {
//       tags.push(
//         {
//           name: "description",
//           content: fullSeo.metaDescription,
//         },
//         {
//           property: "og:description",
//           content: fullSeo.metaDescription,
//         },
//         {
//           name: "twitter:description",
//           content: fullSeo.metaDescription,
//         }
//       );
//     }
//     if (fullSeo.shareImage) {
//       const imageUrl = fullSeo.favicon.localFile.url;
//       tags.push(
//         {
//           name: "image",
//           content: imageUrl,
//         },
//         {
//           property: "og:image",
//           content: imageUrl,
//         },
//         {
//           name: "twitter:image",
//           content: imageUrl,
//         }
//       );
//     }
//     if (fullSeo.article) {
//       tags.push({
//         property: "og:type",
//         content: "article",
//       });
//     }
//     tags.push({ name: "twitter:card", content: "summary_large_image" });

//     return tags;
//   };

//   const metaTags = getMetaTags();
//   return (
//     <>
//       <title>{fullSeo.metaTitle}</title>
//       <link id="icon" rel="icon" href={favicon.localFile.url} />
//       {metaTags.map((item, idx) => (
//         <meta
//           name={item.name}
//           content={item.content}
//           property={item.property}
//         />
//       ))}
//     </>
//   );
// };

// export default Seo;

export const Seo = ({ title, description, pathname, children }: any) => {
  const { strapiGlobal } = useStaticQuery(graphql`
    query {
      strapiGlobal {
        siteName
        favicon {
          localFile {
            url
          }
        }
        defaultSeo {
          metaTitle
          metaDescription
        }
      }
    }
  `);

  const { siteName, defaultSeo, favicon } = strapiGlobal;

  const seo = {
    title: title || siteName,
    description: description || defaultSeo.metaDescription,
    image: favicon.localFile.url,
  };

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={process.env.GATSBY_BASE_URL} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      {/* <meta name="twitter:creator" content={seo.twitterUsername} /> */}
      <link rel="icon" type="image/jpg" href={seo.image} sizes="16x16" />

      {children}
    </>
  );
};
