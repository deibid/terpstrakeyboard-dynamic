import { h } from 'preact';
import { useState } from 'preact/hooks';
import { Fragment } from 'preact/compat';
import PropTypes from 'prop-types';
import Colors, { colorProp } from './colors';
import KeyLabels from './key-labels';
import ScaleTable from './scale-table';
import ScalaImport from './scala-import';

const Scale = (props) => {
  const [importing, setImporting] = useState(false);

  const doImport = () => {
    props.onImport();
    setImporting(false);
  };
  const cancelImport = () => setImporting(false);
  const startImporting = () => setImporting(true);

  return (
  <fieldset>
    <legend>Scale</legend>
      {importing
       ?(<ScalaImport {...props}
                      onImport={doImport}
                      onCancel={cancelImport}/>)
       :(<>
          <ScaleTable {...props} />
           <button type="button" onClick={startImporting}>
            Import
          </button>
        </>)
      }
    <KeyLabels {...props}/>
    <Colors {...props}/>
  </fieldset>
  );
};

Scale.propTypes = {
  onImport: PropTypes.func.isRequired,
};

export default Scale;
