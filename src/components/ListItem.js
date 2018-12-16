import React, { PureComponent } from "react";
import { string, func } from "prop-types";

const getVideoId = url => url.split("/")[3];
const createVideoUrl = id => `https://www.youtube.com/embed/${id}`;

const VIEW_MODE = "VIEW_MODE";
const EDIT_MODE = "EDIT_MODE";

export default class ListItem extends PureComponent {
  static propTypes = {
    id: string.isRequired,
    title: string.isRequired,
    url: string.isRequired,
    tags: string.isRequired,
    edit: func.isRequired
  };

  state = {
    mode: VIEW_MODE,
    title: this.props.title,
    tags: this.props.tags
  };

  switchMode = () => {
    const updatedMode = this.state.mode === VIEW_MODE ? EDIT_MODE : VIEW_MODE;
    this.setState({ mode: updatedMode });
  };

  onChangeTitle = e => {
    this.setState({ title: e.target.value });
  };

  onChangeTag = e => {
    this.setState({ tags: e.target.value });
  };

  saveChanges = () => {
    this.switchMode();
    this.props.edit(this.props.id, this.state.title, this.state.tags);
  };

  delete = () => {
    this.props.del(this.props.id);
  };

  render() {
    const { url } = this.props;
    const { mode, title, tags } = this.state;

    const videoId = getVideoId(url);
    const videoUrl = createVideoUrl(videoId);

    const tagItem = tags.split(", ").map(tag => (
      <li className="list-tag" key={tag}>
        {tag}
      </li>
    ));

    return (
      <li className="list-item">
        <div>
          <span className="delete" onClick={this.delete}>
            X
          </span>

          {mode === VIEW_MODE ? (
            <div className="title">
              {title}
              <span className="edit" onClick={this.switchMode}>
                &#9998;
              </span>
            </div>
          ) : (
            <div className="changeValue">
              <input
                type="text"
                name="edit"
                onChange={this.onChangeTitle}
                value={title}
              />
              <span className="save" onClick={this.saveChanges}>
                &#10004;
              </span>
            </div>
          )}
        </div>

        <iframe src={videoUrl} title={title} />
        <div className="tags">
          {mode === VIEW_MODE ? (
            <ul className="list">{tagItem}</ul>
          ) : (
            <div className="changeValue">
              <input type="text" value={tags} onChange={this.onChangeTag} />

              <span className="save" onClick={this.saveChanges}>
                &#10004;
              </span>
            </div>
          )}
        </div>
      </li>
    );
  }
}
