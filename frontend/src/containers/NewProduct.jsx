import React, {useContext} from 'react'
import '../assets/styles/containers/NewProduct.scss';
// import CurrencyInput from 'react-currency-input-field';
import Modal from '../Modal/index';
import NewSupplier from '../Modal/components/NewSupplier';
import {UseContext} from '../hooks/useContext'
import { ReactComponent as DeleteIcon } from '../assets/static/delete.svg';
import { ReactComponent as AddIcon } from '../assets/static/add.svg';

const NewProduct = (props) => {

    const { openModal,
            setOpenModal,
            formNewProduct,
            setFormNewProduct,
            addItem,
            generateUUID,
            products,
            saveProducts,
            suppliers,
            deleteSupplier} = useContext(UseContext);
  
    const handleInput = (e) => { //recopilar informacion de formulario
        setFormNewProduct({
        ...formNewProduct,
        [e.target.name]: e.target.value,
      });
    };
    // eslint-disable-next-line react/destructuring-assignment
  
    const handleSubmit = (e) => { // enviar informacion formulario
      e.preventDefault();
      try {
        addItem(formNewProduct, products, saveProducts);
        setFormNewProduct({id:generateUUID()})
        props.history.push('/products');
      } catch (error) {
        console.log('error', error);
      }
    };

    const handleOnclick =() => {
        setOpenModal(true)
    }

    const onDelete = (supplier) => {
        deleteSupplier(supplier);
    }

    return (
        <>
            <section className='newProduct'>
                <div className='newProduct__container'>
                    <div className="row">
                        <div className="col">
                            <div>
                                <h1 className='col__text'>Nuevo Producto</h1>
                                <form onSubmit={handleSubmit}>
                                    <fieldset disabled>
                                        <div className='mb-3'>
                                            <label>Identificador único de producto</label>
                                            <input
                                                type="text"
                                                className = "form-control"
                                                placeholder = {formNewProduct.id}/>
                                        </div>
                                        
                                    </fieldset>
                                    <div className='mb-3'>
                                        <label>Nombre del Producto</label>
                                        <input
                                            name="name"
                                            type="text"
                                            onChange={handleInput}
                                            className = "form-control"
                                            required />
                                    </div>
                                    <div className='mb-3'>
                                        <label>Cantidad</label>
                                        <input
                                            name="stock"
                                            type="number"
                                            onChange={handleInput}
                                            className = "form-control"
                                            required />
                                    </div>
                                    <div className='mb-3'>
                                        <label>Caracteristicas</label>
                                        <textarea
                                            name="type"
                                            type="text"
                                            onChange={handleInput}
                                            className = "form-control"
                                            required />
                                    </div>
                                    <div className='mb-3'>
                                        <label>Precio</label>
                                        <input
                                            name='price'
                                            type="number"
                                            className='form-control'
                                            onChange={handleInput}
                                            placeholder='$'
                                            required
                                        />
                                    </div>
                                    <div className='col__productManager'>
                                        <div className='col__productManager-select'>
                                            <select 
                                                className="form-select"
                                                name='supplier'
                                                onChange={handleInput}
                                                required>
                                                {suppliers.length===0 && <option defaultValue>Agregar Proveedor</option> }
                                                {suppliers.length>0 && <option defaultValue>Seleccionar Proveedor</option> }
                                                {suppliers.map((item) => {
                                                return <option key={item.id} value={item.supplier}>{item.supplier}</option>;
                                                })}
                                            </select>
                                            <AddIcon className="Icon__newProduct Icon-add" onClick={handleOnclick}/>
                                            <DeleteIcon className="Icon__newProduct Icon-delete" onClick={() => onDelete(formNewProduct.supplier)} />
                                        </div>
                                    </div>
                                    <div className='col__btn'>
                                        <button className='btn btn-primary'> Guardar</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                {!!openModal && (
                    <Modal>
                        <NewSupplier setOpenModal={setOpenModal} />
                    </Modal>
                )}
            </section>
        </>
    )
}

export default NewProduct