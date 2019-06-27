import React from 'react'; 
import { Link } from 'gatsby'; 
import Layout from "../components/layout"
import Head from "../components/head"; 


// index.js should be utilized as the home page. 
// a component 
// not necessary to create variable then export, but this is just a style to do it. 
const IndexPage = () => {
    // returning what is to be rendered, when this component renders 
    return (
        <Layout>
            <Head title="Home" /> 
            <h1> Welcome to my Gatbsy website! </h1>
            <p> This is a website in which I have blogs about GatsbyJS. It's a part of a tutorial that I followed 
                <a href="https://www.youtube.com/watch?v=8t0vNu2fCCM&t=4122s"
                target="blank"
                >  here </a> 
            </p>
        </Layout>
    )
}

export default IndexPage; 