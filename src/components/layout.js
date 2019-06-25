import React from 'react';
import Footer from "./footer"; 
import Header from "./header"; 
import '../styles/index.scss';

// componentizing this to enable editing the layout of the page in one file versus having to go into every individual file and editing
const Layout = (props) => {
    return (
        <div>
            <Header /> 
            {/* utilize props passed into Layout components when referenced */}
            {props.children}
            <Footer /> 
        </div>
    );
};

export default Layout;