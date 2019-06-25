import React from 'react'; 
import { Link } from 'gatsby'; 
import Layout from "../components/layout"



// index.js should be utilized as the home page. 
// a component 
// not necessary to create variable then export, but this is just a style to do it. 
const IndexPage = () => {
    // returning what is to be rendered, when this component renders 
    return (
        <Layout>
            <h1> Welcome to my Gatbsy website! </h1>
            <h1> This is an attempt at doing Gatbsy. </h1>
            {/* Propr way to link/route to a different /url  */}
            {/* Faster user experience */}
            <p>Need a developer? <Link to="/contact">Contact me!</Link> </p>
        </Layout>
    )
}

export default IndexPage; 