import React from 'react';
import Footer from './footer/footer';
import MenuBar from './header/appbar';
import '../styles/main.css';


function main(props) {
    return (
        <span className="main">
            <MenuBar/>
            <div className="content">{props.children}</div>
            <Footer/>
        </span>
    );
}

export default main;