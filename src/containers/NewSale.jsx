import React, {useContext} from 'react'
import '../assets/styles/containers/NewSale.scss';
import CurrencyInput from 'react-currency-input-field';
import Modal from '../Modal/index';
import TodoInit from '../Modal/components/CheckModal';
import {UseContext} from '../hooks/useContext'

const NewSale = (props) => {

    const {openModal, setOpenModal, formNewSale,setFormNewSale,addSales,generateUUID} =useContext(UseContext);
  
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
        addSales(formNewSale);
        setFormNewSale({id:generateUUID()})
        props.history.push('/');
        // setOpenModal(true)
      } catch (error) {
        console.log('error', error);
      }
    };
    return (
        <>
            <div className='container'>
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
                                    <label>Valor Total de la Venta</label>
                                    <CurrencyInput
                                        name='totalSaleValue'
                                        className='form-control'
                                        onChange={handleInput}
                                        placeholder='$'
                                        prefix='$'
                                        step={1}
                                        required
                                    />
                                </div>
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
                                            <option value="andres">Andrés García</option>
                                            <option value="brayan">Brayan Padilla</option>
                                            <option value="sebastian">Juan Sebastián</option>
                                            <option value="norberto">Norberto Medina</option>
                                            <option value="francisco">Francisco Javier</option>
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
        </>
    )
}

export default NewSale
