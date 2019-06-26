import React from 'react'; 
import Layout from "../components/layout"; 
import { Link, graphql, useStaticQuery} from 'gatsby'; 


const BlogPage = () => {

    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                edges {
                    node {
                    frontmatter {
                            title
                            date
                        }
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)

    return (
        <Layout>
            <h1>Welcome to my blogs!</h1>

            <ol>
                {data.allMarkdownRemark.edges.map(( blog, index ) => {
                    return (
                        <li key={index} >
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