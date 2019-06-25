import React from 'react';

const Layout = (props) => {
    return (
        <div>
            {/* utilize props passed into Layout components when referenced */}
            {props.children}
        </div>
    );
};

export default Layout;