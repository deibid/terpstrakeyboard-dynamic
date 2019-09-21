import { h, render } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import "regenerator-runtime/runtime";
import Keyboard from './keyboard';
import {presets, default_settings} from './presets';
import {create_sample_synth, instruments} from './sample_synth';
import {create_midi_synth} from './midi_synth';
import keyCodeToCoords from './keycodes';
// import "./normalize.css";
//import "./skeleton.css";
// These can be pulled from npm, but have been modified.
// import "normalize.css";
// import "skeleton-css/css/skeleton.css";
import "./terpstra-style.css"
import { useQuery, Extract, ExtractInt, ExtractString, ExtractFloat, ExtractBool } from './use-query';
import Blurb from './blurb';
import Scale from './settings_scale';
import Layout from './settings_layout';
import Output from './settings_output';
import Presets from './settings_presets';

import {options} from 'preact';
import PropTypes from 'prop-types';

// installs global prop type checking for app preact components
options.vnode = vnode => {
  let Component = vnode.type;
  if (Component && Component.propTypes) {
    PropTypes.checkPropTypes(
      Component.propTypes,
      vnode.props
    );
  }
}

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

const normalize = (settings) => {
  const fundamental_color = (settings.fundamental_color || "").replace(/#/, '');
  const note_colors = settings.note_colors.map(c => c.replace(/#/, ''));
  const result = {...settings, fundamental_color, keyCodeToCoords, note_colors};
  if (settings.key_labels === "enumerate") {
    result["number_or_name"] = true;
  } else if (settings.key_labels === "no_labels") {
    result["no_labels"] = true;
  }

  if (settings.scale) {
    const scale = [...settings.scale];
    const equivInterval = scale.pop();
    scale.unshift(0);
    result["scale"] = scale;
    result["equivInterval"] = equivInterval;
  }
  return result;
};

const App = () => {
  const [loading, setLoading] = useState(0);
  const [settings, setSettings] = useState(default_settings);

  /*
  const [settings, setSettings] = useQuery({
    // Output
    output: ExtractString,
    instrument: ExtractString,
    fundamental: ExtractFloat,
    midi: ExtractString,
    midi_channel: ExtractInt,
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
  */
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
    if (settings.output === "midi" && settings.midi &&
        typeof settings.midi_channel === "number" &&
        typeof settings.midi_velocity === "number") {
      setLoading(l => l + 1);
      create_midi_synth(midi.outputs.get(settings.midi),
                        settings.midi_channel,
                        settings.midi_velocity)
        .then(s => {
          setLoading(l => l - 1);
          setSynth(s);
        });
    }
  }, [settings.instrument, settings.fundamental, settings.midi, settings.midi_channel, settings.midi_velocity, settings.output, midi]);

  const onChange = e => {
    let value;
    if (e.target.type === 'checkbox') {
      value = e.target.checked;
    } else if (e.target.type === 'number') {
      value = parseFloat(e.target.value);
    } else if (e.target.name === "midi_channel") {
      value = parseInt(e.target.value);
    } else {
      value = e.target.value;
    }
    setSettings(s => ({...s, [e.target.name]: value}));
  };

  const scaleChange = scale => {
    setSettings(s => ({...s, scale}));
  };

  const nameChange = names => {
    setSettings(s => ({...s, names}));
  };

  const colorChange = note_colors => {
    setSettings(s => ({...s, note_colors}));
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
        <Keyboard synth={synth} settings={normalize(settings)} onQuit={() => setActive(false)} />
      )}
	  <div id="sidebar" className={active ? "hide" : "show"}>
        {loading > 0 && (<div>Loading...</div>)}
	    <div className="container">
	      <h2>
            <a href="http://terpstrakeyboard.com/">Terpstra Keyboard</a>
          </h2>
          <form>
            <label>
              Presets
              <Presets presets={presets} onChange={presetChanged}/>
            </label>
            <Scale onChange={onChange}
                   settings={settings}
                   scaleChange={scaleChange}
                   colorChange={colorChange}
                   nameChange={nameChange} />
            <Layout onChange={onChange} settings={settings} />
            <Output onChange={onChange} settings={settings}
                    instruments={instruments} midi={midi}
            />
            <input name="Submit" type="submit"
                   value="Make me a microtonal keyboard!"
                   onClick={onSubmit}/>
          </form>
        </div>
        <Blurb />
	  </div>
    </div>
  );
};


render(<App />, document.getElementById('application'));
