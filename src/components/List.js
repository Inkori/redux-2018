import React, { PureComponent } from "react";
import { arrayOf, shape, string } from "prop-types";

import ListItem from "../containers/ListItem";

export default class List extends PureComponent {
  static propTypes = {
    items: arrayOf(
      shape({
        id: string,
        title: string,
        url: string,
        tags: string
      })
    )
  };

  static defaultProps = {
    items: []
  };

  render() {
    const { items, totalVideos } = this.props;
    const list = items.map(item => <ListItem key={item.id} {...item} />);

    return (
      <div className="container-videos">
        <h2>
          Videos: {totalVideos}/{items.length}
        </h2>
        <ul className="list-wrapper">{list}</ul>
      </div>
    );
  }
}
