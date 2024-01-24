import React, { useState } from 'react';


import {images} from '../../constants';
import './AboutUs.css';
import Modal from '../../components/Modal/Modal';

const AboutUs = () => {

  const [showInfo, setShowInfo] = useState(false);

  const openInfo = () => {
    setShowInfo(true);
  };

  const closeInfo = () => {
    setShowInfo(false);
  };

  console.log(showInfo)

  return (



  <div className='app__aboutus app__bg flex__center section__padding' id='about'>

    <div className='app__aboutus-overlay flex__center'>
      <img src={images.G} alt="g letter" />
    </div>
    <div className='app__aboutus-content flex__center'>  {/* set app__aboutus-content for tablet in phone to flex-direction:column via media query */ }
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>About Us</h1>
        <img src={images.spoon} alt="about_spoon" className='spoon__img' />
        <p className='p__opensans' >er glaub- und vertrauenswürdig wirken möchte, muss ehrlich sein. Machen Sie nur wahrheitsgemässe Aussagen. Es ist nicht nötig über eine Million abgeschlossener Aufträge und 24-Stunden-Lieferung zu prahlen, wenn dies nicht stimmt. Lügen Sie Ihren Kunden nicht an. Schreiben Sie Ihren Inhalt wahrheitsgetreu.</p>
        <Modal modal={showInfo} onClose={closeInfo}>
          <h2>Modal Content</h2>
          <p>This is a responsive modal window.</p>
        </Modal>
        <button type="button" className='custom__button' onClick={openInfo} >Modal1</button>
      </div>
      <div className='app__aboutus-content_knife flex__center'>
        <img src={images.knife} alt="about_knife" />
      </div>
      <div className='app__aboutus-content_history'>
        <h1 className='headtext__cormorant'>Out history</h1>
        <img src={images.spoon} alt="about_spoon" className='spoon__img' />
        <p className='p__opensans' >er glaub- und vertrauenswürdig wirken möchte, muss ehrlich sein. Machen Sie nur wahrheitsgemässe Aussagen. Es ist nicht nötig über eine Million abgeschlossener Aufträge und 24-Stunden-Lieferung zu prahlen, wenn dies nicht stimmt. Lügen Sie Ihren Kunden nicht an. Schreiben Sie Ihren Inhalt wahrheitsgetreu.</p>

        
        <button type="button" className='custom__button' >Know more</button>
      </div>
    </div>

  </div>
)};

export default AboutUs;
