import React from 'react';
import { Link, graphql, useStaticQuery} from 'gatsby'; 
// this is how to import a css module 
// headerStyles is an object with properties (the styles in the css module)
import headerStyles from './header.module.scss'; 

const Header = () => {

    // synatx = tagged temperate literal 
    // allows string to be processed by the function 
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <div className={headerStyles.header}>
            <header>
                <h1> 
                <Link className={headerStyles.title} to="/">
                        {data.site.siteMetadata.title} 
                    </Link>
                </h1>
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