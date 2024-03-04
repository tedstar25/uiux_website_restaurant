import React, { useState } from 'react';


import {images} from '../../constants';
import './AboutUs.css';
import Modal from '../../components/Modal/Modal';
import {MdOutlineRestaurantMenu} from 'react-icons/md';

const AboutUs = () => {


  /////////////////////////////////////////////////////////// USE GRID FOR MODAL WITH PICTURES and use flex-wrap

  const [showInfo1, setShowInfo1] = useState(false);
  const [showInfo2, setShowInfo2] = useState(false);

  const openInfo1 = () => {
    setShowInfo1(true);
  };

  const closeInfo1 = () => {
    setShowInfo1(false);
  };

  const openInfo2 = () => {
    setShowInfo2(true);
  };

  const closeInfo2 = () => {
    setShowInfo2(false);
  };



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
     
        <Modal modal={showInfo1} onClose={closeInfo1}>
          <h2 className='headtext__cormorant'>Our Team</h2>
          <div className="modal__ourteam" >
              <div className='modal__ourteam-content'>
                <div >
                  <img className="modal__image" src={images.chef} alt="chef"/>
                  <p>This is John</p>
                </div>
                <p>Er glaub- und vertrauenswürdig wirken möchte, muss ehrlich sein. Machen Sie nur wahrheitsgemässe</p>
              </div>

              <div className='modal__ourteam-content'>
                <div >
                  <img className="modal__image" src={images.chef} alt="chef"/>
                  <p>This is John</p>
                </div>
                <p>er glaub- und vertrauenswürdig wirken möchte, muss ehrlich sein. Machen Sie nur wahrheitsgemässe</p>
              </div>

              <div className='modal__ourteam-content'>
                <div >
                  <img className="modal__image" src={images.chef} alt="chef"/>
                  <p>This is John</p>
                </div>
                <p>er glaub- und vertrauenswürdig wirken möchte, muss ehrlich sein. Machen Sie nur wahrheitsgemässe</p>
              </div>
              <div className='modal__ourteam-content'>
                <div >
                  <img className="modal__image" src={images.chef} alt="chef"/>
                  <p>This is John</p>
                </div>
                <p>er glaub- und vertrauenswürdig wirken möchte, muss ehrlich sein. Machen Sie nur wahrheitsgemässe</p>
              </div>
          </div>
        </Modal>

        <button type="button" className='custom__button' onClick={openInfo1} >Our Team</button>
      </div>
      <div className='app__aboutus-content_knife flex__center'>
        <img src={images.knife} alt="about_knife" />
      </div>
      <div className='app__aboutus-content_history'>
        <h1 className='headtext__cormorant'>Our history</h1>
        <img src={images.spoon} alt="about_spoon" className='spoon__img' />
        <p className='p__opensans' >Gericht has a rich and storied history that spans over 4 years. Founded in 2020, our journey began with a vision to create a culinary haven that would bring people together through the joy of exceptional food.</p>
    
        <Modal modal={showInfo2} onClose={closeInfo2}>
          <h1 className='headtext__cormorant'>Our History</h1>
          <div className='modal__ourhistory'>
            <p className='p__opensans' >From our humble beginnings as a small eatery, we've evolved into a culinary destination known for its commitment to quality, innovation, and unwavering hospitality. Throughout the years, we've cherished the opportunity to serve our community, building lasting relationships with our patrons and becoming an integral part of the local dining scene.<br/> Our history is woven with milestones, from the introduction of signature dishes to the expansion of our space to accommodate the growing demand for our culinary creations.<br/><br/>  As we look back on our journey, we're grateful for the support of our loyal customers and the dedication of our passionate team. At Gericht, every chapter of our history reflects a commitment to excellence, a love for food, and a desire to create moments of joy around the dining table. Join us as we continue to write the next chapter of our story, and thank you for being part of our culinary legacy.</p>
          </div>
          
        </Modal>

        <button type="button" className='custom__button' onClick={openInfo2}>Know more</button>
      </div>
    </div>

  </div>
)};

export default AboutUs;
