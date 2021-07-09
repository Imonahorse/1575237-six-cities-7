import browserHistory from '../../services/browser-history';
import {ActionsType} from '../actions/actions.js';

const redirect = (_store) => (next) => (action) => {
  if (action.type === ActionsType.REDIRECT_TO_ROUTE) {
    browserHistory.push(action.payload);
  }

  return next(action);
};

export default redirect;
