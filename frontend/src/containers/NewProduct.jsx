import React, {useContext} from 'react'
import '../assets/styles/containers/NewProduct.scss';
// import CurrencyInput from 'react-currency-input-field';
import Modal from '../Modal/index';
import TodoInit from '../Modal/components/CheckModal';
import {UseContext} from '../hooks/useContext'

const NewProduct = (props) => {

    const {openModal, setOpenModal, formNewProduct,setFormNewProduct,addItem,generateUUID, products, saveProducts} = useContext(UseContext);
  
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
        // setOpenModal(true)
      } catch (error) {
        console.log('error', error);
      }
    };
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
                                                <option defaultValue>Seleccionar Proveedor</option>
                                                <option value="Xiami">Xiaomi</option>
                                                <option value="Microsoft">Miscrosoft</option>
                                                <option value="Razer">Razer</option>
                                                <option value="Gearbest">Gearbest</option>
                                                <option value="Apple">Apple</option>
                                            </select>
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
                        <TodoInit setOpenModal={setOpenModal} />
                    </Modal>
                )}
            </section>
        </>
    )
}

export default NewProduct