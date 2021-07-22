import redirect from './redirect.js';
import {redirectToRoute} from '../actions/actions.js';
import {AppRoutes} from '../../const.js';

const mockRedux = () => {
  const store = {
    getState: jest.fn(() => {
    }),
    dispatch: jest.fn(),
  };

  const next = jest.fn();
  const invoke = (action) => redirect(store)(next)(action);

  return {store, next, invoke};
};

const fakeHistory = {
  location: {pathname: ''},
  push(path) {
    this.location.pathname = path;
  },
};

jest.mock('../../services/browser-history', () => fakeHistory);

describe(('middleware: redirect'), () => {
  it('action should passes to next middleware', () => {
    const {invoke, next} = mockRedux();
    const action = redirectToRoute(AppRoutes.MAIN);
    invoke(action);
    expect(next).toHaveBeenCalledWith(action);
  });

  it('route should be added to fakeHistory', () => {
    const {invoke} = mockRedux();
    invoke(redirectToRoute(AppRoutes.SIGN_IN));
    expect(fakeHistory.location.pathname).toBe(AppRoutes.SIGN_IN);

    invoke(redirectToRoute(AppRoutes.NOT_FOUND));
    expect(fakeHistory.location.pathname).toBe(AppRoutes.NOT_FOUND);
  });

  it('should not redirect because bad action', () => {
    const url = '/test-url';
    const {invoke} = mockRedux();
    invoke({type: 'TEST_ACTION', payload: url});
    expect(fakeHistory.location.pathname).not.toBe(url);
  });
});
