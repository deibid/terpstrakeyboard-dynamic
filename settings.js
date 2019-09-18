import { h } from 'preact';
import { Fragment } from 'preact/compat';
// import "./settings.css";
import Scale from './settings_scale';
import Layout from './settings_layout';
import Output from './settings_output';

const Presets = (props) => (
  <select onChange={props.onChange} >
    <option disabled="disabled">Choose Preset</option>
    {props.presets.map(group => (
      <optgroup label={group.name}>
        {group.settings.map(setting => (
          <option value={setting.name}>{setting.name}</option>
        ))}
      </optgroup>
    ))}
  </select>);

const SettingsForm = (props) => (
  <form>
    <label>
      Presets
      <Presets presets={props.presets} onChange={props.presetChanged}/>
    </label>
    <Scale {...props} />
    <Layout {...props}/>
    <Output {...props}/>
    <input name="Submit" type="submit"
           value="Make me a microtonal keyboard!"
           onClick={props.onSubmit}/>
  </form>);

export default SettingsForm;
