import React from 'react';

import {images} from '../../constants';
import './Header.css';
import { SubHeading } from '../../components';




const Header = () => (
  <div className='app__header app__wrapper section__padding' id="home">
    <div className='app__wrapper_info'>
      <SubHeading title="Chase the new flavour" />
      <h1 className='app__header-h1' >The Key to Fine Dining</h1>
      <p className='p__opensans' style={{margin:'2rem 0'}}>Ein gastronomischer Texter ist ein Fachmann oder Werbetexter, der für das Schreiben von Fachtexten im Gastgewerbe qualifiziert ist . Mit ihren Dienstleistungen können sie das monatliche/jährliche monetäre Einkommen des Lokals optimieren, indem sie Texte erstellen , die zum Handeln seitens des Kunden motivieren.</p>
      <a href="#menu">
        <button type="button" className="custom__button">
          Explore Menu
        </button>
      </a>
    </div>
    <div className='app__wrapper_img'>
      <img src={images.welcome} alt='header img'/>
    </div>
  </div>
);

export default Header;
