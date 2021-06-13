import {nanoid} from 'nanoid';
import {CITIES} from '../const.js';

const AVATAR_URL = 'https://i.pravatar.cc/128';
const APARTMENT_URL = 'http://lorempixel.com/260/200/city/';
const OFFERS_COUNT = 10;
const TITLES = [
  'St. Francis Psychiatric Hospital',
  'Sell garage',
  'Freaks ahead, factories await you',
  'Iam blue dabudidabudai',
];
const TYPES = [
  'Apartment',
  'Kennel',
  'Garbage tent',
  'Under the bridge',
  'Place in the cemetery',
];
const FEATURES = [
  'Wi-Fi',
  'Washing machine',
  'Towels',
  'Heating',
  'Coffee machine',
  'Baby seat',
  'Kitchen',
  'Dishwasher',
  'Cabe TV',
  'Fridge',
];
const NAMES = [
  'Ashot',
  'Jamshut',
  'Gogi',
  'Maga',
  'Rocky',
  'Bulvinkl',
];
const DESCRIPTIONS = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et doloremagna aliqua.',
  'Platea dictumst vestibulum rhoncus est pellentesque elit. Sit amet tellus cras adipiscing enim eu turpis egestas.',
  'Ornare arcu dui vivamus arcu felis bibendum ut tristique et. Magna sit amet purus gravida quis.',
  'Lorem ipsum dolor sit amet consectetur',
  'Nibh ipsum consequat nisl vel pretium lectus quam id leo.',
  'Tellus molestie nunc non blandit massa enim nec dui nunc.',
];

const getRandomInteger = (lower, upper) => lower + Math.floor(Math.random() * (upper - lower + 1));
const getRandomArrayElement = (array) => array[getRandomInteger(0, array.length - 1)];
const getRandomArray = (array) => array.filter(() => Math.random() > 0.3);
const getRandomImage = () => ({
  src: APARTMENT_URL + getRandomInteger(1, 10),
  alt: getRandomArrayElement(FEATURES),
});
const getImageArray = () => new Array(getRandomInteger(1, 6)).fill('').map(() => getRandomImage());

const createOffer = () => ({
  city: getRandomArrayElement(CITIES),
  description: getRandomArray(DESCRIPTIONS),
  isPremium: Math.random() > 0.3,
  isFavorite: Math.random() > 0.8,
  title: getRandomArrayElement(TITLES),
  rating: getRandomInteger(1, 5),
  type: getRandomArrayElement(TYPES),
  bedroomsCount: getRandomInteger(0, 5),
  maxAdults: getRandomInteger(0, 10),
  price: getRandomInteger(100, 1000),
  features: getRandomArray(FEATURES),
  host: {
    name: getRandomArrayElement(NAMES),
    isPro: Math.random() > 0.3,
    avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
    id: nanoid(),
  },
  id: nanoid(),
  images: getImageArray(),
  previewImage: getRandomImage(),
});

const createOffers = () => new Array(OFFERS_COUNT).fill('').map(() => createOffer());

export {createOffers};
