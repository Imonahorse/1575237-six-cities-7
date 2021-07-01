import PropTypes from 'prop-types';

const hostProp = PropTypes.shape({
  avatarUrl: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  isPro: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
});

const descriptionProp = PropTypes.string.isRequired;

export {hostProp, descriptionProp};
