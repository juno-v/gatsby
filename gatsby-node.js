/***** Notes about gatsby-node.js file below  *****/

// allows user to tap into node APIs that Gatsby utilizes 
// will use this to genrate slugs and blog post pages 
// reference Gatbsy NODE APIs in docs 


/*********** Notes on onCreateNode **********/

// Called when a new node is created. 
// Plugins wishing to extend or transform nodes created by other plugins should implement this API.

// will allow attaching new data onto individual node
// will attach the slug 
// allows access to slug through application 

/* Notes on NodeJS path.basename() */

//The path.basename() methods returns the last portion of a path, similar to the Unix basename command. 
// Trailing directory separators are ignored, see path.sep.
// ex) 
    // path.basename('/foo/bar/baz/asdf/quux.html', '.html');
    // Returns: 'quux'


const path = require('path'); 

module.exports.onCreateNode = ({node, actions}) => {
    const { createNodeField } = actions; 

    if(node.internal.type === 'MarkdownRemark') {
        const slug = path.basename(node.fileAbsolutePath, '.md'); 
    // test to see node in a readible version
    // console.log(JSON.stringify(node, undefined, 4));

        createNodeField({
            node, 
            name: 'slug',
            value: slug
        })
    }
}

module.exports.createPages = async ({graphql, actions}) => {
    const{ createPage } = actions; 

    // get path to template
    const blogTemplate = path.resolve('./src/templates/blog.js'); 
    // get markdown data
    const response = await graphql(`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)
    // create new pages
    response.data.allMarkdownRemark.edges.forEach((edge) => {
        createPage({
            component: blogTemplate,
            path: `/blog/${edge.node.fields.slug}`,
            context: {
                slug: edge.node.fields.slug
            }
        })
    }) 
}