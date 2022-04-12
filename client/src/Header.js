import React from 'react';
import './Header.css';
import {CgProfile} from 'react-icons/cg';
import {MdForum} from 'react-icons/md';

function Header() {
  return (
    <div className='header'>
        <CgProfile />
        <img className='header__logo' src='https://play-lh.googleusercontent.com/TcHgSH30vCBCtQfyFLWvvPJdpOAJrSp1OtqopwMue3yRiXa7wT5Fs8gUbA3oJylGW991' alt='' />
        <MdForum />
    </div>
  )
}

export default Header