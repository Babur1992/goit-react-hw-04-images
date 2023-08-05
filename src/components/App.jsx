import React, { useState,useEffect } from 'react';

import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import imagesApi from './Api/Api';
import style from './App/App.module.css';
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export function App() {
  const [images, setImages] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [largeImage, setLargeImage] = useState({});
  //const [largeImageId, setLargeImageId] = useState(null);

  useEffect(() => {
    if (query) {
      fetchImages();
    }
  }, [query]);

  useEffect(() => {
    window.scrollTo({
      bottom: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  });

  const onChangeQuery = query => {
    setQuery(query);
    setImages([]);
    setPageNumber(1);
    setError(null);
  };

  const fetchImages = () => {
    const options = {
      query,
      pageNumber,
    };

    setIsLoading(true);

    imagesApi
      .fetchImages(options)
      .then(newImages => {
        setImages([...images, ...newImages]);
        setPageNumber(pageNumber + 1);
      })

      .catch(error => setError(error))
      .finally(() => setIsLoading(false));
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const openBigPic = largeImage => {
    setLargeImage(largeImage);
    toggleModal();
  };

  const shouldRenderLoadMoreButton = images.length > 0 && !isLoading;
  return (
    <div className={style.App}>
      <Searchbar onSubmit={onChangeQuery}></Searchbar>
      <ImageGallery onClick={openBigPic} images={images}></ImageGallery>

      {isLoading && <Loader />}
      {shouldRenderLoadMoreButton && <Button onClick={fetchImages}></Button>}
      {showModal && (
        <Modal onClose={toggleModal}>
          <img src={largeImage.largeImageURL} alt={largeImage.tags} />
        </Modal>
      )}
    </div>
  );
}
