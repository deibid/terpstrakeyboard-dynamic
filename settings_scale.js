import { h } from 'preact';
import { Fragment } from 'preact/compat';
import _ from 'lodash';
import PropTypes from 'prop-types';

const KeyLabels = (props) => (
  <>
    <label>
      Key Labels
      <select name="key_labels" value={props.settings.key_labels} onChange={props.onChange}>
        <option value="no_labels">Blank Keys (No Labels)</option>
        <option value="enumerate">Enumerate Scale</option>
        <option value="names">Note Names</option>
      </select>
    </label>
    {props.settings.key_labels === "enumerate" && (
      <label>
        Steps To Equivalence Interval
        <input name="equivSteps" type="number"
               min="1" max="999"
               value={props.settings.equivSteps}
               onChange={props.onChange}
        />
      </label>
    )}
  </>
);

KeyLabels.propTypes = {
  onChange: PropTypes.func.isRequired,
  settings: PropTypes.shape({
    key_labels: PropTypes.string,
    equivSteps: PropTypes.number,
  }),
};

const ScaleTable = (props) => {
  const scale = [...props.settings.scale];
  const equiv_interval = scale.length ? scale.pop() : 0;
  scale.unshift(0);

  let names;
  if (props.settings.key_labels === "enumerate") {
    names = [...Array(scale.length).keys()];
  } else if (props.settings.key_labels === "names") {
    names = props.settings.names;
  } else {
    names = Array(scale.length).fill("");
  }

  let colors;
  if (props.settings.spectrum_colors) {
    colors = Array(scale.length).fill(props.settings.fundamental_color);
  } else {
    colors = props.settings.note_colors;
  }
  const rows = _.zip(scale, names, colors);

  const scaleChange = e => {
    const next = [...props.settings.scale];
    next[parseInt(e.target.name.replace(/scale/, ""))] = e.target.value;
    props.scaleChange(next);
  };

  const colorChange = e => {
    const next = [...props.settings.note_colors];
    next[parseInt(e.target.name.replace(/color/, ""))] = e.target.value;
    props.colorChange(next);
  };

  const nameChange = e => {
    const next = [...props.settings.names];
    next[parseInt(e.target.name.replace(/name/, ""))] = e.target.value;
    props.nameChange(next);
  };

  const editable_labels = props.settings.key_labels !== "names";
  const editable_colors = props.settings.spectrum_colors;
  // todo import from scale textarea
  return (
    <table>
      <thead>
        <th>Frequency</th>
        <th>Name</th>
        <th>Color</th>
      </thead>
      <tbody>
        <tr>
          <td><em>0</em></td>
          <td>
            <input type="text" disabled={editable_labels}
                   name="name0" value={names[0]} onChange={nameChange}/>
          </td>
          <td>
            <input type="color" disabled={editable_colors}
                   name="color0" value={colors[0]} onChange={colorChange}/>
          </td>
        </tr>
        {rows.slice(1).map(([freq, name, color], i) => (
          <tr>
            <td>
              <input type="text" name={`scale${i}`}
                     value={freq} onChange={scaleChange}/>
            </td>
            <td>
              <input type="text" disabled={editable_labels}
                     name={`name${i+1}`} value={name}
                     onChange={nameChange}/>
            </td>
            <td>
              <input type="color" disabled={editable_colors}
                     name={`color${i+1}`} value={color}
                     onChange={colorChange}/>
            </td>
          </tr>
        ))}
        <tr>
          <td>
            <input type="text"
                   name={`scale${scale.length - 1}`}
                   value={equiv_interval} onChange={scaleChange}/>
          </td>
          <td><em>{names[0]}</em></td>
          <td><em>{colors[0]}</em></td>
        </tr>
      </tbody>
    </table>
  );
};

ScaleTable.propTypes = {
  onChange: PropTypes.func.isRequired,
  colorChange: PropTypes.func.isRequired,
  scaleChange: PropTypes.func.isRequired,
  nameChange: PropTypes.func.isRequired,
  settings: PropTypes.shape({
    scale: PropTypes.arrayOf(PropTypes.string),
    key_labels: PropTypes.string,
    spectrum_colors: PropTypes.bool,
    fundamental_color: PropTypes.number,
    note_colors: PropTypes.arrayOf(colorProp),
    names: PropTypes.arrayOf(PropTypes.string),
  }),
};

const colorProp = function(props, propName, componentName) {
  if (!/#[a-zA-Z0-9]{6}/.test(props[propName])) {
    return new Error(
      'Invalid hex color for prop `' + propName + '` supplied to' +
        ' `' + componentName + '`. Validation failed.'
    );
  }
}

const Colors = (props) => (
  <>
    <label>
      Use Spectrum Colors
      <input name="spectrum_colors" type="checkbox"
             checked={props.settings.spectrum_colors}
             onChange={props.onChange}/>

    </label>
    {props.settings.spectrum_colors && (
      <label>
        Fundamental Color
        <input name="fundamental_color" type="color"

               onChange={props.onChange}
               value={props.settings.fundamental_color}/>
      </label>
    )}
  </>
);

Colors.propTypes = {
  onChange: PropTypes.func.isRequired,
  settings: PropTypes.shape({
    spectrum_colors: PropTypes.bool,
    fundamental_color: colorProp,
  }),
};

const Scale = (props) => (
  <fieldset>
    <legend>Scale</legend>
    <ScaleTable {...props} />
    <label>
      Scale (<a href="http://www.huygens-fokker.org/scala/scl_format.html" target="new">Scala format</a>)
      <textarea name="scale_import" onChange={props.onChange}
                rows="12" value={props.settings.scale_import}
      />
    </label>
    <KeyLabels {...props}/>
    <Colors {...props}/>
  </fieldset>
);

Scale.propTypes = {
  onChange: PropTypes.func.isRequired,
  settings: PropTypes.shape({
    scale_import: PropTypes.string,
  })
};

export default Scale;
