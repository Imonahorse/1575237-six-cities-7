const AppRoutes = {
  MAIN: '/',
  SIGN_IN: '/login',
  FAVORITES: '/favorites',
  OFFER: '/offer/:id',
  NOT_FOUND: '/404',
};

const CITIES = {
  'Paris': {
    latitude: 48.864716,
    longitude: 2.349014,
  },
  'Cologne': {
    latitude: 50.935173,
    longitude: 6.953101,
  },
  'Brussels': {
    latitude: 50.85045,
    longitude: 4.34878,
  },
  'Amsterdam': {
    latitude: 52.377956,
    longitude: 4.897070,
  },
  'Hamburg': {
    latitude: 53.551086,
    longitude: 9.993682,
  },
  'Dusseldorf': {
    latitude: 51.233334,
    longitude: 6.783333,
  },
};

const AuthorizationStatus = {
  AUTH: 'AUTH',
  NO_AUTH: 'NO_AUTH',
  UNKNOWN: 'UNKNOWN',
};

const APIRoutes = {
  OFFERS: '/hotels/:id?/:parameter?',
  LOGIN: '/login',
  LOGOUT: '/logout',
  COMMENTS: '/comments/:hotel_id',
  FAVORITE: '/favorite/:id?/:parameter?',
};

const LoadingSize ={
  LARGE: 65,
  SMALL: 10,
};

export {
  AppRoutes,
  CITIES,
  AuthorizationStatus,
  APIRoutes,
  LoadingSize
};
