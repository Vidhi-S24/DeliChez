import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets.js'

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className='footer-content'>
                <div className='footer-content-left'>
                    <h1>DéliChez</h1>

                    <p>At DéliChez, we’re passionate about delivering the rich, timeless flavors of French cuisine right to your doorstep. From classic starters to indulgent mains and delicate desserts, each dish is crafted with authentic ingredients and culinary care. DéliChez brings a true taste of France to your table — fresh, flavorful, and unforgettable.</p>
                    <div className="footer-social-icons">
                        <a
                            href="https://www.facebook.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={assets.facebook} alt='facebook' />
                        </a>
                        <a
                            href="https://www.instagram.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={assets.instagram} alt='instagram' />
                        </a>
                        <a
                            href="https://x.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={assets.twitter} alt='twitter' />
                        </a>



                    </div>
                </div>
                <div className='footer-content-center'>
                    <h3>Company</h3>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className='footer-content-right'>
                    <h3>Get in touch</h3>
                    <ul>
                        <li>+1-212-456-7677</li>
                        <li>contact@DéliChez,com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className='footer-copyright'>Copyright 2025 © DéliChez.com - All Rights Reserved.</p>
        </div>
    )
}

export default Footer