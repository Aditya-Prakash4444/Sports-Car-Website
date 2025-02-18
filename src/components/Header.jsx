import React, {useContext, useState} from 'react';
import './header.css';
import navListData from '../data/navListData';
import NavListItems from './NavListItems';
import { Link } from 'react-router-dom';
import { AppContext } from '../App';

function Header() {
  const {library, setLibrary} = useContext(AppContext);
  const [open, setOpen] = useState(false);
  const [navList, setNavList] = useState(navListData);
 

  const handleToggleMenu = () => {
    setOpen(!open);
  };

  const handleNavOnClick = id => {
    const newNavList = navList.map(nav=>{
      nav.active = false;
      if(nav._id == id) nav.active=true;
      return nav;
    });
    setNavList(newNavList);
  };

  return (
    <header>
      <a href="/" className='logo'>Mechanical Heart</a>
      <div>
        <Link to='/library' className='like'>
        <i className="bi bi-suit-heart-fill"></i>
        <span className='likeNumbers'>{library.length}</span>
        </Link>
        <a href="#" className='menu' onClick={handleToggleMenu}>
        {open? <i className="bi bi-x-lg"></i> : <i className="bi bi-list"></i>}
        </a>
      </div>
      <ul className={`nav ${open? 'active': undefined}`}>
        {
          navList.map(nav=>(<NavListItems key={nav._id} nav={nav} navOnClick={handleNavOnClick} />
        ))}
      </ul>
    </header>
  )
}

export default Header;