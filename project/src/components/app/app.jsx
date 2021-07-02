import React from 'react';
import PropTypes from 'prop-types';
import {Router as BrowserRouter, Switch, Route} from 'react-router-dom';
import {AppRoutes} from '../../const.js';
import Main from '../../pages/main/main.jsx';
import Login from '../../pages/login/login.jsx';
import Favorites from '../../pages/favorites/favorites.jsx';
import Offer from '../../pages/offer/offer.jsx';
import NotFound from '../../pages/not-found/not-found.jsx';
import offerCardProp from '../offer-card/offer-card-prop.js';
import {connect} from 'react-redux';
import Loading from '../loading/loading.jsx';
import PrivateRoute from '../private-route/private-route.jsx';
import browserHistory from '../../services/browser-history.js';

function App({offers, currentCity, offersStatus}) {
  if (offersStatus.isLoading) {
    return (
      <Loading/>
    );
  }

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={AppRoutes.MAIN}>
          <Main offers={offers} currentCity={currentCity}/>
        </Route>
        <Route exact path={AppRoutes.SIGN_IN}>
          <Login/>
        </Route>
        <PrivateRoute
          exact
          path={AppRoutes.FAVORITES}
          render={() => <Favorites offers={offers}/>}
        >
        </PrivateRoute>
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
  offersStatus: PropTypes.shape({
    isLoading: PropTypes.bool.isRequired,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  offersStatus: state.offersStatus,
  offers: state.offers,
  currentCity: state.city,
});

export {App};
export default connect(mapStateToProps)(App);

