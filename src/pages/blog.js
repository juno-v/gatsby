import React from 'react'; 
import Layout from "../components/layout"; 
import { Link, graphql, useStaticQuery} from 'gatsby'; 
import blogStyles from "./blog.module.scss"; 

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
            <h1>Welcome to my blogs!</h1>

            <ol className={blogStyles.posts}>
                {data.allMarkdownRemark.edges.map(( blog, index ) => {
                    return (
                        <li className={blogStyles.post} key={index} >
                            <Link to={`/blog/${blog.node.fields.slug}`} >
                                <h2> {blog.node.frontmatter.title} </h2>
                                <p> {blog.node.frontmatter.date} </p>
                            </Link>
                        </li>
                    )
                })}
            </ol>
        </Layout>
    )
}

export default BlogPage; 