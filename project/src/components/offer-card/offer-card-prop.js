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
    latitude: PropTypes.string.isRequired,
    longitude: PropTypes.string.isRequired,
  }).isRequired,
  description: PropTypes.array.isRequired,
  isPremium: PropTypes.bool.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  bedroomsCount: PropTypes.number.isRequired,
  maxAdults: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  features: PropTypes.array.isRequired,
  id: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  previewImage: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
  host: PropTypes.shape({
    name: PropTypes.string.isRequired,
    isPro: PropTypes.bool.isRequired,
    avatarUrl: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
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
