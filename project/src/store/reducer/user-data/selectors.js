import {NameSpace} from '../root-reducer.js';

const getAuthorizationStatus = (state) => state[NameSpace.USER].authorizationStatus;
const getLoginStatus = (state) => state[NameSpace.USER].loginStatus;
const getUser = (state) => state[NameSpace.USER].user;
const getLogoutStatus = (state) => state[NameSpace.USER].logoutStatus;

export {
  getAuthorizationStatus,
  getLoginStatus,
  getUser,
  getLogoutStatus
};
