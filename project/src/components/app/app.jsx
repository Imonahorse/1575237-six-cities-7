import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {AppRoutes} from '../../const.js';
import Main from '../../pages/main/main.jsx';
import SignIn from '../../pages/sign-in/sign-in.jsx';
import Favorites from '../../pages/favorites/favorites.jsx';
import Offer from '../../pages/offer/offer.jsx';
import NotFound from '../../pages/not-found/not-found.jsx';
import mainProp from '../../pages/main/main-prop.js';

function App({offers}) {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoutes.MAIN}>
          <Main offers={offers}/>
        </Route>
        <Route exact path={AppRoutes.SIGN_IN}>
          <SignIn/>
        </Route>
        <Route exact path={AppRoutes.FAVORITES}>
          <Favorites/>
        </Route>
        <Route exact path={AppRoutes.OFFER}>
          <Offer offers={offers}/>
        </Route>
        <Route>
          <NotFound/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  offers: PropTypes.arrayOf(
    mainProp,
  ).isRequired,
};


export default App;
