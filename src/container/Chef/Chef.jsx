import React from 'react';

import './Chef.css';
import { images } from '../../constants';
import { SubHeading } from '../../components';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapperimg-reverse'>
      <img src={images.chef} alt="chef"/>
    </div>
    <div className='app__wrapper_info'>
      <SubHeading title="Chef's Word" />
      <h1 className='headtext__cormorant'>What we believe in !</h1>

      <div className='app__chef-content' >
        <div className='app__chef-content_quote'>
          <img src={images.quote} alt="quote" />
          <p className='p__opensans' >SHalallaalalalal</p>
        </div>
        <p className='p__opensans' >Eintracht Frankfurt wird wohl auch gegen den VfB Stuttgart und Toptorjäger Serhou Guirassy ohne Robin Koch auskommen müssen.</p>
      </div>
      <div className='app__chef-sign'>
        <p>Peter Pan</p>
        <p className='p__opensans'>Chef & Founder</p>
        <img src={images.sign} alt="sign"/>
        
      </div>

    </div>
  </div>
);

export default Chef;
