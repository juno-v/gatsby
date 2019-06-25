import React from 'react'; 
import { Link } from 'gatsby'; 
import Layout from "../components/layout"; 


const AboutPage = () => {
    return (
        <Layout>
            <h1> About Page </h1>
            <p> About informatino will be in here... </p>
            <p> <Link to="contact"> Want to work with me? Reach out!</Link></p>
        </Layout>
    )
}

export default AboutPage;