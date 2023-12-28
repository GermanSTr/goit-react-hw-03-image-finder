import React, { Component } from 'react';

export default class Searchbar extends Component {
  state = {
    query: {},
  };

  handleSubmitForm = evt => {
    evt.preventDefault();
    this.props.onSubmit(this.state.query);
  };

  handleChangeFilter = evt => {
    this.setState({ query: evt.target.value });
  };

  render() {
    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.handleSubmitForm}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            onChange={this.handleChangeFilter}
            className="form"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            required
          />
        </form>
      </header>
    );
  }
}
