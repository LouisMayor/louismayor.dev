import React, { FunctionComponent } from 'react';
import ImageTile from '../image-tile';

type SkillSectionProps = {
  empty: boolean;
};

export const SkillSection: FunctionComponent<SkillSectionProps> = ({empty}) => {
  if (empty)
  {
    return (<div/>)
  }
  return (
  <section id="skills">
    <div className="skills">
      <div className="skills-title"> Skills </div>
      <div className="skills-row-container">
        <div className="skills-row-title">
          <b>Languages</b>
        </div>
        <div className="skills-row-grid">
          <ImageTile alt="C++"        image="assets/imgs/logos/iso cplusplus.png"/>
          <ImageTile alt="C#"         image="assets/imgs/logos/csharp.png"/>
          <ImageTile alt="Typescript" image="assets/imgs/logos/typescript.png"/>
          <ImageTile alt="HLSL"       image="assets/imgs/logos/HLSL-Logo.png"/>
          <ImageTile alt="GLSL"       image="assets/imgs/logos/GLSL-Logo.png"/>
        </div>
      </div>
      <div className="skills-row-container">
        <div className="skills-row-title">
          <b>Engines/APIs</b>
        </div>
        <div className="skills-row-grid">
          <ImageTile alt="Unreal Engine 4"  image="assets/imgs/logos/unrealengine.png"/>
          <ImageTile alt="Unity"            image="assets/imgs/logos/unity engine.png"/>
          <ImageTile alt="Vulkan"           image="assets/imgs/logos/vulkan.png"/>
          <ImageTile alt="DirectX 11"       image="assets/imgs/logos/directx11.png"/>
          <ImageTile alt="Git"              image="assets/imgs/logos/git.png"/>
        </div>
      </div>
    </div>
  </section>
  );
}

export default SkillSection;
