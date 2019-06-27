// template for blog post pages from /src/pages/blog.js

import React, { Component } from 'react';
import { graphql } from 'gatsby'; 
import Layout from "../components/layout";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'; 

/* notes about createPage below */
// Tell plugins to add pages. This extension point is called only after the initial sourcing and 
// transformation of nodes plus creation of the GraphQL schema are complete so you can query your data in order to create pages.

/* code to query markdown files */

// export const query = graphql`
//     query  (
//         $slug: String!
//     ) {
//         markdownRemark (
//         fields: {
//             slug: {
//             eq: $slug
//             }
//         }
//         ) {
//         frontmatter {
//             title
//             date
//             }
//             html
//         }
//     }
// `

/* code to query Contentful */

export const query = graphql`
    query($slug: String!) {
        contentfulBlogPost(slug: {eq: $slug}) {
            title
            publishedDate(formatString: "MMMM, Do, YYY")
            body {
                json
            }
        }
    }
`

const Blog = (props) => {
    return (
        <Layout>
            {/* this is the code to utilize mark down files */}

            {/* <h1> {props.data.markdownRemark.frontmatter.title} </h1>
            <p> {props.data.markdownRemark.frontmatter.date} </p>
            {/* don't leave a space in the div elements, will cause error:
            Can only set one of `children` or `props.dangerouslySetInnerHTML`. */}
            {/* <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}></div>  */}


            {/* this is the code to utilize Contentful content */}

            <h1>{props.data.contentfulBlogPost.title} </h1>
            <p> {props.data.contentfulBlogPost.publishedDate} </p>
            {documentToReactComponents(props.data.contentfulBlogPost.body.json)}

        </Layout>
    )
}

export default Blog; 