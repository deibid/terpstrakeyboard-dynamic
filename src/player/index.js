import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import "./player.css"
import * as Tone from 'tone'


const Player = (props) => {

  const BEATS_PER_SCALE = 8;
  const [currentBeat, setCurrentBeat] = useState(props.currentBeat);
  const listener = props.onScaleChange;

  const [bpm, setBpm] = useState(60);
  const [playing, setPlaying] = useState(false);

  let loop = new Tone.Loop(time => {

    listener();
    // // This is VERY UGLY code... never do this
    // setCurrentBeat(state => {
    //   if (state % BEATS_PER_SCALE === 0) {
    //     listener();
    //     return 1;
    //   }
    //   else return state += 1;
    // });
  }, "4n");




  // Tone.Transport.bpm = bpm;

  useEffect(() => {
    Tone.Transport.bpm.value = bpm;
  }, []);


  const handlePlay = (e) => {
    Tone.start();
    console.log("Press play");
    setPlaying(true);
    Tone.Transport.start();
    loop.start(0);
  }

  const handleStop = (e) => {
    console.log("Press stop");
    setPlaying(false);
    Tone.Transport.stop();
    // loop.stop(0);
  }

  return (

    <div id="player-container">
      <p>{bpm}</p>
      <p>{currentBeat}</p>
      <button onClick={handlePlay} enabled={playing}>Play</button>
      <button onClick={handleStop} enabled={!playing}>Stop</button>
    </div>


  );

}


export default Player;

