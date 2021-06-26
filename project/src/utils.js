import {AuthorizationStatus} from './const.js';

const calcRating = (rating) => {
  if(Number.isInteger(rating)) {
    return `${rating * 2}0%`;
  }
  return  `${(rating * 2)*10}%`;
};
const isCheckedAuth = (authorizationStatus) => authorizationStatus === AuthorizationStatus.UNKNOWN;
const adaptToClient = (offer) => {
  const adaptedOffer = Object.assign(
    {},
    offer,
    {
      bedroomsCount: offer.bedrooms,
      features: offer.goods,
      previewImage: offer.preview_image,
      isFavorite: offer.is_favorite,
      isPremium: offer.is_premium,
      maxAdults: offer.max_adults,
      host: {
        ...offer.host,
        avatarUrl: offer.host.avatar_url,
        isPro: offer.host.is_pro,
      },
    },
  );

  delete adaptedOffer.goods;
  delete adaptedOffer.preview_image;
  delete adaptedOffer.is_favorite;
  delete adaptedOffer.is_premium;
  delete adaptedOffer.max_adults;
  delete adaptedOffer.bedrooms;
  delete adaptedOffer.host.is_pro;
  delete adaptedOffer.host.avatar_url;

  return adaptedOffer;
};

export {calcRating, isCheckedAuth, adaptToClient};
