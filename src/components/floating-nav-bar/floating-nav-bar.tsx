import React, { FunctionComponent } from 'react';
import { Link } from "react-scroll";

type FloatingNavBarProps = {
//
};

/*  Custom nav bar icons
    https://stackoverflow.com/questions/22617280/how-to-add-own-icons-in-bootstrap-navbar/22618064
*/

export const FloatingNavBar: FunctionComponent<FloatingNavBarProps> = ({}) => {
    return (
    <section id="nav-bar">
      <nav className="navbar navbar-expand navbar-inverse navbar-fixed-top flex-nowrap flex-row">
        <div className="navbar-collapse collapse">
          <ul className="nav navbar-nav flex-row">
            <li>
              <Link
              activeClass="active"
              to="header"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              >
              Home
              </Link>
            </li>
            <li>
              <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              >
              Projects
              </Link>
            </li>
            <li>
              <Link
              activeClass="active"
              to="skills"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              >
              Skills
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </section>);
}

export default FloatingNavBar;
