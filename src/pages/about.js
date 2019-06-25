import React from 'react'; 
import { Link } from 'gatsby'; 
import Footer from "./footer"; 
import Header from "./header"; 


const AboutPage = () => {
    return (
        <div>
            <Header /> 
            <h1> About Page </h1>
            <p> About informatino will be in here... </p>
            <p> <Link to="contact"> Want to work with me? Reach out!</Link></p>
            <Footer /> 
        </div>
    )
}

export default AboutPage;