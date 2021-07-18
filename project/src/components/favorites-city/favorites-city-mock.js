const createFakeOffer = (index) => ({
  city: {
    name: 'Paris',
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
  isFavorite: true,
  title: 'title',
  rating: 4,
  type: 'type',
  bedrooms: index,
  maxAdults: index,
  price: 200,
  goods: ['one', 'two', 'three'],
  id: index,
  images: ['one', 'two','three'],
  previewImage: 'image',
  host: {
    name: 'name',
    isPro: true,
    avatarUrl: 'avatarUrl',
    id: index,
  },
});

const createFakeOffersArray = (count) => new Array(count).fill('').map((_, i)=> createFakeOffer(i));


export {createFakeOffer, createFakeOffersArray};
