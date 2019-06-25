import React from 'react';
import { Link } from 'gatsby'; 
// this is how to import a css module 
// headerStyles is an object with properties (the styles in the css module)
import headerStyles from './header.module.scss'; 

const Header = () => {
    return (
        <div className={headerStyles.header}>
            <header>
                <h1> 
                <Link className={headerStyles.title} to="/">
                        Juno Vue 
                    </Link>
                </h1>
                <nav> 
                    <ul className={headerStyles.navList}>
                        <li>
                            <Link className={headerStyles.navItem} to="/"> Home </Link>
                        </li>
                        <li>
                            <Link className={headerStyles.navItem} to="/blog"> Blog </Link>
                        </li>
                        <li>
                            <Link className={headerStyles.navItem} to="/about"> About </Link>
                        </li>
                        <li>
                            <Link className={headerStyles.navItem} to="/contact"> Contact </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    );
};

export default Header;