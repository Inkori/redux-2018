import { connect } from "react-redux";

import ListItem from "../components/ListItem";
import { editItem, deleteItem } from "../reducers/videos";

const mapDispatchToProps = dispatch => {
	console.log(deleteItem)
  return {
    // editItem: data => dispatch(editItem(data)),
		del: data => dispatch(deleteItem(data))
		
	};
	
};

export default connect(
  null,
  mapDispatchToProps
)(ListItem);
