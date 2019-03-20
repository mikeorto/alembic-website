const {
  createFilePath
} = require("gatsby-source-filesystem");

exports.onCreateNode = ({
  node,
  getNode,
  actions
}) => {
  const {
    createNodeField
  } = actions;
  // Only look for nodes which are of the "Mdx" type
  if (node.internal.type === "Mdx") {
    const value = createFilePath({
      node,
      getNode,
      basePath: `blog`
    });
    createNodeField({
      // Name of the field you are adding
      name: "slug",
      // Individual MDX node
      node,
      // Generated value based on filepath that has 
      // the "blog" prefix
      value: `/blog${value}`
    });
  }
};

const path = require("path");

exports.createPages = ({
  graphql,
  actions
}) => {
  // Destructure the createPage function from the actions object
  const {
    createPage
  } = actions;
  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            allMdx(filter: {fileAbsolutePath: {regex: "/blog/"} }) {
              edges {
                node {
                  id
                  fields {
                    slug
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        // Boilerlate to handle errors
        if (result.errors) {
          console.error(result.errors);
          reject(result.errors);
        }
        // Call `createPage` for each result
        result.data.allMdx.edges.forEach(({
          node
        }) => {
          createPage({
            // The slug generated from earlier
            path: node.fields.slug,
            // This component will wrap our MDX content
            component: path.resolve(`./src/components/layout/blog-page-layout.tsx`),
            // Use the values in this context in
            // our page layout component
            context: {
              id: node.id
            }
          });
        });
      })
    );
  });
};