import {Provider} from "react-redux";
import {Router} from "react-router-dom";
import {createMemoryHistory} from "history";
import configureStore from "redux-mock-store";
import OfferPage from "./offer-page";
import {render, screen} from "@testing-library/react";
import {AuthorizationStatus} from "../../const";
import {createFakeCommentArray} from "../comment/comment-mock";
import {createFakeOffer} from "../favorites-city/favorites-city-mock";
import {array} from "prop-types";

let history = null;
let store = null;

describe('Component: offer-page', () => {
  beforeAll(() => {
    history = createMemoryHistory();
    const fakeStore = configureStore({});
    store = fakeStore({
      USER: {
        authorizationStatus: AuthorizationStatus.NO_AUTH,
      }
    });
  })

  it('should render offer-page component', () => {
    const fakeCommentsLength = 5;
    const fakeComments = createFakeCommentArray(fakeCommentsLength);
    const fakeId = '1';
    const fakeOffer = createFakeOffer(fakeCommentsLength);

    render(
      <Provider store={store}>
        <Router history={history}>
          <OfferPage offer={fakeOffer} comments={fakeComments} id={fakeId}/>
        </Router>
      </Provider>,
    )

    expect(screen.getAllByText(/Rating/i)).toBeInstanceOf(Array);
    expect(screen.getByText(/bedrooms/i)).toBeInTheDocument();
    expect(screen.getByTestId('offer-page component')).toBeTruthy();
  })
})
