import React from 'react';
import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/fxdigitallogo.png';

/* Reusable header Component */
export const Header = () => {
  return (
    <header>
      <NavLink to='/'><img src={logo} alt='logo' /></NavLink>
    </header>
  );
};

export default Header;