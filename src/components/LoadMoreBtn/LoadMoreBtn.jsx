import React, { Component } from 'react';
import { LoadMoreButton } from 'styled';

export class LoadMoreBtn extends Component {
  loadMoreClick = () => {
    this.props.handleLoadMore();
  };

  render() {
    return (
      <LoadMoreButton onClick={this.loadMoreClick} type="button">
        Load more
      </LoadMoreButton>
    );
  }
}
