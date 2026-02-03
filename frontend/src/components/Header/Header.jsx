import React from 'react';
import './Header.css';
import { assets } from '../../assets/assets.js';

const Header = () => {
  
  return (
    <div className="header">
      <div className="header-left">
        <h2>Welcome to DéliChez</h2>
        <p>
          Enjoy <i>le goût of France</i> — classic dishes crafted with passion and elegance,
          delivered fresh to your door.
        </p>
        {/* <button>View Menu</button> */}
        <p className="tagline">Taste the tradition. Savor the moment.</p>
      </div>
      <div className="header-right">
        <img src={assets.header_image} alt="Delichez Food" />
      </div>
    </div>
  );
};

export default Header;
