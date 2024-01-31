
import './Modal.css'; // Adjust the path as needed
import { useState } from 'react';


const Modal = ({ modal, onClose, children }) => {

    return (
    <>
        {modal && (
        <>
            <div className="app__modal-overlay"></div>
            <div className="app__modal-content"  >
                <div style={{height:'90%'}}>
                    {children}
                </div>
                <div className='flex__center' style={{height:'10%'}} >
                    <button className="custom__button" style={{marginBottom:'1rem'}} onClick={onClose}>
                        Close
                    </button>
                </div>

            </div>
        </>
        )}
    </>
    );
  };
  
  export default Modal;