import React from 'react';
import { Link } from 'react-router-dom';
import { ModalHeader, ModalFooter} from 'reactstrap';
import '../assets/styles/components/CheckModal.scss';

const CheckModal = (props) => {
  const { setOpenModal } = props;
  const handleOnClick = () => {
    setOpenModal(false);
  };
  return (
    <div className='CheckModal'>
      <ModalHeader>
          ¡¡Venta almacenada Exitosamente!!
      </ModalHeader>                    
      <ModalFooter>
          <Link to='/newSale' onClick = {handleOnClick}>Nueva Venta</Link>
          <Link to='/' onClick = {handleOnClick}>Cerrar</Link>
      </ModalFooter>
    </div>
  );
};

export default CheckModal;
