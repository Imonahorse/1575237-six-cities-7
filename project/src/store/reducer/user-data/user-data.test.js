import userData from './user-data.js';
import {AuthorizationStatus} from '../../../const.js';
import {ActionsType as ActionType} from '../../actions/actions.js';

describe('Reducer: user-data', () => {
  it('without additional parameters should return initial state', () => {
    const state = {test: 'test'};

    expect(userData(state, {})).toEqual(state);
  });

  it('should update authorizationStatus to "AUTH"', () => {
    const state = {authorizationStatus: AuthorizationStatus.NO_AUTH};
    const requiredAuthorizationAction = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH,
    };

    expect(userData(state, requiredAuthorizationAction))
      .toEqual({authorizationStatus: AuthorizationStatus.AUTH});
  });

  it('should update authorizationStatus to "NO_AUTH"', () => {
    const state = {authorizationStatus: AuthorizationStatus.NO_AUTH};
    const requiredAuthorizationAction = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.NO_AUTH,
    };

    expect(userData(state, requiredAuthorizationAction))
      .toEqual({authorizationStatus: AuthorizationStatus.NO_AUTH});
  });

  it('should change login status to "isLoading"', () => {
    const state = {
      loginStatus: {
        isLoading: false,
        isError: false,
        isSuccess: false,
      },
    };

    const loginAction = {
      type: ActionType.GET_LOGIN_REQUEST,
    };

    expect(userData(state, loginAction))
      .toEqual({
        loginStatus: {isLoading: true, isError: false, isSuccess: false},
      });
  });

  it('should change login status to "isSuccess", change logout status and change user', () => {
    const state = {
      user: '',
      loginStatus: {
        isLoading: false,
        isError: false,
        isSuccess: false,
      },
      logoutStatus: {
        isLoading: false,
        isError: false,
        isSuccess: true,
      },
    };

    const loginAction = {
      type: ActionType.GET_LOGIN_SUCCESS,
      payload: 'user',
    };

    expect(userData(state, loginAction))
      .toEqual(
        {
          loginStatus: {isLoading: false, isError: false, isSuccess: true},
          logoutStatus: {isLoading: false, isError: false, isSuccess: false},
          user: 'user',
        });
  });

  it('should change login status to "isError"', () => {
    const state = {
      loginStatus: {
        isLoading: false,
        isError: true,
        isSuccess: false,
      },
    };

    const loginAction = {
      type: ActionType.GET_LOGIN_ERROR,
    };

    expect(userData(state, loginAction))
      .toEqual({
        loginStatus: {isLoading: false, isError: true, isSuccess: false},
      });
  });

  it('should change logout status to "isLoading"', () => {
    const state = {
      logoutStatus: {
        isLoading: false,
        isError: false,
        isSuccess: false,
      },
    };

    const logoutAction = {
      type: ActionType.LOGOUT_REQUEST,
    };

    expect(userData(state, logoutAction))
      .toEqual({
        logoutStatus: {isLoading: true, isError: false, isSuccess: false},
      });
  });

  it('should change logout status to "isError"', () => {
    const state = {
      logoutStatus: {
        isLoading: false,
        isError: false,
        isSuccess: false,
      },
    };

    const logoutAction = {
      type: ActionType.LOGOUT_ERROR,
    };

    expect(userData(state, logoutAction))
      .toEqual({
        logoutStatus: {isLoading: false, isError: true, isSuccess: false},
      });
  });

  it('should change logout status to "isSuccess"', () => {
    const state = {
      authorizationStatus: '',
      user: 'test',
      logoutStatus: {
        isLoading: false,
        isError: false,
        isSuccess: false,
      },
      loginStatus: {
        isLoading: false,
        isError: false,
        isSuccess: false,
      },
    };

    const logoutAction = {
      type: ActionType.LOGOUT_SUCCESS,
    };

    expect(userData(state, logoutAction))
      .toEqual({
        authorizationStatus: AuthorizationStatus.NO_AUTH,
        user: '',
        logoutStatus: {isLoading: false, isError: false, isSuccess: true},
        loginStatus: {isLoading: false, isError: false, isSuccess: false},
      });
  });
});
