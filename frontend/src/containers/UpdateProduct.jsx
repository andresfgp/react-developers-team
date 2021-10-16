import React, { useContext } from 'react';
import '../assets/styles/containers/UpdateProduct.scss';
// import CurrencyInput from 'react-currency-input-field';
import { UseContext } from '../hooks/useContext'
import Modal from '../Modal/index';
import NewSupplier from '../Modal/components/NewSupplier';
import { ReactComponent as AddIcon } from '../assets/static/add.svg';


const UpdateProduct = (props) => {

    const { openModal,
            setOpenModal,
            updateProduct,
            setUpdateProduct, 
            updateItem,
            products,
            saveProducts,
            suppliers } = useContext(UseContext);


    const handleInput = (e) => { //recopilar informacion de formulario
        setUpdateProduct({
            ...updateProduct,
            [e.target.name]: e.target.value,
        });

    };
    const handleEdit = (e) => {
        e.preventDefault();
        updateItem(products,saveProducts,updateProduct,"productos");
        props.history.push('/products'); 
       }
    
    const handleOnclick =() => {
        setOpenModal(true)
    }


    return (
        <>
            <section className='updateProduct'>
                <div className='updateProduct__container'>
                    <div className="row">
                        <div className="col">
                            <div>
                                <h1 className='col__text'>Editar Producto</h1>
                                <form onSubmit={handleEdit}>
                                    <fieldset disabled>
                                        <div className='mb-3'>
                                            <label>Identificador único de producto</label>
                                            <input
                                                type="text"
                                                className = "form-control"
                                                defaultValue = {updateProduct.id}/>
                                        </div>
                                        
                                    </fieldset>
                                    <div className='mb-3'>
                                        <label>Nombre del Producto</label>
                                        <input
                                            name="name"
                                            type="text"
                                            onChange={handleInput}
                                            className = "form-control"
                                            defaultValue = {updateProduct.name}
                                            required />
                                    </div>
                                    <div className='mb-3'>
                                        <label>Cantidad</label>
                                        <input
                                            name="stock"
                                            type="number"
                                            onChange={handleInput}
                                            className = "form-control"
                                            defaultValue = {updateProduct.stock}
                                            required />
                                    </div>
                                    <div className='mb-3'>
                                        <label>Caracteristicas</label>
                                        <textarea
                                            name="type"
                                            type="text"
                                            onChange={handleInput}
                                            className = "form-control"
                                            defaultValue = {updateProduct.type}
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
                                            defaultValue={updateProduct.price}
                                            required
                                        />
                                    </div>
                                    <div className='col__productManager'>
                                        <div className='col__productManager-select'>
                                            <select 
                                                className="form-select"
                                                name='supplier'
                                                onChange={handleInput}
                                                required
                                                defaultValue={updateProduct.supplier}>
                                                {suppliers.length===0 && <option value=''>Agregar Proveedor</option> }
                                                {suppliers.map((item) => {
                                                return <option key={item.id} value={item.supplier}>{item.supplier}</option>;
                                                })}
                                            </select>
                                            <AddIcon className="Icon__updateProduct Icon-add" onClick={handleOnclick} />
                                        </div>
                                    </div>
                                    <div className='col__btn'>
                                        <button className='btn btn-primary'> Actualizar</button>
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
export default UpdateProduct