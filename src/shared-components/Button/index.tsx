import React, { useState } from 'react';

import './Button.scss';

export interface Props {
  label?: string;
  width?: string;
}

export default function Button(props: Props) {
  const { label = 'Button', width = 'auto' } = props;

  const [clickPosition, setClickPosition] = useState({
    x: 0,
    y: 0,
  });
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    let x = e.clientX - (e.target as HTMLInputElement).offsetLeft;
    let y = e.clientY - (e.target as HTMLInputElement).offsetTop;
    setClickPosition({ x, y });
    setIsClicked(true);

    setTimeout(() => {
      setIsClicked(false);
    }, 500);
  };

  return (
    <>
      <button type="button" style={{ width }} onClick={handleClick}>
        {isClicked && (
          <span
            style={{
              left: `${clickPosition.x}px`,
              top: `${clickPosition.y}px`,
            }}
          />
        )}
        {label}
      </button>
    </>
  );
}
