import React from 'react';
import Header from '../../header/header.jsx';
import {Link} from 'react-router-dom';

function NotFound() {
  return (
    <div className="page page--gray" style={{height: '100vh'}}>
      <Header/>
      <main className="page__main">
        <div className="error container" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <h1 className="error__title">This page does not exist</h1>
          <img className="error__image" src="./img/not-found.jpeg" alt="Page not found" width="400px" height="400px" style={{marginBottom: '30px'}}/>
          <Link className="error__link" to="/" style={{color: 'fuchsia'}}>
            Return to the main page
          </Link>
        </div>
      </main>
    </div>
  );
}

export default NotFound;
