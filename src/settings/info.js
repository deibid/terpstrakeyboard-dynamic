import { h, render } from 'preact';

const Info = (props) => (
  <fieldset>
    <legend>Description</legend>
    <label>
      Name
      <input name="name" type="text"
             value={props.settings.name}
             onChange={(e) => props.onChange(e.target.name, e.target.value)}/>
    </label>
    <label>
      Description
      <textarea name="description"
             value={props.settings.description}
             onChange={(e) => props.onChange(e.target.name, e.target.value)}/>
    </label>
  </fieldset>
);
export default Info;
