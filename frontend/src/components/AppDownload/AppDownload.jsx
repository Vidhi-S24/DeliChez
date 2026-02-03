import React from 'react';
import './AppDownload.css';
import { assets } from '../../assets/assets.js';

const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
      <p>For Better Experience Download <br /> DéliChez App</p>
      <div className="app-download-platforms">
        <a
          href="https://play.google.com/store"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={assets.google_play_icon} alt="Google Play" />
        </a>
        <a
          href="https://www.apple.com/app-store/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={assets.app_store_icon} alt="App Store" />
        </a>
      </div>
    </div>
  );
};

export default AppDownload;
