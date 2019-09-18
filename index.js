import { h, render } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import "regenerator-runtime/runtime";
import Settings from './settings';
import Keyboard from './keyboard';
import {presets, default_settings} from './presets';
import {create_sample_synth, instruments} from './sample_synth';
import {create_midi_synth} from './midi_synth';
import keyCodeToCoords from './keycodes';
// import "./normalize.css";
import "./skeleton.css";
// These can be pulled from npm, but have been modified.
import "normalize.css";
// import "skeleton-css/css/skeleton.css";
import "./terpstra-style.css"
import { useQuery, Extract, ExtractInt, ExtractString, ExtractFloat, ExtractBool } from './use-query';
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

const parseScale = (settings) => {
  const scale = [];
  // TODO make this expect leading hash
  const fundamental_color = (settings.fundamental_color || "").replace(/#/, '');
  const result = {...settings, fundamental_color, keyCodeToCoords};

  if (settings.scale) {
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
    result["scale"] = scale;
    result["equivInterval"] = equivInterval;
  }
  return result;
}

const App = () => {
  const [loading, setLoading] = useState(0);
  const [settings, setSettings] = useQuery({
    // Output
    output: ExtractString,
    instrument: ExtractString,
    midi: ExtractString,
    fundamental: ExtractFloat,
    // Layout
    rSteps: ExtractInt,
    urSteps: ExtractInt,
    hexSize: ExtractInt,
    rotation: ExtractInt,
    // Scale
    scale: ExtractString,
    no_labels: ExtractBool,
    number_or_name: ExtractBool,
    // TODO consistent snake case
    equivSteps: ExtractInt,
    names: new Extract(x => x.split("\n"), x => x.join("\n")),
    spectrum_colors: ExtractBool,
    fundamental_color: ExtractString,
    note_colors: new Extract(x => x.split("\n"), x => x.join("\n")),
    //
  });
  const [active, setActive] = useState(false);
  const [synth, setSynth] = useState(null);
  const [midi, setMidi] = useState(null);

  const onSubmit = (e) => {
    setActive(true);
    e.preventDefault();
  };

  useEffect(() => {
    if (navigator.requestMIDIAccess) {
      setLoading(l => l + 1);
      navigator.requestMIDIAccess().then(m => {
        setLoading(l => l - 1);
        setMidi(m)
      });
    }
  }, []);

  useEffect(() => {
    if (settings.output === "sample"
        && settings.instrument && settings.fundamental) {
      // TODO load on submit rather than select
      setLoading(l => l + 1);
      create_sample_synth(settings.instrument,
                          settings.fundamental)
        .then(s => {
          setLoading(l => l - 1);
          setSynth(s);
        });
    }
    if (settings.output === "midi" && settings.midi) {
      setLoading(l => l + 1);
      create_midi_synth(midi.outputs.get(settings.midi))
        .then(s => {
          setLoading(l => l + 1);
          setSynth(s);
        });
    }
  }, [settings.instrument, settings.fundamental, settings.midi, settings.output, midi]);

  const onChange = e => {
    let value;
    if (e.target.type === 'checkbox') {
      value = e.target.checked;
    } else if (e.target.type === 'number') {
      value = parseFloat(e.target.value);
    } else if (e.target.name === "names" || e.target.name === "note_colors") {
      value = e.target.value.split("\n");
    } else {
      value = e.target.value;
    }
    setSettings(s => ({...s, [e.target.name]: value}));
  };

  const presetChanged = e => {
    setSettings(_ => findPreset(e.target.value));
  };

  const valid = s => (
    ((s.output === "midi" && s.midi) || (s.output === "sample" && s.fundamental && s.instrument)) &&
      s.rSteps && s.urSteps &&
      s.hexSize && s.rotation &&
      s.scale && s.equivSteps &&
      (s.no_labels || s.number_or_name && s.names || !s.number_or_name) &&
      ((s.spectrum_colors && s.fundamental_color) || s.note_colors)
  );
  return (
    <div>
      {loading === 0 && valid(settings) && (
        <Keyboard synth={synth} settings={parseScale(settings)} onQuit={() => setActive(false)} />
      )}
	  <div id="sidebar" className={active ? "hide" : "show"}>
        {loading > 0 && (<div>Loading...</div>)}
	    <div className="container">
	      <h2>
            <a href="http://terpstrakeyboard.com/">Terpstra Keyboard</a>
          </h2>
          <Settings settings={settings} presets={presets}
                    onChange={onChange} onSubmit={onSubmit}
                    instruments={instruments}
                    midi={midi}
                    presetChanged={presetChanged} />
        </div>
        <Blurb />
	  </div>
    </div>
  );
};


render(<App />, document.getElementById('application'));
