import React, { PureComponent } from "react";
import { string } from "prop-types";

const getVideoId = url => url.split("/")[3];
const createVideoUrl = id => `https://www.youtube.com/embed/${id}`;

const VIEW_MODE = "VIEW_MODE";
const EDIT_MODE = "EDIT_MODE";

export default class ListItem extends PureComponent {
  static propTypes = {
    id: string.isRequired,
    title: string.isRequired,
    url: string.isRequired,
    tags: string.isRequired
  };

  state = {
    mode: VIEW_MODE,
    isEditing: false
  };

  switchMode = () => {
    const updatedMode = this.state.mode === VIEW_MODE ? EDIT_MODE : VIEW_MODE;

    this.setState({ mode: updatedMode });
  };
  onChange = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };
  edit = () => {
    this.setState({ mode: VIEW_MODE });
  };
  save = () => {
    this.setState({ mode: EDIT_MODE }, () => {
      this.props.editItem(this.props.id, this.state.value);
    });
  };
  delete = () => {
    this.props.del(this.props.id);
    console.log(this.state.id);
  };

  render() {
    const { url, title, deleteItem, id } = this.props;
    const { mode } = this.state;

    const videoId = getVideoId(url);
    const videoUrl = createVideoUrl(videoId);

    return (
      <li className="list-item">
        {mode}
        {mode ? (
          <div>
            <div className="title">{title}</div>
            <span onClick={this.switchMode}>
              <span onClick={this.edit}>&#9998;</span>
            </span>
            <button onClick={this.delete}>x</button>
            {console.log(this.delet)}
          </div>
        ) : (
          <div>
            <input
              type="text"
              name="edit"
              onChange={this.onChange}
              value={title}
            />
            <span onClick={this.switchMode}>
              <span onClick="save">&#10004;</span>
            </span>
          </div>
        )}

        <iframe src={videoUrl} title={title} />
      </li>
    );
  }
}

// (
// 	<li key={id} className="list-item">
// 		{!isEditing ? (
// 			<div className="title">
// 				{title}
// 				<button onClick={this.edit}>{edit}</button>
// 			</div>
// 		) : (
// 			<div>
// 				<input type="text" onChange={this.onChangeValue} value={title} />
// 				<button onClick={this.save}>{edit}</button>
// 			</div>
// 		)}
// 		<iframe src={createVideoUrl(videoId)} title={title} />
// 	</li>
// );
// });
