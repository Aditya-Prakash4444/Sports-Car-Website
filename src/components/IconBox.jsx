import React from 'react';
import './iconBox.css';

function IconBox({icon, title, description}) {
  return (
    <div className='icon-box'>
      <div className='icon'>
        <i className={icon}></i>
      </div>
      <h4 className='title'>
        <a href="#">{title}</a>
      </h4>
      <p className='description'>
        {description? description : 
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'}
      </p>
    </div>
  );
}

export default IconBox;