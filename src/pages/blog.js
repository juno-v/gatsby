import React from 'react'; 
import Layout from "../components/layout"; 
import { graphql, useStaticQuery} from 'gatsby'; 


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
                    }
                }
            }
        }
    `)

    return (
        <Layout>
            <h1>Welcome to my blogs!</h1>
            <p> Posts will show up here later on.... </p>
        </Layout>
    )
}

export default BlogPage; 