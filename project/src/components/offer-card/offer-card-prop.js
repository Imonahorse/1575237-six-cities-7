import PropTypes from 'prop-types';

export default PropTypes.shape({
  city: PropTypes.shape({
    name: PropTypes.string.isRequired,
    location: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
  location: PropTypes.shape({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
  }).isRequired,
  description: PropTypes.string.isRequired,
  isPremium: PropTypes.bool.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  bedroomsCount: PropTypes.number.isRequired,
  maxAdults: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  features: PropTypes.array.isRequired,
  id: PropTypes.number.isRequired,
  images: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
  previewImage: PropTypes.string.isRequired,
  host: PropTypes.shape({
    name: PropTypes.string.isRequired,
    isPro: PropTypes.bool.isRequired,
    avatarUrl: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      comment: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      user: PropTypes.shape({
        avatarUrl: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        isPro: PropTypes.bool.isRequired,
        name: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  ).isRequired,
}).isRequired;
