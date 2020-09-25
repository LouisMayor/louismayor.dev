import React, { FunctionComponent } from 'react';

type ProjectTileProps = {
  empty: boolean;
  name: string;
  desc: string;
  platforms: string;
  image: string;
};

function ReleasedOn(platformString: string): string {
  if (platformString.length === 0) {
    return "";
  }
  return "Released on " + platformString;
}

export const ProjectTile: FunctionComponent<ProjectTileProps> = ({empty, name, desc, platforms, image}) => {
  if (empty)
  {
    return (<div/>)
  }
  return <div className="project-tile">
    <div className="project-image-tile">
      <img className="project-image" src={image}/>
    </div>
    <div className="project-desc-tile">
        <b>{name}</b>
        <br/>
        {desc}
        <br/>
        {ReleasedOn(platforms)}
     </div>
  </div>;
}

export default ProjectTile;
