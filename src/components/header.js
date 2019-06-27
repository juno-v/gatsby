import React from 'react';
import { Link} from 'gatsby'; 
import gatsbyImg from "./gatsby.png"
// this is how to import a css module 
// headerStyles is an object with properties (the styles in the css module)
import headerStyles from './header.module.scss'; 

const Header = () => {

    // synatx = tagged temperate literal 
    // allows string to be processed by the function 
    // const data = useStaticQuery(graphql`
    //     query {
    //         site {
    //             siteMetadata {
    //                 title,
    //                 author
    //             }
    //         }
    //     }
    // `)

    return (
        <div className={headerStyles.header}>
            <header>
                <img src={gatsbyImg} alt="GatsbyJs" /> 
                <nav> 
                    <ul className={headerStyles.navList}>
                        <li>
                            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/"> Home </Link>
                        </li>
                        <li>
                            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/blog"> Blog </Link>
                        </li>
                        <li>
                            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/about"> About </Link>
                        </li>
                        <li>
                            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/contact"> Contact </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    );
};

export default Header;