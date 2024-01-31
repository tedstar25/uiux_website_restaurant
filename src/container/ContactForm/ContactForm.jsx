import React, { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [time, setTime] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost/sendmail.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          name,
          time,
          phone,
        }),
      });

      const result = await response.text();

      setMessage(result);
    } catch (error) {
      console.error('Error submitting form:', error);
      setMessage('Failed to submit the form. Please try again later.');
    }
  };

  return (
    <div className='app__bg app__wrapper section__padding' id="contact">
      <div className='app__wrapper_info' style={{backgroundColor:'yellow'}}>
      <h1>Booking Request</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Time:
          <input type="text" value={time} onChange={(e) => setTime(e.target.value)} />
        </label>
        <br />
        <label>
          Phone Number:
          <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      {message && <p>{message}</p>}
    </div>
    </div>
  );
};

export default ContactForm;