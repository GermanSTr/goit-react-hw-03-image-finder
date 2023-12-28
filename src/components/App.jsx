import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { getImages } from './service/image-app';

export class App extends Component {
  state = {
    query: '',
    status: 'idle',
    page: 1,
    images: [],
  };

  onSubmit = query => {
    this.setState({ query });
  };

  async componentDidUpdate(_, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      const { hits, total } = await getImages(query, page);
      this.setState(prevState => ({ images: [...prevState.images, ...hits] }));
    }
  }

  render() {
    const { images } = this.state;
    console.log(images);
    return (
      <div>
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery images={images} />
      </div>
    );
  }
}
