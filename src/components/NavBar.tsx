import React from "react";
import {Link} from 'react-router-dom'

import iconLogo from '../assets/logo_icon.svg'
import iconProfile from '../assets/icon_profile.svg'
import iconHome from '../assets/icon_home.svg'
import iconCart from '../assets/icon_cart.svg'


export default function NavBar() {

  return (
    <div role='navbar' className='navBar_container'>
      <div style={{ width: '230px' }}>
        <Link to={'/'}>
          <img src={iconHome} />
        </Link>
      </div>
      <div style={{ minWidth: '230px', display: 'flex', justifyContent: 'center' }}>
        <img src={iconLogo} alt="cookies logo" />
      </div>
      <div className='rightItems_container'>
        <Link to={'/produtos'} style={{ textDecoration: 'none' }}>
          <span className='common_font'>Produtos</span>
        </Link>
        <a href="#">
          <img src={iconProfile} alt="" />
        </a>
        <a href="#">
          <img src={iconCart} alt="" />
        </a>
      </div>
    </div>
  )
}
