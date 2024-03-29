import React, {useContext,useState} from 'react'
// import { Link } from 'react-router-dom';
import '../assets/styles/components/NewSupplier.scss';
import {UseContext} from '../../hooks/useContext'

const NewSupplier = (props) => {

  const { setOpenModal, formNewSupplier, setFormNewSupplier, suppliers, saveSuppliers, addItem, generateUUID} = useContext(UseContext);

  const [supplierExists,setSupplierExists]=useState(false); //setImportantNewValue]=useState(false); //state important

  const handleInput = (e) => { //recopilar informacion de formulario
    setFormNewSupplier({
    ...formNewSupplier,
    [e.target.name]: e.target.value,
  });
};

const handleOnClick = () => {
    setOpenModal(false);
};

const handleSubmit = (e) => { // enviar informacion formulario
    e.preventDefault();
    try {
        if(!suppliers.some(item => item.supplier.toLowerCase()===formNewSupplier.supplier.toLowerCase())){
          addItem(formNewSupplier, suppliers, saveSuppliers);
          setFormNewSupplier({id:generateUUID()});
          setOpenModal(false)
          setSupplierExists(false)
        }else{
          setSupplierExists(true)
        }
    } catch (error) {
        console.log('error', error);
    }
    };

  return (
    <div className='newSupplier'>
      <h1>Nuevo Proveedor</h1>  
      <form onSubmit={handleSubmit} className='newSupplier__container'>
        <div className='mb-3'>
            <input
                name="supplier"
                type="text"
                onChange={handleInput}
                className = "form-control"
                required />
        </div>
        <div className='newSupplier__container-btn'>
            <button className='btn btn-primary' type='submit'>Guardar</button>
            <button className='btn btn-secondary' onClick = {handleOnClick}>Cerrar</button>
        </div>
      </form>                
      <div>
          {supplierExists && <h6>Provedor ya existe, intenta nuevamente!</h6>}
      </div>
    </div>
  );
};

export default NewSupplier;