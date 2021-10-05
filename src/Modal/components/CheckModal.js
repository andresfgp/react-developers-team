import React from 'react';
import Button from '@restart/ui/esm/Button';
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
          <Button color = "primary">Nueva Venta</Button>
          <Button color = "secondary" onClick = {handleOnClick}>Cerrar</Button>
      </ModalFooter>
    </div>
  );
};

export default CheckModal;
