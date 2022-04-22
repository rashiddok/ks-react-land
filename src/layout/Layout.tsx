import React from 'react';
import Header from "./header/Header";
import Footer from "./footer/Footer";

const Layout = ({children}: any) => {
    return (
        <div className="theme_light">
            <Header/>
            {children}
            <Footer/>
        </div>
    );
};

export default Layout;