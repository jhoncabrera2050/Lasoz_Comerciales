import React from 'react';
import { NavLink } from 'react-router-dom';
import { BurgerButton } from './BurgerButton';

export const Header = () => {
  return (
    <header className='header'>
      <div className='logo'>
        <span>J</span>
        <h3> Joseph Cabrera Ojanama</h3>
      </div>
      <nav>
        <ul>
          <li className='links active' >
            <NavLink to="/inicio" className={({ isActive }) => isActive ? "active" : ""}>Inicio</NavLink>
          </li>
          <li className='links active' >
            <NavLink to="/portafolio" className={({ isActive }) => isActive ? "active" : ""} >Portafolio</NavLink>
          </li>
          <li className='links active' >
            <NavLink to="/servicio" className={({ isActive }) => isActive ? "active" : ""} >Servicio</NavLink>
          </li>
          <li className='links active' >
            <NavLink to="/curriculum" className={({ isActive }) => isActive ? "active" : ""} >Curriculum</NavLink>
          </li>
          <li className='links active' >
            <NavLink to="/contacto" className={({ isActive }) => isActive ? "active" : ""}>Contacto</NavLink>
          </li>
        </ul>
        
        <div className='burger' >
          <BurgerButton></BurgerButton>
        </div>

      </nav>
    </header>
  )
}
