import { h } from 'preact';
import Scale from './scale';
import Layout from './layout';
import Output from './output';
import Presets from './presets';

const Settings = ({presetChanged, presets, settings, onChange, onImport, midi, instruments, onSubmit}) => (
  <form>
    <label>
      Presets
      <Presets onChange={presetChanged} presets={presets} />
    </label>
    <Scale onChange={onChange} settings={settings} onImport={onImport}/>
    <Layout onChange={onChange} settings={settings} />
    <Output onChange={onChange} settings={settings}
            instruments={instruments} midi={midi} />

    <button onClick={onSubmit} type="button">
      Make me a microtonal keyboard!
    </button>
  </form>
);

export default Settings;
