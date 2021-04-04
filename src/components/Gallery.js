import React, { Component } from "react";
import { AlbumRecord } from "./AlbumRecord";

export class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: [],
      photos: [],
    };
  }

  async componentDidMount() {
    const albums = await fetch("https://jsonplaceholder.typicode.com/albums")
      .then((response) => response.json())
      .then((responseJson) => {
        return responseJson.slice(0, 25);
      })
      .catch((error) => {
        console.error(error);
      });

    const photos = await fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((responseJson) => {
        return responseJson.filter((photo) => photo.albumId <= 25);
      })
      .catch((error) => {
        console.error(error);
      });

    this.setState({
      photos: photos,
      albums: albums.map((album) => {
        return {
          ...album,
          albumPhotos: photos.filter((photo) => photo.albumId === album.id),
        };
      }),
    });
  }

  render() {
    const albumList = this.state.albums.map(function(album) {
      return <AlbumRecord album={album} key={album.id} />;
    });

    return (
      <table className="pure-table pure-table-horizontal album-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th># of photos</th>
            <th>button</th>
          </tr>
        </thead>

        {this.state.albums.length > 0 && <tbody>{albumList}</tbody>}
      </table>
    );
  }
}
