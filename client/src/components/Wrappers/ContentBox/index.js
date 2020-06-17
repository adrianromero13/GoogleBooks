import React from 'react';

function ContentBox({ icon, title, children }) {
  return (
    <div className='card mt-4'>
      <div className='card-header'>
        <h4>
          <strong>
            <i className={`fa fa-${icon}`} aria-hidden='true' />
            {title}
          </strong>
        </h4>
      </div>
      <div className='card-body'>
        {children}
      </div>
    </div>
  )
}

export default ContentBox;
