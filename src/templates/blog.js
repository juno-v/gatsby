// template for blog post pages from /src/pages/blog.js

import React, { Component } from 'react';
import { graphql } from 'gatsby'; 
import Layout from "../components/layout";

/* notes about createPage below */
// Tell plugins to add pages. This extension point is called only after the initial sourcing and 
// transformation of nodes plus creation of the GraphQL schema are complete so you can query your data in order to create pages.


export const query = graphql`
    query  (
        $slug: String!
    ) {
        markdownRemark (
        fields: {
            slug: {
            eq: $slug
            }
        }
        ) {
        frontmatter {
            title
            date
            }
            html
        }
    }
`

const Blog = (props) => {
    return (
        <Layout>
            <h1> {props.data.markdownRemark.frontmatter.title} </h1>
        </Layout>
    )
}

export default Blog; 