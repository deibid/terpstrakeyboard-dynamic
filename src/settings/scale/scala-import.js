import { h } from 'preact';
import PropTypes from 'prop-types';

const ScalaImport = (props) => (
  <>
    <label>
      Scale (<a href="http://www.huygens-fokker.org/scala/scl_format.html" target="new">Scala format</a>)
      <textarea name="scale_import" onChange={(e) => props.onChange(e.target.name, e.target.value)}
                rows="12" value={props.settings.scale_import}
      />
    </label>
    <button type="button" onClick={props.onImport} >Import</button>
    <button type="button" onClick={props.onCancel} >Cancel</button>
  </>
);

ScalaImport.propTypes = {
  onChange: PropTypes.func.isRequired,
  settings: PropTypes.shape({
    scale_import: PropTypes.string,
  }).isRequired,
};

export default ScalaImport;
