import React, { Component } from "react";

export class PhotosPopup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rotateAngle: 0,
    };
  }

  updateRange(event) {
    this.setState({
      rotateAngle: event.target.value,
    });
    var img = document.getElementById("imageToRotate");
    img.style.transform = `rotate(${event.target.value}deg)`;
  }

  render() {
    return (
      <div className="popup">
        <div className="popup_inner">
          <button className="close-button" onClick={this.props.closePopup}>
            X
          </button>
          <h1>{this.props.photo.title}</h1>
          <div className="rotateRangeBarAndImage">
            <label>rotation angle:{this.state.rotateAngle}</label>
            <div>
              0
              <input
                className="rotateRangeBar"
                name="rotateAngle"
                id="range"
                type="range"
                title={this.state.rotateAngle}
                value={this.state.rotateAngle}
                min="0"
                max="360"
                step="1"
                onChange={this.updateRange.bind(this)}
              />
              360
            </div>
            <img
              className="imageRotate"
              id="imageToRotate"
              src={this.props.photo.url}
              alt="album img"
              key={this.props.photo.id}
              title={this.props.photo.title}
            />
          </div>
        </div>
      </div>
    );
  }
}
