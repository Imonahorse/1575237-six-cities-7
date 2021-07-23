import {AuthorizationStatus} from "../const";

const fakeOffers = [
  {
    city: {
      name: 'Hamburg',
      location: {
        latitude: 53.550341,
        longitude: 10.000654,
        zoom: 13
      }
    },
    previewImage: 'https://7.react.pages.academy/static/hotel/6.jpg',
    images: [
      'https://7.react.pages.academy/static/hotel/12.jpg',
      'https://7.react.pages.academy/static/hotel/18.jpg',
      'https://7.react.pages.academy/static/hotel/8.jpg',
      'https://7.react.pages.academy/static/hotel/5.jpg',
      'https://7.react.pages.academy/static/hotel/13.jpg',
      'https://7.react.pages.academy/static/hotel/3.jpg',
      'https://7.react.pages.academy/static/hotel/6.jpg',
      'https://7.react.pages.academy/static/hotel/19.jpg',
      'https://7.react.pages.academy/static/hotel/16.jpg',
      'https://7.react.pages.academy/static/hotel/11.jpg',
      'https://7.react.pages.academy/static/hotel/14.jpg',
      'https://7.react.pages.academy/static/hotel/15.jpg',
      'https://7.react.pages.academy/static/hotel/4.jpg',
      'https://7.react.pages.academy/static/hotel/9.jpg'
    ],
    title: 'House in countryside',
    isFavorite: false,
    isPremium: false,
    rating: 2.2,
    type: 'room',
    bedrooms: 1,
    maxAdults: 1,
    price: 177,
    goods: [
      'Breakfast',
      'Laptop friendly workspace'
    ],
    host: {
      id: 25,
      name: 'Angelina',
      isPro: true,
      avatarUrl: 'img/avatar-angelina.jpg'
    },
    description: 'Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.',
    location: {
      latitude: 53.558341000000006,
      longitude: 10.001654,
      zoom: 16
    },
    id: 1
  },
  {
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13
      }
    },
    previewImage: 'https://7.react.pages.academy/static/hotel/2.jpg',
    images: [
      'https://7.react.pages.academy/static/hotel/6.jpg',
      'https://7.react.pages.academy/static/hotel/11.jpg',
      'https://7.react.pages.academy/static/hotel/5.jpg',
      'https://7.react.pages.academy/static/hotel/2.jpg',
      'https://7.react.pages.academy/static/hotel/14.jpg',
      'https://7.react.pages.academy/static/hotel/17.jpg',
      'https://7.react.pages.academy/static/hotel/3.jpg',
      'https://7.react.pages.academy/static/hotel/16.jpg',
      'https://7.react.pages.academy/static/hotel/4.jpg',
      'https://7.react.pages.academy/static/hotel/9.jpg',
      'https://7.react.pages.academy/static/hotel/15.jpg',
      'https://7.react.pages.academy/static/hotel/7.jpg',
      'https://7.react.pages.academy/static/hotel/10.jpg',
      'https://7.react.pages.academy/static/hotel/19.jpg'
    ],
    title: 'The house among olive ',
    isFavorite: false,
    isPremium: false,
    rating: 3.7,
    type: 'room',
    bedrooms: 1,
    maxAdults: 3,
    price: 260,
    goods: [
      'Laptop friendly workspace',
      'Washer',
      'Breakfast'
    ],
    host: {
      id: 25,
      name: 'Angelina',
      isPro: true,
      avatarUrl: 'img/avatar-angelina.jpg'
    },
    description: 'This is a place for dreamers to reset, reflect, and create. Designed with a \'slow\' pace in mind, our hope is that you enjoy every part of your stay; from making local coffee by drip in the morning, choosing the perfect record to put on as the sun sets.',
    location: {
      latitude: 52.36854,
      longitude: 4.887976,
      zoom: 16
    },
    id: 2
  },
  {
    city: {
      name: 'Cologne',
      location: {
        latitude: 50.938361,
        longitude: 6.959974,
        zoom: 13
      }
    },
    previewImage: 'https://7.react.pages.academy/static/hotel/4.jpg',
    images: [
      'https://7.react.pages.academy/static/hotel/2.jpg',
      'https://7.react.pages.academy/static/hotel/17.jpg',
      'https://7.react.pages.academy/static/hotel/12.jpg',
      'https://7.react.pages.academy/static/hotel/13.jpg',
      'https://7.react.pages.academy/static/hotel/5.jpg',
      'https://7.react.pages.academy/static/hotel/1.jpg',
      'https://7.react.pages.academy/static/hotel/6.jpg',
      'https://7.react.pages.academy/static/hotel/15.jpg',
      'https://7.react.pages.academy/static/hotel/11.jpg',
      'https://7.react.pages.academy/static/hotel/7.jpg',
      'https://7.react.pages.academy/static/hotel/4.jpg',
      'https://7.react.pages.academy/static/hotel/3.jpg',
      'https://7.react.pages.academy/static/hotel/10.jpg',
      'https://7.react.pages.academy/static/hotel/18.jpg'
    ],
    title: 'House in countryside',
    isFavorite: false,
    isPremium: true,
    rating: 4.3,
    type: 'house',
    bedrooms: 2,
    maxAdults: 3,
    price: 738,
    goods: [
      'Laptop friendly workspace',
      'Breakfast'
    ],
    host: {
      id: 25,
      name: 'Angelina',
      isPro: true,
      avatarUrl: 'img/avatar-angelina.jpg'
    },
    description: 'This is a place for dreamers to reset, reflect, and create. Designed with a \'slow\' pace in mind, our hope is that you enjoy every part of your stay; from making local coffee by drip in the morning, choosing the perfect record to put on as the sun sets.',
    location: {
      latitude: 50.916361,
      longitude: 6.944974,
      zoom: 16
    },
    id: 3
  },
  {
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13
      }
    },
    previewImage: 'https://7.react.pages.academy/static/hotel/6.jpg',
    images: [
      'https://7.react.pages.academy/static/hotel/6.jpg',
      'https://7.react.pages.academy/static/hotel/3.jpg',
      'https://7.react.pages.academy/static/hotel/7.jpg',
      'https://7.react.pages.academy/static/hotel/13.jpg',
      'https://7.react.pages.academy/static/hotel/12.jpg',
      'https://7.react.pages.academy/static/hotel/5.jpg',
      'https://7.react.pages.academy/static/hotel/15.jpg',
      'https://7.react.pages.academy/static/hotel/1.jpg',
      'https://7.react.pages.academy/static/hotel/18.jpg',
      'https://7.react.pages.academy/static/hotel/11.jpg',
      'https://7.react.pages.academy/static/hotel/8.jpg',
      'https://7.react.pages.academy/static/hotel/14.jpg',
      'https://7.react.pages.academy/static/hotel/4.jpg',
      'https://7.react.pages.academy/static/hotel/17.jpg'
    ],
    title: 'Wood and stone place',
    isFavorite: false,
    isPremium: false,
    rating: 5,
    type: 'room',
    bedrooms: 1,
    maxAdults: 2,
    price: 155,
    goods: [
      'Breakfast',
      'Laptop friendly workspace'
    ],
    host: {
      id: 25,
      name: 'Angelina',
      isPro: true,
      avatarUrl: 'img/avatar-angelina.jpg'
    },
    description: 'Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.',
    location: {
      latitude: 52.35754,
      longitude: 4.9179759999999995,
      zoom: 16
    },
    id: 4
  },
  {
    city: {
      name: 'Cologne',
      location: {
        latitude: 50.938361,
        longitude: 6.959974,
        zoom: 13
      }
    },
    previewImage: 'https://7.react.pages.academy/static/hotel/16.jpg',
    images: [
      'https://7.react.pages.academy/static/hotel/14.jpg',
      'https://7.react.pages.academy/static/hotel/17.jpg',
      'https://7.react.pages.academy/static/hotel/1.jpg',
      'https://7.react.pages.academy/static/hotel/2.jpg',
      'https://7.react.pages.academy/static/hotel/8.jpg',
      'https://7.react.pages.academy/static/hotel/6.jpg',
      'https://7.react.pages.academy/static/hotel/4.jpg',
      'https://7.react.pages.academy/static/hotel/7.jpg',
      'https://7.react.pages.academy/static/hotel/18.jpg',
      'https://7.react.pages.academy/static/hotel/12.jpg',
      'https://7.react.pages.academy/static/hotel/3.jpg',
      'https://7.react.pages.academy/static/hotel/9.jpg',
      'https://7.react.pages.academy/static/hotel/15.jpg',
      'https://7.react.pages.academy/static/hotel/20.jpg'
    ],
    title: 'Canal View Prinsengracht',
    isFavorite: false,
    isPremium: false,
    rating: 3.6,
    type: 'hotel',
    bedrooms: 2,
    maxAdults: 7,
    price: 191,
    goods: [
      'Breakfast',
      'Laptop friendly workspace',
      'Washer',
      'Air conditioning'
    ],
    host: {
      id: 25,
      name: 'Angelina',
      isPro: true,
      avatarUrl: 'img/avatar-angelina.jpg'
    },
    description: 'Peaceful studio in the most wanted area in town. Quiet house Near of everything. Completely renovated. Lovely neighbourhood, lot of trendy shops, restaurants and bars in a walking distance.',
    location: {
      latitude: 50.949361,
      longitude: 6.976974,
      zoom: 16
    },
    id: 5
  },
  {
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    previewImage: 'https://7.react.pages.academy/static/hotel/8.jpg',
    images: [
      'https://7.react.pages.academy/static/hotel/16.jpg',
      'https://7.react.pages.academy/static/hotel/6.jpg',
      'https://7.react.pages.academy/static/hotel/18.jpg',
      'https://7.react.pages.academy/static/hotel/13.jpg',
      'https://7.react.pages.academy/static/hotel/19.jpg',
      'https://7.react.pages.academy/static/hotel/15.jpg',
      'https://7.react.pages.academy/static/hotel/9.jpg',
      'https://7.react.pages.academy/static/hotel/5.jpg',
      'https://7.react.pages.academy/static/hotel/10.jpg',
      'https://7.react.pages.academy/static/hotel/8.jpg',
      'https://7.react.pages.academy/static/hotel/2.jpg',
      'https://7.react.pages.academy/static/hotel/20.jpg',
      'https://7.react.pages.academy/static/hotel/12.jpg',
      'https://7.react.pages.academy/static/hotel/14.jpg'
    ],
    title: 'The Pondhouse - A Magical Place',
    isFavorite: true,
    isPremium: false,
    rating: 2.6,
    type: 'house',
    bedrooms: 3,
    maxAdults: 6,
    price: 443,
    goods: [
      'Air conditioning',
      'Breakfast',
      'Laptop friendly workspace',
      'Baby seat',
      'Washer',
      'Towels'
    ],
    host: {
      id: 25,
      name: 'Angelina',
      isPro: true,
      avatarUrl: 'img/avatar-angelina.jpg'
    },
    description: 'I rent out a very sunny and bright apartment only 7 minutes walking distance to the metro station. The apartment has a spacious living room with a kitchen, one bedroom and a bathroom with mit bath. A terrace can be used in summer.',
    location: {
      latitude: 48.85761,
      longitude: 2.358499,
      zoom: 16
    },
    id: 6
  },
  {
    city: {
      name: 'Dusseldorf',
      location: {
        latitude: 51.225402,
        longitude: 6.776314,
        zoom: 13
      }
    },
    previewImage: 'https://7.react.pages.academy/static/hotel/11.jpg',
    images: [
      'https://7.react.pages.academy/static/hotel/15.jpg',
      'https://7.react.pages.academy/static/hotel/14.jpg',
      'https://7.react.pages.academy/static/hotel/16.jpg',
      'https://7.react.pages.academy/static/hotel/5.jpg',
      'https://7.react.pages.academy/static/hotel/8.jpg',
      'https://7.react.pages.academy/static/hotel/18.jpg',
      'https://7.react.pages.academy/static/hotel/20.jpg',
      'https://7.react.pages.academy/static/hotel/6.jpg',
      'https://7.react.pages.academy/static/hotel/17.jpg',
      'https://7.react.pages.academy/static/hotel/9.jpg',
      'https://7.react.pages.academy/static/hotel/1.jpg',
      'https://7.react.pages.academy/static/hotel/4.jpg',
      'https://7.react.pages.academy/static/hotel/10.jpg',
      'https://7.react.pages.academy/static/hotel/7.jpg'
    ],
    title: 'Nice, cozy, warm big bed apartment',
    isFavorite: false,
    isPremium: false,
    rating: 3.6,
    type: 'room',
    bedrooms: 1,
    maxAdults: 2,
    price: 125,
    goods: [
      'Air conditioning',
      'Laptop friendly workspace',
      'Breakfast',
      'Washer',
      'Towels',
      'Baby seat'
    ],
    host: {
      id: 25,
      name: 'Angelina',
      isPro: true,
      avatarUrl: 'img/avatar-angelina.jpg'
    },
    description: 'Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.',
    location: {
      latitude: 51.241402,
      longitude: 6.782314,
      zoom: 16
    },
    id: 7
  },
  {
    city: {
      name: 'Brussels',
      location: {
        latitude: 50.846557,
        longitude: 4.351697,
        zoom: 13
      }
    },
    previewImage: 'https://7.react.pages.academy/static/hotel/9.jpg',
    images: [
      'https://7.react.pages.academy/static/hotel/8.jpg',
      'https://7.react.pages.academy/static/hotel/12.jpg',
      'https://7.react.pages.academy/static/hotel/15.jpg',
      'https://7.react.pages.academy/static/hotel/11.jpg',
      'https://7.react.pages.academy/static/hotel/20.jpg',
      'https://7.react.pages.academy/static/hotel/7.jpg',
      'https://7.react.pages.academy/static/hotel/17.jpg',
      'https://7.react.pages.academy/static/hotel/9.jpg',
      'https://7.react.pages.academy/static/hotel/4.jpg',
      'https://7.react.pages.academy/static/hotel/19.jpg',
      'https://7.react.pages.academy/static/hotel/2.jpg',
      'https://7.react.pages.academy/static/hotel/18.jpg',
      'https://7.react.pages.academy/static/hotel/5.jpg',
      'https://7.react.pages.academy/static/hotel/6.jpg'
    ],
    title: 'Wood and stone place',
    isFavorite: true,
    isPremium: false,
    rating: 2.5,
    type: 'hotel',
    bedrooms: 2,
    maxAdults: 3,
    price: 135,
    goods: [
      'Towels',
      'Breakfast',
      'Baby seat',
      'Fridge',
      'Air conditioning',
      'Laptop friendly workspace',
      'Washer'
    ],
    host: {
      id: 25,
      name: 'Angelina',
      isPro: true,
      avatarUrl: 'img/avatar-angelina.jpg'
    },
    description: 'Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.',
    location: {
      latitude: 50.842557,
      longitude: 4.363696999999999,
      zoom: 16
    },
    id: 8
  },
  {
    city: {
      name: 'Hamburg',
      location: {
        latitude: 53.550341,
        longitude: 10.000654,
        zoom: 13
      }
    },
    previewImage: 'https://7.react.pages.academy/static/hotel/2.jpg',
    images: [
      'https://7.react.pages.academy/static/hotel/12.jpg',
      'https://7.react.pages.academy/static/hotel/9.jpg',
      'https://7.react.pages.academy/static/hotel/4.jpg',
      'https://7.react.pages.academy/static/hotel/3.jpg',
      'https://7.react.pages.academy/static/hotel/7.jpg',
      'https://7.react.pages.academy/static/hotel/10.jpg',
      'https://7.react.pages.academy/static/hotel/16.jpg',
      'https://7.react.pages.academy/static/hotel/1.jpg',
      'https://7.react.pages.academy/static/hotel/13.jpg',
      'https://7.react.pages.academy/static/hotel/14.jpg',
      'https://7.react.pages.academy/static/hotel/2.jpg',
      'https://7.react.pages.academy/static/hotel/17.jpg',
      'https://7.react.pages.academy/static/hotel/8.jpg',
      'https://7.react.pages.academy/static/hotel/15.jpg'
    ],
    title: 'Waterfront with extraordinary view',
    isFavorite: false,
    isPremium: true,
    rating: 2.5,
    type: 'house',
    bedrooms: 3,
    maxAdults: 5,
    price: 547,
    goods: [
      'Washer',
      'Breakfast',
      'Air conditioning',
      'Baby seat',
      'Laptop friendly workspace'
    ],
    host: {
      id: 25,
      name: 'Angelina',
      isPro: true,
      avatarUrl: 'img/avatar-angelina.jpg'
    },
    description: 'This is a place for dreamers to reset, reflect, and create. Designed with a \'slow\' pace in mind, our hope is that you enjoy every part of your stay; from making local coffee by drip in the morning, choosing the perfect record to put on as the sun sets.',
    location: {
      latitude: 53.565341000000004,
      longitude: 9.978654,
      zoom: 16
    },
    id: 9
  },
  {
    city: {
      name: 'Brussels',
      location: {
        latitude: 50.846557,
        longitude: 4.351697,
        zoom: 13
      }
    },
    previewImage: 'https://7.react.pages.academy/static/hotel/5.jpg',
    images: [
      'https://7.react.pages.academy/static/hotel/2.jpg',
      'https://7.react.pages.academy/static/hotel/12.jpg',
      'https://7.react.pages.academy/static/hotel/16.jpg',
      'https://7.react.pages.academy/static/hotel/9.jpg',
      'https://7.react.pages.academy/static/hotel/4.jpg',
      'https://7.react.pages.academy/static/hotel/11.jpg',
      'https://7.react.pages.academy/static/hotel/6.jpg',
      'https://7.react.pages.academy/static/hotel/15.jpg',
      'https://7.react.pages.academy/static/hotel/18.jpg',
      'https://7.react.pages.academy/static/hotel/8.jpg',
      'https://7.react.pages.academy/static/hotel/17.jpg',
      'https://7.react.pages.academy/static/hotel/7.jpg',
      'https://7.react.pages.academy/static/hotel/3.jpg',
      'https://7.react.pages.academy/static/hotel/19.jpg'
    ],
    title: 'Perfectly located Castro',
    isFavorite: false,
    isPremium: false,
    rating: 4.9,
    type: 'house',
    bedrooms: 4,
    maxAdults: 10,
    price: 243,
    goods: [
      'Breakfast',
      'Laptop friendly workspace'
    ],
    host: {
      id: 25,
      name: 'Angelina',
      isPro: true,
      avatarUrl: 'img/avatar-angelina.jpg'
    },
    description: 'I rent out a very sunny and bright apartment only 7 minutes walking distance to the metro station. The apartment has a spacious living room with a kitchen, one bedroom and a bathroom with mit bath. A terrace can be used in summer.',
    location: {
      latitude: 50.849557,
      longitude: 4.374696999999999,
      zoom: 16
    },
    id: 10
  },
];
const fakeComments = [
  {
    id: 1,
    user: {
      id: 17,
      isPro: false,
      name: 'Emely',
      avatarUrl: 'https://7.react.pages.academy/static/avatar/8.jpg'
    },
    rating: 4,
    comment: 'I stayed here for one night and it was an unpleasant experience.',
    date: '2021-07-10T11:09:43.784Z'
  },
  {
    id: 2,
    user: {
      id: 1,
      isPro: false,
      name: 'Alex',
      avatarUrl: 'https://7.react.pages.academy/static/avatar/6.jpg'
    },
    rating: 4,
    comment: 'Comment text.',
    date: '2021-07-23T18:45:52.327Z'
  },
  {
    id: 3,
    user: {
      id: 1,
      isPro: false,
      name: 'awsfdfd',
      avatarUrl: 'https://7.react.pages.academy/static/avatar/6.jpg'
    },
    rating: 1,
    comment: 'I stayed here for one night and it was an unpleasant experience.I stayed here for one night and it was an unpleasant experience.I stayed here for one night and it was an unpleasant experience.',
    date: '2021-07-23T18:45:59.095Z'
  }
];
const fakeStore = {
  USER: {
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    logoutStatus: { isSuccess: false, isLoading: false, isError: false},
    loginStatus: { isSuccess: false, isLoading: false, isError: false},
    favoriteStatus: { isSuccess: false, isLoading: false, isError: false},
    setFavoriteStatus: { isSuccess: false, isLoading: false, isError: false},
  },
  APP: {
    city: 'Paris',
  },
  DATA: {
    offers: fakeOffers,
    offer: fakeOffers[0],
    offerStatus: { isSuccess: false, isLoading: false, isError: false},
    comments: fakeComments,
    nearPlacesOffersStatus: { isSuccess: false, isLoading: false, isError: false},
    nearPlacesOffers: fakeOffers,
    commentsStatus: { isSuccess: false, isLoading: false, isError: false},
    offersStatus: { isSuccess: false, isLoading: false, isError: false},
  },
};

export {fakeOffers, fakeComments, fakeStore};
