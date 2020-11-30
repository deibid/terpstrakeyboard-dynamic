import { h } from 'preact';
import { useState } from 'preact/hooks';
import "./player.css"




const Player = (props) => {

  const [bpm, setBpm] = useState(120);
  const [playing, setPlaying] = useState(false);


  const handlePlay = (e) => {
    console.log("Press play");
    setPlaying(true);
  }

  const handleStop = (e) => {
    console.log("Press stop");
    setPlaying(false);
  }

  return (

    <div id="player-container">
      <p>{bpm}</p>
      <button onClick={handlePlay} enabled={playing}>Play</button>
      <button onClick={handleStop} enabled={!playing}>Stop</button>
    </div>


  );

}


export default Player;

