import React, { FunctionComponent } from 'react';
import logo from '../../logo.svg';
import '../../App.css'

type HelloSectionProps = {
  empty: boolean;
};

export const HelloSection: FunctionComponent<HelloSectionProps> = ({empty}) =>
{
  if (empty)
  {
    return (<div/>)
  }
  return (
    <section id="header">
      <div className="header">
        <div className="header_inner">
          <div className="header-welcome"> Welcome </div>
          <div className="header_parallax">
          {/*<img src={logo} className="header_inner_logo" alt="logo" />*/}
          <div>
            <div className="header-aboutme-title"> About Me! </div>
            <div className="header-aboutme-body">
            <br></br>
            Hi, my name is Louis
            <br></br>
            <br></br>
            I am a First class honours graduate, I primarily work with C++, and
            have a keen interest in Computer Graphics
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HelloSection;
