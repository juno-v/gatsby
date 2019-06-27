// template for blog post pages from /src/pages/blog.js

import React, { Component } from 'react';
import { graphql } from 'gatsby'; 
import Layout from "../components/layout";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'; 
import Head from "../components/head"; 

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

    // variabl to render the photos(assets) from Contentful 
    const options = {
        renderNode: {
            "embedded-asset-block": (node) => {
                const alt = node.data.target.fields.title['en-US'];
                const url = node.data.target.fields.file['en-US'].url;

                return <img alt={alt} src={url} /> 
            }
        }
    }

    return (
        <Layout>
            <Head title={props.data.contentfulBlogPost.title} /> 
            {/* this is the code to utilize mark down files */}

            {/* <h1> {props.data.markdownRemark.frontmatter.title} </h1>
            <p> {props.data.markdownRemark.frontmatter.date} </p>
            {/* don't leave a space in the div elements, will cause error:
            Can only set one of `children` or `props.dangerouslySetInnerHTML`. */}
            {/* <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}></div>  */}


            {/* this is the code to utilize Contentful content */}

            <h1>{props.data.contentfulBlogPost.title} </h1>
            <p> {props.data.contentfulBlogPost.publishedDate} </p>
            {documentToReactComponents(props.data.contentfulBlogPost.body.json, options)}

        </Layout>
    )
}

export default Blog; 