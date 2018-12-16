import React, { PureComponent } from "react";
import { func, string } from "prop-types";

export default class Search extends PureComponent {
  static propTypes = {
    searchField: string.isRequired,
    search: func.isRequired
  };

  state = {
    value: "",
    searchField: "title"
  };

  onSelect = e => {
    const { value } = e.target;
    this.setState({ searchField: value });
  };

  onChange = e => {
    const { value } = e.target;

    this.setState({ value });

    this.props.search(this.props.searchField, value);
  };

  render() {
    return (
      <div className="search">
        <input
          type="text"
          value={this.state.value}
          onChange={this.onChange}
          placeholder="Search..."
        />
      </div>
    );
  }
}
