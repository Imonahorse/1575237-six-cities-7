import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {AppRoutes} from '../../const.js';
import Main from '../../pages/main/main.jsx';
import SignIn from '../../pages/sign-in/sign-in.jsx';
import Favorites from '../../pages/favorites/favorites.jsx';
import Offer from '../../pages/offer/offer.jsx';
import NotFound from '../../pages/not-found/not-found.jsx';
import offerCardProp from '../offer-card/offer-card-prop.js';
import {connect} from 'react-redux';

function App({offers, currentCity}) {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoutes.MAIN}>
          <Main offers={offers} currentCity={currentCity}/>
        </Route>
        <Route exact path={AppRoutes.SIGN_IN}>
          <SignIn/>
        </Route>
        <Route exact path={AppRoutes.FAVORITES}>
          <Favorites offers={offers}/>
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
  offers: PropTypes.arrayOf(offerCardProp).isRequired,
  currentCity: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  currentCity: state.city,
  offers: state.offers,
});

export {App};
export default connect(mapStateToProps)(App);

