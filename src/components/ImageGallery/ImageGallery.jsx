import React from 'react';
import { ImageGalleryItem } from './ImageGalleryItem';

export const ImageGallery = ({ images }) => {
  return (
    <ul className="gallery">
      {images?.map(({ id, webformatURL, tags }) => (
        <ImageGalleryItem key={id} webFormat={webformatURL} alt={tags} />
      ))}
    </ul>
  );
};
