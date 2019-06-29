import React from 'react'; 
import { Link } from 'gatsby'; 
import Layout from "../components/layout"; 
import Head from "../components/head"; 
import aboutStyles from "./about.module.scss"


const AboutPage = () => {
    return (
        <Layout>
            <Head title="About" />
                <div className={aboutStyles.helloWorldDiv} >
                    <h1> Hello World </h1>
                </div>

            <p> Thank you for stopping by the website. My name is Juno. </p>
            <p> Here's a little bit about me: </p>
            <ul className={aboutStyles.ul} >
                <li> I like to try new technologies through tutorials and research. </li>
                <li>  I typically deploy my applications onto a website where people are able to demo the application.  </li>
                <li>  I also make my 
                    <a href="https://github.com/jvue96" target="blank"> Github </a> 
                    repos public so others can view them.  
                    <p> There are comments in my repos for others to read through to give them an easier understanding of my code.  </p>
                    </li>
                
            </ul>
            <p> Want to work with me? Read my <Link to="contact"> contact page </Link> and reach out! </p>
        </Layout>
    )
}

export default AboutPage;