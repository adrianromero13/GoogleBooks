import React from 'react';

// layout with bootstrap grid system and class attributes
// wrapper for all components
export function Container({ fluid, children }) {
  return <div className={`container${fluid ? '-fluid' : ''}`}>{children}</div>;
}

// wrapper for columns to lay in a row
export function Row({ fluid, children }) {
  return <div className={`row${fluid ? '-fluid' : ''}`}>{children}</div>;
}

// column component
export function Col({ size, children }) {
  return (
    <div
      className=
      {
        size
          .split(' ')
          .map(size => 'col-' + size)
          .join(' ')
      }
    >
      {children}
    </div>
  );
}
