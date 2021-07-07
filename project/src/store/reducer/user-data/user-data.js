import {AuthorizationStatus} from '../../../const.js';
import {createReducer} from '@reduxjs/toolkit';
import {getLoginSuccess, getLoginError, getLoginRequest, requiredAuthorization, logoutRequest, logoutSuccess, logoutError} from '../../actions.js';

const initialState = {
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  loginStatus: {
    isSuccess: false,
    isError: false,
    isLoading: false,
  },
  user: '',
  logoutStatus: {
    isSuccess: false,
    isError: false,
    isLoading: false,
  },
};

const userData = createReducer(initialState, (builder) => {
  builder
    .addCase(requiredAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })

    .addCase(getLoginSuccess, (state, action) => {
      state.user = action.payload;
      state.loginStatus.isSuccess = true;
      state.loginStatus.isError = false;
      state.loginStatus.isLoading = false;
      state.logoutStatus.isSuccess = false;

    })

    .addCase(getLoginRequest, (state) => {
      state.loginStatus.isLoading = true;

    })

    .addCase(getLoginError, (state) => {
      state.loginStatus.isLoading = false;
      state.loginStatus.isError = true;
    })

    .addCase(logoutSuccess, (state) => {
      state.authorizationStatus = AuthorizationStatus.NO_AUTH;
      state.user = '';
      state.loginStatus.isSuccess = false;
      state.logoutStatus.isSuccess = true;
      state.logoutStatus.isError = false;
      state.logoutStatus.isLoading = false;
    })

    .addCase(logoutError, (state) => {
      state.logoutStatus.isSuccess = false;
      state.logoutStatus.isError = true;
      state.logoutStatus.isLoading = false;
    })

    .addCase(logoutRequest, (state) => {
      state.logoutStatus.isLoading = true;
    });
});

export default userData;
