import React from 'react';
import PropTypes from 'prop-types';
import style from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ image, onClick }) => {
  return (
    <li
      className={style.ImageGalleryItem}
      onClick={() => {
        onClick(image);
      }}
    >
      <img
        src={image.webformatURL}
        alt={image.tags}
        id={image.id}
        className={style.ImageGalleryItem_image}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  smallImage: PropTypes.shape({
    webformatURL: PropTypes.string,
  }),
};

export default ImageGalleryItem;
