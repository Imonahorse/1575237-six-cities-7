import React from 'react';
import {Link} from 'react-router-dom';
import {AppRoutes} from '../../const.js';
import Layout from '../../layout/layout.jsx';

function NotFound() {
  return (
    <Layout>
      <div className="error container" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <h1 className="error__title">This page does not exist</h1>
        <img className="error__image" src="./img/not-found.jpeg" alt="Page not found" width="400px" height="400px" style={{marginBottom: '30px'}}/>
        <Link className="error__link" to={AppRoutes.MAIN} style={{color: 'fuchsia'}}>
          Return to the main page
        </Link>
      </div>
    </Layout>
  );
}

export default NotFound;
