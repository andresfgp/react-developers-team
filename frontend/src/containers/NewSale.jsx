import React, {useContext} from 'react'
import '../assets/styles/containers/NewSale.scss';
// import CurrencyInput from 'react-currency-input-field';
import Modal from '../Modal/index';
import TodoInit from '../Modal/components/CheckModal';
import {UseContext} from '../hooks/useContext'

const NewSale = (props) => {

    const {openModal, setOpenModal, formNewSale,setFormNewSale,addItem,generateUUID, sales, saveSales} =useContext(UseContext);
  
    const handleInput = (e) => { //recopilar informacion de formulario
        setFormNewSale({
        ...formNewSale,
        [e.target.name]: e.target.value,
      });
    };
    // eslint-disable-next-line react/destructuring-assignment
  
    const handleSubmit = (e) => { // enviar informacion formulario
      e.preventDefault();
      try {
        addItem(formNewSale,sales, saveSales);
        setFormNewSale({id:generateUUID()})
        props.history.push('/sales');
        // setOpenModal(true)
      } catch (error) {
        console.log('error', error);
      }
    };
    return (
    <>
        <section className='newSale'>
            <div className='newSale__container'>
                    <div className='row'>
                        <div className='col'>
                            <div>
                                <h1 className='col__text'>Nueva Venta</h1>
                                <form onSubmit={handleSubmit}>
                                    <fieldset disabled>
                                        <div className="mb-3">
                                            <label>Identificador único de venta</label>
                                            <input 
                                                type="text"
                                                className="form-control"
                                                placeholder={formNewSale.id} />
                                        </div>
                                    </fieldset>
                                    <div className='mb-3'>
                                        <label>Descripción de la Venta</label>
                                        <textarea
                                            onChange={handleInput}
                                            type='text'
                                            name='description'
                                            className='form-control'
                                            rows="3"
                                            required
                                        />
                                    </div>
                                    <div className='mb-3'>
                                        <label>Valor Unitario</label>
                                        <input
                                            name='saleValue'
                                            type='number'
                                            className='form-control'
                                            onChange={handleInput}
                                            placeholder='$'
                                            required
                                        />
                                    </div>
                                    <div className='mb-3'>
                                        <label>Cantidad</label>
                                        <input
                                            name="saleQuantity"
                                            type="number"
                                            data-type="currency"
                                            onChange={handleInput}
                                            className = "form-control"
                                            required />
                                    </div>
                                    <div className='mb-3'>
                                        <label>Cliente</label>
                                        <input
                                            onChange={handleInput}
                                            type='text'
                                            name='client'
                                            className='form-control'
                                            required
                                        />
                                    </div>
                                    <div className='col__dates'>
                                        <div>
                                            <label>Fecha Inicial de Pago</label>
                                            <input
                                                onChange={handleInput}
                                                type='date'
                                                name='initialPaymentDate'
                                                className='form-control'
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label>Fecha Final de Pago</label>
                                            <input
                                                onChange={handleInput}
                                                type='date'
                                                name='finalPaymentDate'
                                                className='form-control'
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className='col__saleManager'>
                                        <div className='col__saleManager-select'>
                                            <select 
                                                className="form-select"
                                                name='saleManager'
                                                onChange={handleInput}
                                                required>
                                                <option defaultValue>Seleccionar responsable venta</option>
                                                <option value="Andrés García">Andrés García</option>
                                                <option value="Brayan Padilla">Brayan Padilla</option>
                                                <option value="Juan Sebastián">Juan Sebastián</option>
                                                <option value="Norberto Medina">Norberto Medina</option>
                                                <option value="Francisco Javier">Francisco Javier</option>
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

export default NewSale