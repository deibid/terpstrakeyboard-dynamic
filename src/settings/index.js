import { h } from 'preact';
import Scale from './scale';
import Layout from './layout';
import Output from './output';
import Presets from './presets';
import Info from './info';
import './settings.css';

const Settings = ({presetChanged, presets, userPresets, savePreset, settings, onChange, onImport, midi, instruments}) => (
  <form>
    <label>
      Presets
      <Presets onChange={presetChanged} presets={presets} userPresets={userPresets}/>
    </label>
    <Info onChange={onChange} settings={settings} onSave={savePreset}/>
    <Scale onChange={onChange} settings={settings} onImport={onImport}/>
    <Layout onChange={onChange} settings={settings} />
    <Output onChange={onChange} settings={settings}
            instruments={instruments} midi={midi} />
  </form>
);

export default Settings;
