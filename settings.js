import { h } from 'preact';
import "./settings.css";
import spacer from './1x1.png';

const Presets = (props) => (
  <select onChange={props.onChange} className="u-full-width">
    <option disabled="disabled">Choose Preset</option>
    {props.presets.map(group => (
      <optgroup label={group.name}>
        {group.settings.map(setting => (
          <option value={setting.name}>{setting.name}</option>
        ))}
      </optgroup>
    ))}
  </select>);

const Instruments = (props) => (
  <select name="instrument"
          value={props.value}
          onChange={props.onChange}
          className="u-full-width">
    {props.groups.map(group => (
      <optgroup label={group.name}>
        { group.instruments.map(instrument => (
          <option value={instrument.fileName}>{instrument.name}</option>
        ))}
      </optgroup>
    ))}
  </select>
)

const MidiSelect = (props) => (
  <select name="midi">
    <option disabled="disabled">Output Device</option>
    {props.outputs.map(m => (
      <option value={m.id}>{m.name}</option>
    ))}
  </select>
)

const SettingsForm = (props) => (
  <form>
    <div className="row">
      <div className="one-half column thincol-parent">
        <div className="u-half-width rpad">
          <label>
            Tuning/Layout Quick Links
            <Presets presets={props.presets}
                     onChange={props.presetChanged}/>
          </label>
          <label >
            Fundamental (Hz)
            <input name="fundamental" type="number"
                   value={props.settings.fundamental}
                   step="any" min="0.015625" max="16384"
                   className="u-full-width"
                   onChange={props.onChange} />
          </label>
        </div>
        <div className="u-half-width">
          <label>
            Right Facing Steps
            <input name="rSteps" type="number"
                   value={props.settings.rSteps}
                   min="-1220" max="1220"
                   className="u-full-width"
                   onChange={props.onChange}/>
          </label>
          <label>
            Up/Right Facing Steps
            <input name="urSteps" type="number"
                   value={props.settings.urSteps}
                   min="-1220" max="1220"
                   className="u-full-width"
                   onChange={props.onChange}/>
          </label>
        </div>
      </div>
      <div className="one-half column thincol-parent">
        <div className="u-half-width rpad">
          <label>
            Hex Size (pixels)
            <input name="hexSize" type="number"
                   step="any" min="20" max="1000"
                   value={props.settings.hexSize}
                   className="u-full-width"
                   onChange={props.onChange}
            />
          </label>
          <label>
            Rotation (degrees)
            <input name="rotation" type="number"
                   value={props.settings.rotation}
                   step="any" min="0" max="360"
                   onChange={props.onChange}
                   className="u-full-width"/>
          </label>
        </div>
        <div className="u-half-width">
          <label>
            Output
            <select value={props.settings.output}
                    name="output"
                    onChange={props.onChange}>
              <option disabled="disabled">Choose output</option>
              <option value="midi">MIDI</option>
              <option value="sample">Sample Synthesis</option>
            </select>
          </label>
          {props.settings.output === "sample" && (
            <label>
              MIDI
              <MidiSelect value={props.settings.midi}
                          outputs={props.midi}
                          onChange={props.onChange}/>
            </label>
          )}
          {props.settings.output === "midi" && (
            <label>
              Instrument
              <Instruments value={props.settings.instrument}
                           groups={props.instruments}
                           onChange={props.onChange}/>
            </label>
          )}
          <label>
            <input name="number_or_name" type="checkbox"
                   checked={props.settings.number_or_name}
                   disabled={props.settings.no_labels}
                   onChange={props.onChange}/>
            <span className="label-body">Enumerate Scale</span>
          </label>
          <label>
            <input name="spectrum_colors" type="checkbox"
                   checked={props.settings.spectrum_colors}
                   onChange={props.onChange}/>
            <span className="label-body">Use Spectrum Colors</span>
          </label>

          <label>
            <input name="no_labels" type="checkbox"
                   checked={props.settings.no_labels}
                   onChange={props.onChange}/>
            <span className="label-body">Blank Keys (No labels)</span>
          </label>
        </div>
      </div>
    </div>
    <div className="row">
      {/* todo this is silly oldschool */}
      <img alt="" src={spacer} style="margin: 1.5%" />
    </div>
    <div className="row">
      <div className="one-half column pushrow-mobile">
        <label>
          Scale (<a href="http://www.huygens-fokker.org/scala/scl_format.html" target="new" style="color: #222; text-decoration: none;">Scala format</a>)
          <textarea name="scale" onChange={props.onChange}
                    rows="12" value={props.settings.scale}
                    className="iosscrollable u-full-width"/>
        </label>
      </div>

      <div className="one-half column thincol-parent">
        <div className="u-half-width rpad">
          {!props.settings.no_labels && props.settings.number_or_name && (
            <label>
              Steps To Equivalence Interval
              <input name="equivSteps" type="number"
                     min="1" max="999"
                     value={props.settings.equivSteps}
                     onChange={props.onChange}
                     className="u-full-width"/>
            </label>
          )}
          {!props.settings.no_labels && !props.settings.number_or_name && (
            <label>
              Note Names
              <textarea name="names" onChange={props.onChange}
                        value={props.settings.names}
                        className="iosscrollable u-full-width"
                        rows="12"/>
            </label>
          )}
        </div>

        <div className="u-half-width">
          {props.settings.spectrum_colors ? (
            <label>
              Fundamental Color
              <input name="fundamental_color" type="color"
                     className="u-full-width"
                     onChange={props.onChange}
                     value={props.settings.fundamental_color}/>
            </label>
          ): (
            <label>
              Color Layout
              <textarea name="note_colors" onChange={props.onChange}
                        value={props.settings.note_colors}
                        className="iosscrollable u-full-width" rows="12"/>
            </label>
          )}
        </div>
      </div>
    </div>
    <input name="Submit" type="submit"
           value="Make me a microtonal keyboard!"
           onClick={props.onSubmit}/>
  </form>);

export default SettingsForm;
