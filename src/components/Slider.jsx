import React from 'react';
import PropTypes from 'prop-types';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";


const Slider = ({ images }) => {

  return React.createElement(ImageGallery, { lazyLoad: true, showBullets: true, items: images, showThumbnails: true, thumbnailPosition: "left" });
};


Slider.propTypes = {
  images: PropTypes.array
};


Slider.defaultProps = {
  images: null
};

export default Slider;
