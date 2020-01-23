/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions

    // creation of a fields->slug for each node coffee 
    if(node.internal.type === 'ProjectsJson'){
        const value = (node.title).replace(/ /g,"-").toLowerCase();
        createNodeField({
            node, 
            name: `slug`,
            value: value,
        })
    }

}

// create a detail page for each node Project
exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions
  
    const projectdetail = path.resolve(`./src/pages/projectdetail.js`)
    return graphql(
      `{
        allProjectsJson {
            edges {
              node {
                title
                image
                fields {
                  slug
                }
                description
                id
                tech_used
                long_description
                project_type
                date
                link
              }
            }
          }
        
        }`
    ).then(result => {
      if (result.errors) {
        throw result.errors
      }
  
      // Create project detail pages.
      const projects = result.data.allProjectsJson.edges
  
      projects.forEach((project, index) => {
        const previous = index === projects.length - 1 ? null : projects[index + 1].node
        const next = index === 0 ? null : projects[index - 1].node
        
        createPage({
          path: project.node.fields.slug,
          component: projectdetail,
          context: {
            slug: project.node.fields.slug,
            title: project.node.title,
            image: project.node.image,
            description: project.node.description,
            tech_used: project.node.tech_used,
            long_description: project.node.long_description,
            project_type: project.node.project_type,
            date:project.node.date,
            link:project.node.link,
            previous,
            next,
          },
        })
      })
  
      return null
    })
  }