import React from 'react';
import PropTypes from 'prop-types';

function OfferGallery({images}) {
  return (
    <div className="property__gallery-container container">
      <div className="property__gallery">
        {images.map(({src, alt}) => (
          <div className="property__image-wrapper" key={alt}>
            <img className="property__image" src={src} alt={alt}/>
          </div>),
        )}
      </div>
    </div>
  );
}

OfferGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    })),
};

export default OfferGallery;
