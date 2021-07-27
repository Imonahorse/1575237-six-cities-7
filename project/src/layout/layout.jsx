import React from 'react';
import {useRouteMatch} from 'react-router-dom';
import Header from '../components/header/header.jsx';
import cn from 'classnames';
import {AppRoutes} from '../const';
import Footer from '../components/footer/footer';

function Layout({children}) {
  const {path, isExact} = useRouteMatch();

  const pageClasses = cn({
    'page': true,
    'page--gray': path === AppRoutes.MAIN || path === AppRoutes.SIGN_IN,
    'page--main': path === AppRoutes.MAIN && isExact,
    'page--login': path === AppRoutes.SIGN_IN,
  });

  const mainClasses = cn({
    'page__main': true,
    'page__main--index': path === AppRoutes.MAIN && isExact,
    'page__main--favorites': path === AppRoutes.FAVORITES,
    'page__main--login': path === AppRoutes.SIGN_IN,
    'page__main--property': path === AppRoutes.OFFER,
  });

  return (
    <div className={pageClasses}>
      <Header/>
      <main className={mainClasses}>
        {children}
      </main>
      {(path === AppRoutes.FAVORITES || !isExact) && <Footer/>}
    </div>
  );
}

export default Layout;
