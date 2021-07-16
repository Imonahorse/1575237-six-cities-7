const fakeOffer = () => ({
  city: {
    name: 'Moscow',
    location: {
      latitude: 1,
      longitude: 2,
    },
  },
  location: {
    latitude: 1,
    longitude: 2,
  },
  description: 'i hate tests',
  isPremium: false,
  isFavorite: false,
  title: 'test sucks',
  rating: 3,
  type: 'hotel',
  bedrooms: 3,
  maxAdults: 2,
  price: 228,
  goods: ['test', 'test'],
  id: 1,
  images: ['1', '2', '3', '4'],
  previewImage: 'url',
  host: {
    name: 'Alex',
    isPro: false,
    avatarUrl: 'url',
    id: 2,
  },
});

const fakeOffersArray = (count) => new Array(count).fill('').map(() => fakeOffer());

export {fakeOffer, fakeOffersArray};
