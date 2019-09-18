import { h } from 'preact';

const Scale = (props) => (
  <fieldset>
    <legend>Scale</legend>
    <label>
      Scale (<a href="http://www.huygens-fokker.org/scala/scl_format.html" target="new">Scala format</a>)
      <textarea name="scale" onChange={props.onChange}
                rows="12" value={props.settings.scale}
                />
    </label>
    <label>
      <input name="no_labels" type="checkbox"
             checked={props.settings.no_labels}
             onChange={props.onChange}/>
      <span >Blank Keys (No labels)</span>
    </label>
    <label>
      <input name="number_or_name" type="checkbox"
             checked={props.settings.number_or_name}
             disabled={props.settings.no_labels}
             onChange={props.onChange}/>
      <span >Enumerate Scale</span>
    </label>
    {!props.settings.no_labels && props.settings.number_or_name && (
      <label>
        Steps To Equivalence Interval
        <input name="equivSteps" type="number"
               min="1" max="999"
               value={props.settings.equivSteps}
               onChange={props.onChange}
               />
      </label>
    )}
    {!props.settings.no_labels && !props.settings.number_or_name && (
      <label>
        Note Names
        <textarea name="names" onChange={props.onChange}
                  value={(props.settings.names || []).join("\n")}

                  rows="12"/>
      </label>
    )}
    <label>
      <input name="spectrum_colors" type="checkbox"
             checked={props.settings.spectrum_colors}
             onChange={props.onChange}/>
      <span >Use Spectrum Colors</span>
    </label>
    {props.settings.spectrum_colors ? (
      <label>
        Fundamental Color
        <input name="fundamental_color" type="color"

               onChange={props.onChange}
               value={props.settings.fundamental_color}/>
      </label>
    ): (
      <label>
        Color Layout
        <textarea name="note_colors" onChange={props.onChange}
                  value={(props.settings.note_colors || []).join("\n")}
                   rows="12"/>
      </label>
    )}
  </fieldset>
);

export default Scale;
