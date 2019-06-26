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


module.exports.onCreateNode = ({node, actions}) => {
    const { createNodeField } = actions; 

    if(node.internal.type === 'MarkdownRemark') {
    // test to see node in a readible version
    console.log(JSON.stringify(node, undefined, 4));
    }
}