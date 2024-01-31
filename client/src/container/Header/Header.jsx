import React from 'react';

import {images} from '../../constants';
import './Header.css';
import { SubHeading } from '../../components';
import { Link } from 'react-router-dom';




const Header = () => (
  <div className='app__header app__wrapper section__padding' id="home">
    <div className='app__wrapper_info'>
      <SubHeading title="Chase the new flavour" />
      <h1 className='app__header-h1' >The Key to Fine Dining</h1>
      <p className='p__opensans' style={{margin:'2rem 0'}}>Welcome to Gericht, where culinary excellence meets a warm and inviting atmosphere. Nestled in the heart of your city, our restaurant offers a unique dining experience that combines delectable flavors, exceptional service, and a touch of elegance.</p>
      <li className='p__opensans list-style-none'>
        <Link to="/fullmenu">        
          <button type="button" className="custom__button">
            Explore Menu
          </button>
        </Link>
      </li>
    </div>
    <div className='app__wrapper_img'>
      <img src={images.welcome} alt='header img'/>
    </div>
  </div>
);

export default Header;
