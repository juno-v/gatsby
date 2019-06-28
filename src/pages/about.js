import React from 'react'; 
import { Link } from 'gatsby'; 
import Layout from "../components/layout"; 
import Head from "../components/head"; 


const AboutPage = () => {
    return (
        <Layout>
            <Head title="About" />
            <p> I like to try new technologies through tutorials and research.
                I typically deploy my applications onto a website where people are able to demo the application. 
                I also make my Github repos public so others can view them. 
                There are comments in my repos for others to read through to give them an easier understanding of my code.
            </p>
            <p> Want to work with me? Read my <Link to="contact"> contact page </Link> and reach out! </p>
        </Layout>
    )
}

export default AboutPage;