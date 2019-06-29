import React from 'react'; 
import Layout from "../components/layout"; 
import { Link, graphql, useStaticQuery} from 'gatsby'; 
import blogStyles from "./blog.module.scss"; 
import Head from "../components/head"; 


const BlogPage = () => {

    const data = useStaticQuery(graphql`
    query {
        allContentfulBlogPost (
          sort: {
            fields: publishedDate
            order: DESC
          }
        ) {
          edges {
            node {
              title
              slug
              publishedDate (
                formatString:"MMMM Do, YYYY"
              )
            }
          }
        }
      }
    `)

    return (
        <Layout>
          <Head title="Blog" />
            <ol className={blogStyles.posts}>
                {data.allContentfulBlogPost.edges.map(( blog, index ) => {
                    return (
                        <li className={blogStyles.post} key={index} >
                            <Link to={`/blog/${blog.node.slug}`} >
                                <h2> {blog.node.title} </h2>
                                <p> {blog.node.publishedDate} </p>
                            </Link>
                        </li>
                    )
                })}
            </ol>
        </Layout>
    )
}

export default BlogPage; 