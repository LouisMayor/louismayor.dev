import React, { FunctionComponent } from 'react';

type ImageTileProps = {
  image: string;
  alt: string;
};

export const ImageTile: FunctionComponent<ImageTileProps> = ({image, alt}) => {
  return (
    <div>
      <div className="skills-row-tile">
        <img className="skill-image" src={image} alt={alt}/>
      </div>
      <div className="skill-sub-text">
        <b>{alt}</b>
      </div>
    </div>
  );
}

export default ImageTile;