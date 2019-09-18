import { h } from 'preact';
import { Fragment } from 'preact/compat';

const MidiSelect = (props) => (
  <select name="midi" onChange={props.onChange}>
    <option disabled="disabled">Output Device</option>
    {Array.from(props.midi.outputs.values()).map(m => (
      <option value={m.id}>{m.name}</option>
    ))}
  </select>
);

const Instruments = (props) => (
  <select name="instrument"
          value={props.value}
          onChange={props.onChange}
          >
    {props.groups.map(group => (
      <optgroup label={group.name}>
        { group.instruments.map(instrument => (
          <option value={instrument.fileName}>{instrument.name}</option>
        ))}
      </optgroup>
    ))}
  </select>
);

const Output = (props) => (
  <fieldset>
    <legend>Output</legend>
    <label>
      Output
      <select value={props.settings.output}
              name="output"
              onChange={props.onChange}>
        <option disabled="disabled">Choose output</option>
        {props.midi && (<option value="midi">MIDI</option>)}
        <option value="sample">Sample Synthesis</option>
      </select>
    </label>
    {(props.settings.output === "midi" && props.midi) && (
      <label>
        MIDI
        <MidiSelect value={props.settings.midi}
                    midi={props.midi}
                    onChange={props.onChange}/>
      </label>
    )}
    {props.settings.output === "sample" && (
      <>
        <label >
          Fundamental (Hz)
          <input name="fundamental" type="number"
                 value={props.settings.fundamental}
                 step="any" min="0.015625" max="16384"
                 onChange={props.onChange} />
        </label>
        <label>
          Instrument
          <Instruments value={props.settings.instrument}
                       groups={props.instruments}
                       onChange={props.onChange}/>
        </label>
      </>
    )}
  </fieldset>
);

export default Output;
