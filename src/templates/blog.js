// template for blog post pages 

import React, { Component } from 'react';
import Layout from "../components/layout";

/* notes about createPage below */
// Tell plugins to add pages. This extension point is called only after the initial sourcing and 
// transformation of nodes plus creation of the GraphQL schema are complete so you can query your data in order to create pages.

const Blog = () => {
    return (
        <Layout>
            This is the blog template 
        </Layout>
    )
}

export default Blog; 