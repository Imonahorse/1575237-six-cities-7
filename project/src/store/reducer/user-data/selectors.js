import {NameSpace} from '../root-reducer.js';

const selectAuthorizationStatus = (state) => state[NameSpace.USER].authorizationStatus;
const selectLoginStatus = (state) => state[NameSpace.USER].loginStatus;
const selectUser = (state) => state[NameSpace.USER].user;
const selectLogoutStatus = (state) => state[NameSpace.USER].logoutStatus;


export {
  selectAuthorizationStatus,
  selectLoginStatus,
  selectUser,
  selectLogoutStatus,
};
