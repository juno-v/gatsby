import React from 'react';
import { graphql, useStaticQuery} from 'gatsby'; 
import footerStyles from "./footer.module.scss"


const Footer = () => {

    // synatx = tagged temperate literal 
    // allows string to be processed by the function 
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
                }
            }
        }
    `)

    return (
        <footer className={footerStyles.footer}>
            <p> Created by {data.site.siteMetadata.author} © 2019 </p>
        </footer>
    );
};

export default Footer;