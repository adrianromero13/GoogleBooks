import React from 'react';

// set up list components for wrapping
export function List ({ children }) {
    return <ul className='list-group'>{children}</ul>
};

export function ListItem({ children }) {
    return <li className='list-group-item'>{children}</li>
};
