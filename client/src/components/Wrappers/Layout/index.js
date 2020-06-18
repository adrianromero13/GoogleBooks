import React from 'react';

export function Container({ fluid, children }) {
  return <div className={`container${fluid ? '-fluid' : ''}`}>{children}</div>;
}

// Bootstrap row
export function Row({ fluid, children }) {
  return <div className={`row${fluid ? '-fluid' : ''} `}>{children}</div>;
}

// Bootstrap columns with sizing done pre-empitvely
export function Col({ size, children }) {
  return (
    <div
      className={size
        .split(' ')
        .map(size => 'col-' + size)
        .join(' ')}
    >
      {children}
    </div>
  );
}
