import React, { useState, MouseEvent } from 'react';

import './PasswordInput.scss';

export interface PasswordFieldProps {
  label?: string;
  type?: string;
}

export default function PasswordField(props: PasswordFieldProps) {
  const { label = 'Password', type = 'password' } = props;
  const [inputType, setInputType] = useState(type);
  const [isShowPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = (event: MouseEvent) => {
    event.preventDefault();
    setShowPassword((currentStatus) => !currentStatus);
    setInputType(!isShowPassword ? 'text' : 'password');
  };

  return (
    <>
      <div className="text-field">
        <input
          className="text-input"
          type={inputType}
          name="textField"
          placeholder=" "
        />

        <label className="text-label" htmlFor="textField">
          {label}
        </label>

        <a href="!#" onClick={handleClickShowPassword}>
          {!isShowPassword ? (
            <img src="/icons/eye.svg" alt="" />
          ) : (
            <img src="/icons/eye-off.svg" alt="" />
          )}
        </a>
      </div>
    </>
  );
}
