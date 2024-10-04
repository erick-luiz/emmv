import React from 'react';
import MyFooter from '../component/Footer/Footer.js';
import './Page.css';

const Page = ({ children }) => {
  return (
    <div className="page-container">
      <main className="page-content">
        <div className="App">
            {children}
        </div>
      </main>
      <MyFooter />
    </div>
  );
};

export default Page;
