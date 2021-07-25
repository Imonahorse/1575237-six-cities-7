import React from 'react';
import PropTypes from 'prop-types';

function OfferGallery({images}) {
  const pictures = images.slice(0, 6);

  return (
    <div className="property__gallery-container container" data-testid="gallery component">
      <div className="property__gallery">
        {pictures.map((picture) => (
          <div className="property__image-wrapper" key={picture} data-testid='test'>
            <img className="property__image" src={picture} alt="apartment"/>
          </div>),
        )}
      </div>
    </div>
  );
}

OfferGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string.isRequired),
};

export default OfferGallery;
