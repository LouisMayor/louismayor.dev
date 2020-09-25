import React, { FunctionComponent } from 'react';
import ReactPlayer from 'react-player'

type MusicProps = {
  audioClip: string
};

export const Music: FunctionComponent<MusicProps> = ({audioClip}) => <aside>
  <div>Music Player - {audioClip}</div>
  <ReactPlayer 
      url={audioClip}
      volume={0.25}
      loop={true}
      muted={true}
      controls={true}
      playing={true}
  />
</aside>

export default Music;