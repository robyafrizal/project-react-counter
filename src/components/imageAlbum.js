import React from "react";

class ImageAlbum extends React.Component {
  render() {
    const { imageKu } = this.props;
    return (
      <div>
        <img src={imageKu} alt="User" />
      </div>
    );
  }
}

export default ImageAlbum;
