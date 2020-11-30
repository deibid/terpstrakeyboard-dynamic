import { h, render, Fragment } from 'preact';
import { useRef, useEffect, useState } from 'preact/hooks';
import Keys from './keys';
import "./keyboard.css";
import PropTypes from 'prop-types';

const Keyboard = (props) => {
  const canvas = useRef(null);
  useEffect(() => {
    const keys = new Keys(canvas.current, props.settings, props.synth, props.active);
    return () => keys.deconstruct();
  }, [canvas, props.settings, props.synth]);

  return (
    <Fragment>
      <canvas ref={canvas} tabindex="1" className="keyboard"
        width="1897" height="936"
        style="height: 936px; width: 1897px; margin-top: -468px; margin-left: -948.5px;">
      </canvas>
    </Fragment>
  );
};

Keyboard.propTypes = {
  settings: PropTypes.shape({
    keyCodeToCoords: PropTypes.object,
    number_or_name: PropTypes.bool,
    no_labels: PropTypes.bool,

    // Output
    output: PropTypes.string,
    instrument: PropTypes.string,
    fundamental: PropTypes.number,
    midi: PropTypes.string,
    midi_channel: PropTypes.number,
    // Layout
    rSteps: PropTypes.number,
    urSteps: PropTypes.number,
    hexSize: PropTypes.number,
    rotation: PropTypes.number,
    // Scale
    scale: PropTypes.arrayOf(PropTypes.number),
    equivInterval: PropTypes.number,
    equivSteps: PropTypes.number,
    names: PropTypes.arrayOf(PropTypes.string),
    spectrum_colors: PropTypes.bool,
    fundamental_color: PropTypes.string,
    note_colors: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  synth: PropTypes.object.isRequired,
  onQuit: PropTypes.func.isRequired,
};

export default Keyboard;
