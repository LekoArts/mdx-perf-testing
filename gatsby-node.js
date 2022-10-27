const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allMdx {
        nodes {
          id
          frontmatter {
            path
          }
          parent {
            ... on File {
              absolutePath
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    throw result.errors
  }

  const posts = result.data.allMdx.nodes

  posts.forEach(({ id, frontmatter, parent }) => {
    createPage({
      path: frontmatter.path,
      component: `${path.resolve(
        `./src/templates/blog-post.js`
      )}?__contentFilePath=${parent.absolutePath}`,
      context: {
        id,
      },
    })
  })
}
