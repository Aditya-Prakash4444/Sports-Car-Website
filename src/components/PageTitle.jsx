import React from 'react';
import './pageTitle.css';

function PageTitle({title, subtitle}) {
  return (
    <div className='page-title mt-5'>
        <h2>{title}</h2>
        <p>{subtitle}</p>
    </div>
  )
}

export default PageTitle;