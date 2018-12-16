import React, { PureComponent } from "react";
import { func, string } from "prop-types";

export default class Search extends PureComponent {
  static propTypes = {
    searchField: string.isRequired,
    search: func.isRequired
  };

  state = {
    title: "",
    tags: ""
  };

  onChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
    this.props.search(name, value);
  };

  render() {
    return (
      <div className="search">
        <h3>Search:</h3>
        <span className="search-input">
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.onChange}
            placeholder="By title..."
          />
        </span>
        <span className="search-input">
          <input
            type="text"
            name="tags"
            value={this.state.tags}
            onChange={this.onChange}
            placeholder="By tags..."
          />
        </span>
      </div>
    );
  }
}
