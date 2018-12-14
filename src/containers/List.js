
import { connect } from 'react-redux';

import List from '../components/List';
import { filteredVideos } from '../selectors';

const mapStateToProps = state => ({
    items: filteredVideos(state),
});


export default connect(mapStateToProps)(List);
