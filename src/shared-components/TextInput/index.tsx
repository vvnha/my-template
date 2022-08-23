import * as React from 'react';
import './TextInput.scss';
export interface Props {
  label?: string;
}

export default function TextInput(props: Props) {
  const { label = 'Name' } = props;

  return (
    <div className="text-field">
      <input className="text-input" name="textField" placeholder=" " />
      <label className="text-label" htmlFor="textField">
        {label}
      </label>
    </div>
  );
}
