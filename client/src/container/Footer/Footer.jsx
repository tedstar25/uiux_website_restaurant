import React from 'react';

import './Footer.css';
import {images} from '../../constants';
import {FooterOverlay,Newsletter} from '../../components';
import {FiFacebook,FiTwitter,FiInstagram} from 'react-icons/fi';

const Footer = ({newsletter}) => (
  <div className='app__footer section__padding'>
    <FooterOverlay />
    {newsletter && <Newsletter />}

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">9 W 53rd St, New York, NY 10019, USA</p>
        <p className="p__opensans">+1 212-344-1230</p>
        <p className="p__opensans">+1 212-555-1230</p>
      </div>

      <div className='app__footer-links_logo'>
        <img src={images.gericht} alt="footer_logo" />
        <p className='p__opensans'>"The best way to find yourself is to lose yourself in the service to others."</p>
        <img src={images.spoon} alt="spoon" className='spoon_img' style={{marginTop:'15px'}} />
        <div className='app__footer-links_icons'>
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className='app__footer-links_work'>
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Mon: 6PM - 10PM</p>
        <p className="p__opensans">Di-Fri: 14 AM - 10 PM</p>
        <p className="p__opensans">Sat-Sun: 10 AM - 12 PM</p>
      </div>

    </div>
    <div className='footer__copyright'>
      <p className='p__opensans'>2021 Peace. All Rights reserved.</p>
    </div>
  </div>
);

export default Footer;
