import {createReducer} from '@reduxjs/toolkit';
import {changeSort, changeCity} from '../../actions/actions.js';

const initialState = {
  city: 'Paris',
  sort: 'Popular',
};

const appProcess = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })

    .addCase(changeSort, (state, action) => {
      state.sort = action.payload;
    });
});

export default appProcess;
