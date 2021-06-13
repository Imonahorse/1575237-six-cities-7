import PropTypes from 'prop-types';
import offerProp from '../offer-card/offer-card-prop.js';

export default PropTypes.shape({
  city: PropTypes.arrayOf(offerProp).isRequired,
})
