import { connect } from "react-redux";

import List from "../components/List";
import { filteredVideos, totalViedos } from "../selectors";

const mapStateToProps = state => ({
  items: filteredVideos(state),
  totalVideos: totalViedos(state)
});

export default connect(mapStateToProps)(List);
