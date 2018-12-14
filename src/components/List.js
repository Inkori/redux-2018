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
    const { items, deleteItem } = this.props;
    console.log(deleteItem);
    const list = items.map(item => (
      <ListItem key={item.id} deleteItem={deleteItem} {...item} />
    ));

    return <ul className="list-wrapper">{list}</ul>;
  }
}
