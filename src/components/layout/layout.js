import PropTypes from "prop-types";
import React from 'react';
import Bottom from "../bottom/bottom";
import TopBar from "../topBar";
import './layout.css';

function Layout({ children }) {
  return (
    <main className="main">
      <TopBar />
      <div className="body">
        {
          children
        }
      </div>
      <Bottom />
    </main>
  );
}

Layout.propTypes = {
  //
};

export default Layout;
