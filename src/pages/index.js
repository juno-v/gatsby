import React from 'react'; 
import { Link } from 'gatsby'; 
import Layout from "../components/layout"; 
import Head from "../components/head"; 
import Andrew from "./images/AndrewMead.jpg"
import indexStyles from "./index.module.scss"; 

// index.js should be utilized as the home page. 
// a component 
// not necessary to create variable then export, but this is just a style to do it. 
const IndexPage = () => {
    // returning what is to be rendered, when this component renders 
    return (
        <Layout>
            <Head title="Home" /> 
            <h1> Welcome to the Gatsby Blogs! </h1>
            <h2> This is a website that I've created using: </h2>
                <p>
                    <ul>
                        <li> GatsbyJS </li>
                        <li> GraphQL </li>
                        <li> Contentful </li>
                        <li> Netlify </li>
                    </ul>
                </p>
                <p> I followed along Andrew Mead's  
                    <a href="https://www.youtube.com/watch?v=8t0vNu2fCCM&t=4122s"
                    target="blank"
                    >  The Great Gatsby Bootcamp [Full Tutorial] </a>  
                </p>
                <img 
                className={indexStyles.andrewImg}
                src={Andrew} 
                atl="Andrew Mead"/>
                <p> Check out my Blog section to read what I think about Gatsby and my experience with Mead's tutorial. </p>
        </Layout>
    )
}

export default IndexPage; 