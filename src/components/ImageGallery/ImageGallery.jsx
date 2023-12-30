import React from 'react';
import { ImageGalleryItem } from './ImageGalleryItem';
import { ImageGalleryList } from 'styled';

export const ImageGallery = ({ images, handleSelectedImage }) => {
  return (
    <div>
      {images.length === 0 && <p>No image found...</p>}
      <ImageGalleryList>
        {images.map(({ id, webformatURL, tags }) => (
          <ImageGalleryItem
            key={id}
            id={id}
            webFormat={webformatURL}
            alt={tags}
            handleSelectedImage={handleSelectedImage}
          />
        ))}
      </ImageGalleryList>
    </div>
  );
};
