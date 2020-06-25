import React from 'react';
import PropTypes from 'prop-types';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

function renderImage(item) {

  return React.createElement(
    'div',
    { className: 'image-gallery-image' },
    item.imageSet ? React.createElement(
      'picture',
      null,
      item.imageSet.map((source, index) => React.createElement('source', {
        key: item.original,
        media: source.media,
        srcSet: source.srcSet,
        type: source.type
      })),
      React.createElement('img', {
        alt: item.originalAlt,
        src: item.original
      })
    ) : React.createElement('img', {
      src: item.original,
      alt: item.originalAlt,
      srcSet: item.srcSet,
      sizes: item.sizes,
      title: item.originalTitle
    }),
    item.description && React.createElement(
      'span',
      { className: 'image-gallery-description' },
      item.description
    )
  );
}

const Slider = ({ array, display }) => {

  return React.createElement(
    'section',
    { className: 'section' },
    display === 'slide' ? React.createElement(ImageGallery, { lazyLoad: true, showBullets: true, renderItem: renderImage, items: array }) : React.createElement('div', { className: 'void' })
  );
};

Slider.propTypes = {
  array: PropTypes.array,
  display: PropTypes.string
};


Slider.defaultProps = {
  array: null,
  display: null
};

export default Slider;