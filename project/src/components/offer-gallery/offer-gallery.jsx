import React from 'react';
import PropTypes from 'prop-types';

function OfferGallery({images}) {
  return (
    <div className="property__gallery-container container" data-testid="gallery component">
      <div className="property__gallery">
        {images.map((image) => (
          <div className="property__image-wrapper" key={image} data-testid='test'>
            <img className="property__image" src={image} alt="apartment"/>
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
