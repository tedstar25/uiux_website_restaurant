
import './Modal.css'; // Adjust the path as needed

import {MdOutlineRestaurantMenu} from 'react-icons/md';

const Modal = ({ modal, onClose, children }) => {

    return (
    <>
        {modal && (
        <>
            <div className="app__modal-overlay"></div>
            <div className="app__modal-content"  >

                <div style={{height:'90%', overflow:'hidden'}}>
                    {children}
                </div>
                <div className='flex__center' style={{height:'10%'}} >
                
                <MdOutlineRestaurantMenu fontSize={27} className='close_button' onClick={()=>onClose()} />
                </div>

            </div>
        </>
        )}
    </>
    );
  };
  
  export default Modal;