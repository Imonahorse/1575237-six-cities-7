import React from 'react';
import {Router as BrowserRouter, Switch, Route} from 'react-router-dom';
import {AppRoutes} from '../../const.js';
import Main from '../../pages/main/main.jsx';
import Login from '../../pages/login/login.jsx';
import Favorites from '../../pages/favorites/favorites.jsx';
import Offer from '../../pages/offer/offer.jsx';
import NotFound from '../../pages/not-found/not-found.jsx';
import Loading from '../loading/loading.jsx';
import PrivateRoute from '../private-route/private-route.jsx';
import browserHistory from '../../services/browser-history.js';
import {getOffersStatus, getOffers} from '../../store/reducer/app-data/selectors.js';
import {getCity} from '../../store/reducer/app-process/selectors.js';
import {useSelector} from 'react-redux';

function App() {
  const offersStatus = useSelector(getOffersStatus);
  const offers = useSelector(getOffers);
  const currentCity = useSelector(getCity);

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
          <Offer />
        </Route>
        <Route>
          <NotFound/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

