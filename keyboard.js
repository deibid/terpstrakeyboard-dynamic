import { h, render, Fragment } from 'preact';
import { useRef, useEffect, useState } from 'preact/hooks';
import Keys from './keys';
import "./keyboard.css";
import backArrow from './back.png';

const Keyboard = (props) => {
  const canvas = useRef(null);
  useEffect(() => {
    const keys = new Keys(canvas.current, props.settings, props.synth);
    return () => keys.deconstruct();
  }, [canvas, props.settings, props.synth]);

  return (
    <Fragment>
      <canvas ref={canvas} tabindex="1" className="keyboard"
              width="1897" height="936"
              style="height: 936px; width: 1897px; margin-top: -468px; margin-left: -948.5px;">
      </canvas>
      <img alt="Return to keyboard design"
           src={backArrow} className="backButton"
           onClick={props.onQuit}/>
    </Fragment>
  );
};

export default Keyboard;
