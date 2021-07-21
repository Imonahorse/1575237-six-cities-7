import {createMemoryHistory} from "history";
import configureStore from "redux-mock-store";
import UserNav from "./user-nav";
import {render, screen} from "@testing-library/react";
import {Provider} from "react-redux";
import {Router} from "react-router-dom";
import {AuthorizationStatus} from "../../const";


let store = null;
let history = null;
const fakeStore = configureStore({});
let fakeState = null;
let fakeComponent = null;

describe('Component User-Nav', () => {
  beforeAll(() => {
    history = createMemoryHistory();
    fakeState = {
      USER: {
        authorizationStatus: AuthorizationStatus.NO_AUTH,
        logoutStatus: {isError: false, isLoading: false, isSuccess: false},
        user: {
          avatarUrl: 'url'
        }
      },
    }
    fakeComponent = (store, history) => (
      <Provider store={store}>
        <Router history={history}>
          <UserNav/>
        </Router>
      </Provider>
    );
  });

    it('should render User-Nav component without user AUTH', () => {
      store = fakeStore(fakeState);

      render(fakeComponent(store, history))

      expect(screen.getByText(/Sign in/i)).toBeInTheDocument();
    })

  it('should render User-Nav component with user AUTH', () => {
    fakeState.USER.authorizationStatus = AuthorizationStatus.AUTH;
    store = fakeStore(fakeState);

    render(fakeComponent(store, history))

    expect(screen.getByText(/Sign out/i)).toBeInTheDocument();
  })

  it('should render User-Nav component with logout status error', () => {
    fakeState.USER.authorizationStatus = AuthorizationStatus.AUTH;
    fakeState.USER.logoutStatus.isError = true;
    store = fakeStore(fakeState);

    render(fakeComponent(store, history))

    expect(screen.getByText(/Сервер не отвечает, попробуйте позже/i)).toBeInTheDocument();
  })

});
