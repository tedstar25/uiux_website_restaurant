
import './Modal.css'; // Adjust the path as needed
import { useState } from 'react';


const Modal = ({ modal, onClose, children }) => {



    return (
    <>
        {modal && (
        <>
            <div className="app__modal-overlay"></div>
                <div className="app__modal-content">
                {children}
                <button className="app__modal-closeButton" onClick={onClose}>
                    Close
                </button>
            </div>
        </>
        )}
    </>
    );
  };
  
  export default Modal;