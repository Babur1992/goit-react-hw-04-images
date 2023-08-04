import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import style from './ImageGallery.module.css';

const ImageGallery = ({ images, onClick }) => {
  return (
    <ul className={style.ImageGallery}>
      {images.map(image => (
        <ImageGalleryItem
          onClick={onClick}
          key={image.id}
          image={image}
        ></ImageGalleryItem>
      ))}
    </ul>
  );
};

export default ImageGallery;
