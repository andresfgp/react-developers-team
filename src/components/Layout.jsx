import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
// import Footer from './Footer';

const Layout = (props) => {
  const { children } = props;
  return (
    <>
      <div className='App'>
        <Header />
        {children}
        {/* <Footer /> */}
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.object,
};

export default Layout;
