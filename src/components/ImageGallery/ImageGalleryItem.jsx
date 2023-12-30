import React from 'react';
import { ImageItem } from 'styled';

export const ImageGalleryItem = ({
  webFormat,
  alt,
  id,
  handleSelectedImage,
}) => {
  return (
    <ImageItem>
      <img onClick={() => handleSelectedImage(id)} src={webFormat} alt={alt} />
    </ImageItem>
  );
};
