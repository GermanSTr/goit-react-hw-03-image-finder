import React from 'react';

export const ImageGalleryItem = ({ webFormat, alt }) => {
  return (
    <li className="gallery-item">
      <img src={webFormat} alt={alt} />
    </li>
  );
};
