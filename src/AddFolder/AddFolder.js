/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';

export default class AddFolder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: { value: '', touched: false }
    };
  }

  updateName(name) {
    this.setState({ name: { value: name, touched: true } });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { name } = this.state;
    console.log('Name: ', name.value);
  }

  render() {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <h2>Add New Folder</h2>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          className="add-folder-name-input"
          name="name"
          id="name"
          onChange={(e) => this.updateName(e.target.value)}
        />
        <button type="submit" className="submit-new-folder">
          Add
        </button>
      </form>
    );
  }
}
