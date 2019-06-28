import React from 'react'; 
import Layout from '../components/layout'; 
import Head from "../components/head"; 


const ContactPage = () => {
    return (
        <Layout>
            <Head title="Contact" />
            <p> I create youtube videos. </p>
            <p> These videos include code tutorials, tips/advice on developer learning techniques, 
                job search, personal experiences, and more! 
            </p>
            <p> There is a Slack work space for my viewers and I. </p>
            <p> Slack is a communication source where users can message each other for tools, files, code snipppets, and converse in comments and threads.</p>
            <p>  It's a great way for everyone to collaborate!</p>  
            <p> You can always find an updated link to join the Slack workspace <a href="https://www.youtube.com/" target="blank" 
            > here </a> </p>
        </Layout>

        
        
    )
}

export default ContactPage; 

