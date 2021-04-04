import React, { Component } from "react";
import { PhotosPopup } from "./PhotosPopup";

export class ThumbnailsArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      thumbnails: this.props.photos,
      openPopup: false,
      clickedPhoto: null,
    };
  }

  removeThumbnail(photo) {
    this.setState({
      thumbnails: this.state.thumbnails.filter((ph) => ph.id !== photo.id),
    });
  }

  openOrClosePhotoPopup(photo) {
    this.setState({
      ...this.state,
      openPopup: !this.state.openPopup,
      clickedPhoto: photo,
    });
  }

  render() {
    const photos = this.state.thumbnails.slice(0, 12).map((photo) => {
      return (
        <div key={photo.id}>
          <button
            className="thumbnail-close-button"
            onClick={() => {
              this.removeThumbnail(photo);
            }}
          >
            X
          </button>
          <img
            className="thumbnail-img"
            src={photo.thumbnailUrl}
            alt="album thumbnail"
            key={photo.id}
            title={photo.title}
            onClick={() => {
              this.openOrClosePhotoPopup(photo);
            }}
          />
        </div>
      );
    });

    return (
      <div className="content">
        <div className="">
          <h1>
            {photos.length}/{this.state.thumbnails.length}
          </h1>
          <div>
            {this.props.photos.length > 0 && (
              <div className="photos-popup">{photos}</div>
            )}
          </div>
          <div className="wrap2">
            {this.state.openPopup ? (
              <PhotosPopup
                photo={this.state.clickedPhoto}
                closePopup={this.openOrClosePhotoPopup.bind(this)}
              />
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}
