import React from 'react';
import Music from './components/music'
import FloatingNav from './components/floating-nav-bar'
import HelloSection from './components/hello-section'
import ProjectSection from './components/projects-section'
import SkillsSection from './components/skill-section'
import {TileGridLayout} from './enums';
import logo from './logo.svg';
import './App.css';

/* References
  http://www.mollyjameson.com
  http://hugo.fyi/#
  http://leah-lindner.com/
  http://www.joshcaratelli.com/
  https://nielsbrunekreef.com/#competencies
*/

function MusicSyncExample(): JSX.Element {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Music audioClip="assets/audio/drone.wav"/>
      </header>
    </div>
  );
}

function BasicPage(): JSX.Element {
  return (
    <div>
      <HelloSection empty={false}/>
    </div>
  );
}

function ExtendedBasicPage(): JSX.Element {
  return (
    <div>
      <FloatingNav/>
      <HelloSection empty={false}/>
    </div>
    );
}

function TwoPage(): JSX.Element {
  return (
    <div>
      <FloatingNav/>
      <HelloSection empty={false}/>
      <ProjectSection empty={false} tileLayout={TileGridLayout.Horizontal}/>
    </div>
    );
}

function ThreePage(): JSX.Element {
  return (
    <div>
      <FloatingNav/>
      <HelloSection empty={false}/>
      <ProjectSection empty={false} tileLayout={TileGridLayout.Horizontal}/>
      <SkillsSection empty={false}/>
    </div>
    );
}

function App(): JSX.Element {
  return (ThreePage());
}

export default App;
