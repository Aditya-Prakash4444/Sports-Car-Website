import React from 'react';
import './navListItems.css';
import { Link } from 'react-router-dom';

function NavListItems({nav, navOnClick }) {
  return (
   <li>
    <Link
      className={nav.active ? 'active' : undefined}
      to={nav.link}
      onClick={ ()=> navOnClick(nav._id)}
    >  
      {nav.name ==="home" ? <i className="bi bi-speedometer2"></i>: nav.name}
    </Link>
   </li>
  );
}

export default NavListItems;