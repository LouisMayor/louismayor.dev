import React, { FunctionComponent } from 'react';
import ProjectTile from '../project-tile'
import {TileGridLayout} from '../../enums';

type ProjectsSectionProps = {
  empty: boolean;
  tileLayout: TileGridLayout;
};

function TestProElement(): JSX.Element {
  return<ProjectTile
  empty={false}
  name="Some Project"
  desc="dfsjfhfhsdjfhisdifdjsifids gjfgjdfjigj gjid jgijd ijgijdhgijfigj jigfjgi jgi ojgikfjgijfd gjifj jgifdjgifjdg jhgidjifgj ghh hgjh gjfigj ojigjdifjg ijgifjgif"
  platforms="PC, Xbox One, Playstation 4 and Nintendo Switch"
  image="assets/imgs/inner_bg.png"
  />
}

function TestPerElement(): JSX.Element {
  return<ProjectTile
  empty={false}
  name="Some Project"
  desc="dfsjfhfhsdjfhisdifdjsifids gjfgjdfjigj gjid jgijd ijgijdhgijfigj jigfjgi jgi ojgikfjgijfd gjifj jgifdjgifjdg jhgidjifgj ghh hgjh gjfigj ojigjdifjg ijgifjgif"
  platforms=""
  image="assets/imgs/inner_bg.png"
  />
}

const container_pro: string = "project-pro-tile-container";
const container_per: string = "project-per-tile-container";

export const ProjectsSection: FunctionComponent<ProjectsSectionProps> = ({empty}) => {
  if (empty)
  {
    return (<div/>)
  }
  return (
    <section id="projects">
      <div className="projects">
        <div className="projects-pro"> Professional Projects </div>
        <div className={container_pro}>
          <ProjectTile 
          empty={false}
          name="Sackboy"
          desc="Sackboy: A Big Adventure is an upcoming platform game developed by Sumo Digital and published by Sony Interactive Entertainment for the PlayStation 5. Part of the LittleBigPlanet series."
          platforms="Playstation 4 and 5"
          image="assets/imgs/professional/sackboy.jpg"
          />
          <ProjectTile
          empty={false}
          name="Battletoads"
          desc="The wait is over! Rash, Zitz and Pimple are returning at last to smash-hit their way through an all-new action-packed adventure of choreographed chaos, and couch co-op may never be the same again."
          platforms="Xbox One, Windows Store and Steam"
          image="assets/imgs/professional/battletoads.jpeg"
          />
          <ProjectTile
          empty={false}
          name="Two Point Hospital"
          desc="Design stunning hospitals, cure peculiar illnesses and manage troublesome staff as you spread your budding healthcare organisation across Two Point County."
          platforms="PC, Xbox One, Playstation 4 and Nintendo Switch"
          image="assets/imgs/professional/tph.jpg"
          />
        </div>
        <div className="projects-per"> Personal Projects </div>
        <div className={container_per}>
          {TestPerElement()}
          {TestPerElement()}
          {TestPerElement()}
        </div>
      </div>
      </section>
  )
}

export default ProjectsSection;