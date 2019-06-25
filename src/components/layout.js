import React from 'react';
import Footer from "./footer"; 
import Header from "./header"; 
import '../styles/index.scss';
// setting up css module 
import layoutStlyes from "./layout.module.scss"; 


// componentizing this to enable editing the layout of the page in one file versus having to go into every individual file and editing
const Layout = (props) => {
    return (
        <div className={layoutStlyes.container}>
            <div className={layoutStlyes.content}>
                <Header /> 
                {props.children}
            </div>
            {/* utilize props passed into Layout components when referenced */}
            <Footer /> 
        </div>
    );
};

export default Layout;