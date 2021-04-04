import React, { Component } from "react";
import { ThumbnailsArea } from "./ThumbnailsArea";

export class AlbumRecord extends Component {
  constructor() {
    super();
    this.state = {
      collapse: true,
    };

    this.toggleCollapse = this.toggleCollapse.bind(this);
  }

  toggleCollapse() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  render() {
    const { collapse } = this.state;

    return [
      <tr>
        <td>{this.props.album.id}</td>
        <td>{this.props.album.title}</td>
        <td>{this.props.album.albumPhotos.length}</td>
        <td>
          <button onClick={this.toggleCollapse}>
            {collapse ? "display" : "hide"} photos
          </button>
        </td>
      </tr>,
      <tr>
        <td colSpan={4}>
          <div className="wrap">
            {collapse ? null : (
              <ThumbnailsArea
                photos={this.props.album.albumPhotos}
                closePopup={this.toggleCollapse.bind(this)}
              />
            )}
          </div>
        </td>
      </tr>,
    ];
  }
}
