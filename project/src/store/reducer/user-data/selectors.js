import {NameSpace} from '../root-reducer.js';
import {createSelector} from '@reduxjs/toolkit';

const selectAuthorizationStatus = (state) => state[NameSpace.USER].authorizationStatus;
const selectLoginStatus = (state) => state[NameSpace.USER].loginStatus;
const selectUser = (state) => state[NameSpace.USER].user;
const selectLogoutStatus = (state) => state[NameSpace.USER].logoutStatus;
const selectFavorite = (state) => state[NameSpace.USER].favorite;
const selectFavoriteStatus = (state) => state[NameSpace.USER].favoriteStatus;
const selectFilteredFavorite = createSelector(selectFavorite, (offers) => (
  offers.reduce((acc, current) => {
    if (!acc[current.city.name]) {
      acc[current.city.name] = [];
    }
    acc[current.city.name].push(current);
    return acc;
  }, {})
));

export {
  selectAuthorizationStatus,
  selectLoginStatus,
  selectUser,
  selectLogoutStatus,
  selectFavorite,
  selectFavoriteStatus,
  selectFilteredFavorite
};
