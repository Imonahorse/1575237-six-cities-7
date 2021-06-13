import PropTypes from 'prop-types';

const hostProp = PropTypes.shape({
  avatarUrl: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  isPro: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
});

const descriptionProp = PropTypes.array.isRequired;

export {hostProp, descriptionProp};
