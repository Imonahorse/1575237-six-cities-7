import React from 'react';
import {MemoryRouter} from 'react-router-dom';
import Map from './map.jsx';
import {render} from '@testing-library/react';
import {createFakeOffersArray} from '../../mocks/favorites-city-mock.js';

const offers = createFakeOffersArray(5);
const {id} = offers[0];

describe('Component: Map', () => {
  it('should render map correctly', () => {
    const {asFragment} = render(
      <MemoryRouter>
        <Map
          cityState={offers[0].city.name}
          cityOffers={offers}
          activeCardId={id}
        />
      </MemoryRouter>
    )

    expect(asFragment()).toMatchSnapshot();
  })
})
