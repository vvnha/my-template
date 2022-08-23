import React from 'react';

import './Button.scss';

export interface Props {
  label?: string;
  width?: string;
}

export default function Button(props: Props) {
  const { label = 'Button', width = 'auto' } = props;
  return (
    <>
      <button type="button" style={{ width }}>
        {label}
      </button>
    </>
  );
}
