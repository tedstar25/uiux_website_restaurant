import React,{useState} from 'react'
import { Link } from 'react-router-dom'

import {Footer} from '../../container'
import { SubHeading } from '../../components'
import Modal from '../../components/Modal/Modal';
import '../../App.css'
import './BookTable.css'







const BookTable = () => {

  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errorMessages, setErrorMessages] = useState(false);


  const openErrorModal = () => {
    setShowError(true);
  };

  const closeErrorModal = () => {
    setShowError(false);
  };

  const openSuccessModal = () => {
    setShowSuccess(true);
  };

  const closeSuccessModal = () => {
    setShowSuccess(false);
  };


    const [formData, setFormData] = useState({
      name: '',
      date:'',
      time: '',
      number: '',
      email: '',
    });
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();

      
  
      try {
        const response = await fetch(`https://restaurantapi.hostportfolio.site/send-email`, {

          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
  
        if (!response.ok) {
          try {
            const errorData = await response.json();

            setErrorMessages(errorData.errors)
            openErrorModal();

          } catch (error) {
            console.error('Error parsing JSON:', error.message);
          }
        } 

        if (response.ok) {
          console.log('Email sent successfully');
          openSuccessModal();
        } 
      } catch (error) {
        console.error('Error:', error);
      }


    };

  
  return (
    <div className='app__footer section__padding' >
        <div className='app__newsletter' style={{marginTop:'10rem'}}>

          <Modal modal={showError} onClose={closeErrorModal}>
            <div className='flex__center modal__error'>
              {errorMessages && (
                errorMessages.map((error) => (
                  <div className='modal__error-content' key={error.key}>
                    <p className="p__opensans" style={{margin:'2rem',fontSize:'2rem', color:'orange'}}>{error.message}</p>
                  </div>
                ))
              )}
            </div>
          </Modal>
          <Modal modal={showSuccess} onClose={closeSuccessModal}>
            <div className='flex__center modal__error'>
                <p className="p__opensans">Request sent successfully!</p>
            </div>
          </Modal>
          <div className="app__newsletter-heading">
          <SubHeading title="Book today!" />
          <h1 className="headtext__cormorant">Make a booking request!</h1>
          <p className="p__opensans">We'll get in touch with you soon as possible.</p>
          </div>
          <div className='app__newsletter-input flex__center' style={{flexFlow:'column', gap:'1rem', padding:'2rem'}}>
            <input type="name" name="name" placeholder='Enter your name' onChange={handleChange} className=' app__booktable-input'/>
            <input type="date" name="date" placeholder='Enter date '  onChange={handleChange} className='app__booktable-input'/>
            <input type="time" name="time" placeholder='Enter time'  onChange={handleChange} className='app__booktable-input'/>
            <input type="number" name="phoneNumber" placeholder='Enter your phone number' maxLength="10" pattern="\d{10}" onChange={handleChange} className='app__booktable-input' />
            <input type="email" name="email" placeholder='Enter your E-Mail' onChange={handleChange} className='app__booktable-input' />
          </div>
          <div className='flex__center' style={{marginTop:'3rem'}}>
              <button className='custom__button flex__center' onClick={handleSubmit} >Subscribe</button>
          </div>
        </div>
        <div className='flex__center custom__button returnbutton' >
          <Link to="/">        
              <button type="button" className="custom__button" style={{backgroundColor:'#DCCA87'}}>
              Back
              </button>
          </Link>
        </div>
        {!showError && <Footer newsletter={false} />}
    </div>
  )};

export default BookTable
