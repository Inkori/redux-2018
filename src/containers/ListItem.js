import { connect } from "react-redux";

import ListItem from "../components/ListItem";
import { editVideo, deleteItem,  } from "../reducers/videos";

const mapDispatchToProps = dispatch => {
  return {
    edit: (id, newTitle, newTags) => dispatch(editVideo(id, newTitle, newTags)),
    del: data => dispatch(deleteItem(data))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(ListItem);
