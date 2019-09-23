import { h } from 'preact';
import Scale from './settings_scale';
import Layout from './settings_layout';
import Output from './settings_output';
import Presets from './settings_presets';

const Settings = ({presetChanged, presets, settings, onChange, midi, instruments, onSubmit}) => (
  <form>
    <label>
      Presets
      <Presets onChange={presetChanged} presets={presets} />
    </label>
    <Scale onChange={onChange} settings={settings}/>
    <Layout onChange={onChange} settings={settings} />
    <Output onChange={onChange} settings={settings}
            instruments={instruments} midi={midi} />

    <button onClick={onSubmit} type="button">
      Make me a microtonal keyboard!
    </button>
  </form>
);

export default Settings;
