import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/logo.png';
import menu from '../assets/static/menu.svg';

const Header = () => {
    return (
        <header className='header'>
        <Link to="/">
            <img className='header__logo' src={logo} alt='Logo' />
        </Link>
        <nav>
          <div className='header__menu'>
            <div className='header__menu--profile'>
              <img src={menu} alt="menu" />
            </div>
            <ul>
            <li>
                <Link to='/login'>
                  Iniciar Sesión
                </Link>
              </li>
              <li>
                <Link to='/'>
                  Ventas
                </Link>
              </li>
              <li>
                <Link to='/products'>
                  Productos
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    )
}

export default Header

