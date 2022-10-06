import React from 'react';

import logoVerde from '../assets/imagens/logo-verde.png'
import avatar from '../assets/imagens/avatar.png'

function Menu() {
  return (
    <>
      <nav>
        <div className="container">
          <img src={logoVerde} alt="Logo" className="logo" />
          <img src={avatar} alt="Avatar" className="avatar" />
        </div>
      </nav>
    </>
  )
}

export default Menu;