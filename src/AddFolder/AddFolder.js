/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/static-property-placement */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import ApiContext from '../ApiContext';
import config from '../config';

export default class AddFolder extends Component {

  static contextType = ApiContext;

  constructor(props) {
    super(props);
    this.state = {
      name: { value: '', touched: false }
    };
  }

  updateName(name) {
    this.setState({ name: { value: name, touched: true } });
  }

  validateName() {
    const { value, touched } = this.state.name;
    const folders = this.context.folders;
    return typeof value === 'string' && 
            value.length > 0 &&
            touched &&
            !folders.find(folder => folder.name && folder.name.toLowerCase() === value.toLowerCase());
  }

  handleSubmit(event) {
    event.preventDefault();
    const options = {
      method: 'POST', headers: { 'Content-Type': 'application/json' }, name: this.state.name.value
    }
    fetch(`${config.API_ENDPOINT}/folders`, options)
    .then(res => res.json())
    .then(
      res => console.log(res)
    )
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
        <button
          disabled={!this.validateName()}
          type="submit"
          className="submit-new-folder"
        >
          Add
        </button>
      </form>
    );
  }
}
