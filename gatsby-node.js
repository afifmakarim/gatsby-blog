const path = require("path");

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  // Define a template for blog post
  const articlePost = path.resolve("./src/templates/article-post.tsx");

  const result = await graphql(
    `
      {
        allStrapiArticle {
          nodes {
            slug
          }
        }
        allStrapiCategory {
          edges {
            node {
              slug
            }
          }
        }
      }
    `
  );

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your Strapi articles`,
      result.errors
    );

    return;
  }

  const articles = result.data.allStrapiArticle.nodes;

  if (articles.length > 0) {
    articles.forEach((article) => {
      createPage({
        path: `/article/${article.slug}`,
        component: articlePost,
        context: {
          slug: article.slug,
        },
      });
    });
  }

  const posts = result.data.allStrapiArticle.nodes;
  const postsPerPage = 6;
  const numPages = Math.ceil(posts.length / postsPerPage);

  // Create the homepage
  createPage({
    path: "/blogs",
    component: path.resolve("./src/templates/article-list.tsx"),
    context: {
      limit: postsPerPage,
      skip: 0,
    },
  });

  // Create listing pages
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? "/blogs" : `/blogs/${i + 1}`,
      component: path.resolve("./src/templates/article-list.tsx"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
      },
    });
  });

  const categories = result.data.allStrapiCategory.edges;
  categories.forEach((category, index) => {
    createPage({
      path: `/category/${category.node.slug}`,
      component: require.resolve("./src/templates/category.tsx"),
      context: {
        slug: category.node.slug,
      },
    });
  });
};
