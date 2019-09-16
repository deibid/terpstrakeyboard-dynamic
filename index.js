import { h, render } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import "regenerator-runtime/runtime";
import Settings from './settings';
import Keyboard from './keyboard';
import {presets, default_settings} from './presets';
import {create_sample_synth, instruments} from './sample_synth';
import {create_midi_synth} from './midi_synth';
import keyCodeToCoords from './keycodes';
import "./normalize.css";
import "./skeleton.css";
// These can be pulled from npm, but have been modified.
// import "normalize.css";
// import "skeleton-css/css/skeleton.css";
import "./terpstra-style.css"
import spacer from './1x1.png';
import Blurb from './blurb';

const findPreset = (preset) => {
  for (let g of presets) {
    for (let p of g.settings) {
      if (p.name === preset) {
        return p.value;
      }
    }
  }
  console.log("Unable to find preset");
  return default_settings;
};
// const query = new URLSearchParams(document.location.search.substring(1));
// TODO add query parsing
const parseScale = (settings) => {
  const note_colors = (settings.note_colors || "").split('\n');
  const scale = [];
  const names = (settings.names || "").split('\n');

  var scaleLines = settings.scale.split('\n');
  for (let line of scaleLines) {
    if (line.match(/^[1234567890.\s/]+$/) && !(line.match(/^\s+$/))) {
      if (line.match(/\//)) {
        // ratio
        var nd = line.split('/');
        var ratio = 1200 * Math.log(parseInt(nd[0]) / parseInt(nd[1])) / Math.log(2);
        scale.push(ratio);
      } else if (line.match(/\./)) {
        // cents
        scale.push(parseFloat(line));
      }
    }
  };
  const equivInterval = scale.pop();
  scale.unshift(0);
  // TODO make this expect leading hash
  const fundamental_color = (settings.fundamental_color || "").replace(/#/, '');
  return {...settings, fundamental_color, note_colors, scale, names, equivInterval, keyCodeToCoords};
}

const App = () => {
  // TODO loading indicator
  const [settings, setSettings] = useState(default_settings);
  const [active, setActive] = useState(false);
  const [synth, setSynth] = useState(null);
  const [midi, setMidi] = useState(null);

  const onSubmit = (e) => {
    setActive(true);
    e.preventDefault();
  };

  useEffect(() => {
    if (navigator.requestMIDIAccess) {
      navigator.requestMIDIAccess().then(m => setMidi(m));
    }
  }, []);

  useEffect(() => {
    if (settings.output === "sample"
        && settings.instrument && settings.fundamental) {
      // TODO load on submit rather than select
      create_sample_synth(settings.instrument,
                          settings.fundamental)
        .then(s => setSynth(s));
    }
    if (settings.output === "midi" && settings.midi) {
      create_midi_synth(midi.outputs.get(settings.midi))
        .then(s => setSynth(s));
    }
  }, [settings.instrument, settings.fundamental, settings.midi, settings.output, midi]);

  const onChange = e => {
    let value;
    if (e.target.type === 'checkbox') {
      value = e.target.checked;
    } else if (e.target.type === 'number') {
      value = parseFloat(e.target.value);
    } else {
      value = e.target.value;
    }
    setSettings(s => ({...s, [e.target.name]: value}));
  };

  const presetChanged = e => {
    setSettings(findPreset(e.target.value));
  };

  if (active) {
    return (
      <Keyboard synth={synth} settings={parseScale(settings)} onQuit={() => setActive(false)} />
    );
  } else {
    return (
	  <div className="section">
	    <div className="container">
	      <h2>
            <a href="http://terpstrakeyboard.com/">Terpstra Keyboard</a>
            <a href="http://terpstrakeyboard.com/play-it-now/">WebApp</a>
          </h2>
		  <div className="row">
            <img alt="" src={spacer} />
          </div>
          <Settings settings={settings} presets={presets}
                    onChange={onChange} onSubmit={onSubmit}
                    instruments={instruments}
                    midi={midi}
                    presetChanged={presetChanged} />
        </div>
        <Blurb />
	  </div>
    )
  };
};


render(<App />, document.getElementById('application'));
