import { h, render } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import "regenerator-runtime/runtime";
import Keyboard from './keyboard';
import {presets, default_settings, parseScale} from './settings/preset_values';
import {create_sample_synth, instruments} from './sample_synth';
import {create_midi_synth} from './midi_synth';
import keyCodeToCoords from './settings/keycodes';
// import "./normalize.css";
//import "./skeleton.css";
// These can be pulled from npm, but have been modified.
//import "normalize.css";
// import "skeleton-css/css/skeleton.css";
import "./terpstra-style.css"
import { useQuery, Extract, ExtractInt, ExtractString, ExtractFloat, ExtractBool, ExtractStringArray } from './use-query';

import Settings from './settings';
import Blurb from './blurb';

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

// TODO eliminate the need for this.
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
    scale: ExtractStringArray,
    no_labels: ExtractBool,
    number_or_name: ExtractBool,
    // TODO consistent snake case
    equivSteps: ExtractInt,
    // TODO rename to note_names
    names: ExtractStringArray,
    spectrum_colors: ExtractBool,
    fundamental_color: ExtractString,
    note_colors: ExtractStringArray
    //
  }, default_settings);
  */
  const [active, setActive] = useState(false);
  const [synth, setSynth] = useState(null);
  const [midi, setMidi] = useState(null);
  const wait = l => l + 1;
  const signal = l => l - 1;

  useEffect(() => {
    if (navigator.requestMIDIAccess) {
      setLoading(wait);
      navigator.requestMIDIAccess().then(m => {
        setLoading(l => l - 1);
        setMidi(m)
      });
    }
  }, []);

  useEffect(() => {
    if (settings.output === "sample"
        && settings.instrument && settings.fundamental) {
      setLoading(wait);
      create_sample_synth(settings.instrument,
                          settings.fundamental)
        .then(s => {
          setLoading(signal);
          setSynth(s);
        });
    }
    if (settings.output === "midi" && settings.midi &&
        typeof settings.midi_channel === "number" &&
        typeof settings.midi_velocity === "number") {
      setLoading(wait);
      create_midi_synth(midi.outputs.get(settings.midi),
                        settings.midi_channel,
                        settings.midi_velocity)
        .then(s => {
          setLoading(signal);
          setSynth(s);
        });
    }
  }, [settings.instrument, settings.fundamental, settings.midi, settings.midi_channel, settings.midi_velocity, settings.output, midi]);

  const onChange = (key, value) => {
    setSettings(s => ({...s, [key]: value}));
  };

  const presetChanged = e => {
    setSettings(_ => findPreset(e.target.value));
  };

  const onImport = () => {
    setSettings(s => {
      if (s.scale_import) {
        return {...s, scale: parseScale(s.scale_import)};
      } else {
        return s;
      }
    });
  };

  const valid = s => (
    ((s.output === "midi" && s.midi && s.midi_channel && s.midi_velocity) ||
     (s.output === "sample" && s.fundamental && s.instrument)) &&
      s.rSteps && s.urSteps &&
      s.hexSize && s.hexSize >= 30 && s.rotation &&
      s.scale && s.equivSteps &&
      (s.no_labels || s.number_or_name && s.names || !s.number_or_name) &&
      ((s.spectrum_colors && s.fundamental_color) || s.note_colors)
  );
  // TODO better sidebar toggle mechanism than the button and back arrow
  return (
    <div>
      {loading === 0 && valid(settings) && synth && (
        <Keyboard synth={synth} settings={normalize(settings)}
                  active={active}
                  onQuit={() => setActive(false)} />
      )}
	  <div id="sidebar" className={active ? "hide" : "show"}>
        {loading > 0 && (<div>Loading...</div>)}
	      <h2>
            <a href="http://terpstrakeyboard.com/">Terpstra Keyboard</a>
          </h2>
          <Settings presetChanged={presetChanged}
                    presets={presets}
                    onChange={onChange}
                    onImport={onImport}
                    settings={settings}
                    midi={midi}
                    instruments={instruments}
                    onSubmit={() => setActive(true)}/>
        <Blurb />
	  </div>
    </div>
  );
};


render(<App />, document.getElementById('application'));
