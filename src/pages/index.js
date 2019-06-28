import React from 'react'; 
import Layout from "../components/layout"; 
import Head from "../components/head"; 
import indexStyles from "./index.module.scss"; 
import gatsby from "./images/gatsby.png"
import graphQL from "./images/graphQL.jpeg"
import contentful from "./images/contentful.png"; 
import netfliy from "./images/netlify.jpeg"; 
import Andrew from "./images/AndrewMead.png"


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
                
                    <ul className={indexStyles.ul} >
                        <img className={indexStyles.imgs} src={gatsby} alt="gatsby icon" /> <li> GatsbyJS</li>  <br/>
                        <img className={indexStyles.imgs} src={graphQL} alt="graphQl icon" /> <li> GraphQL </li>  <br/>
                        <img className={indexStyles.imgs} src={contentful} alt="contentful icon" /> <li> Contentful </li> <br/>
                        <img className={indexStyles.imgs} src={netfliy} alt="netfliy icon" /> <li> Netlify </li> <br/>
                    </ul>
                
                <p> I followed along Andrew Mead's  
                    <a href="https://www.youtube.com/watch?v=8t0vNu2fCCM&t=4122s"
                    target="blank"
                    >  The Great Gatsby Bootcamp [Full Tutorial] </a>  
                </p>
                <img 
                className={indexStyles.andrewImg}
                src={Andrew} 
                alt="Andrew Mead"/>
                <p> Check out my Blog section to read what I think about Gatsby and my experience with Mead's tutorial. </p>
        </Layout>
    )
}

export default IndexPage; 