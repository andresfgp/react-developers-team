import React, { useContext } from 'react';
import '../assets/styles/containers/UpdateSale.scss';
// import CurrencyInput from 'react-currency-input-field';
import { UseContext } from '../hooks/useContext'


const UpdateSale = (props) => {

    const { updateSale, setUpdateSale, updateItem, sales, saveSales } = useContext(UseContext);


    const handleInput = (e) => { //recopilar informacion de formulario
        setUpdateSale({
            ...updateSale,
            [e.target.name]: e.target.value,
        });
    };
    
    const handleEdit = (e) => {
        e.preventDefault();
        updateItem(sales,saveSales,updateSale);
        props.history.push('/sales'); 
    }

    return (
        <>
            <section className='updateSale'>
                <div className='updateSale__container'>
                    <div className='row'>
                        <div className='col'>
                            <div>
                                <h1 className='col__text'>Editar Venta</h1>
                                <form onSubmit={handleEdit}>
                                    <fieldset disabled>
                                        <div className="mb-3">
                                            <label>Identificador único de venta</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                defaultValue={updateSale.id}
                                            />
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
                                            defaultValue={updateSale.description}
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
                                            defaultValue={updateSale.saleValue}
                                            required
                                        />
                                    </div>
                                    <div className='mb-3'>
                                        <label>Cantidad</label>
                                        <input
                                            name="saleQuantity"
                                            type="number"
                                            onChange={handleInput}
                                            className = "form-control"
                                            defaultValue={updateSale.saleQuantity}
                                            required />
                                    </div>
                                    <div className='mb-3'>
                                        <label>Cliente</label>
                                        <input
                                            onChange={handleInput}
                                            type='text'
                                            name='client'
                                            className='form-control'
                                            defaultValue={updateSale.client}
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
                                                defaultValue={updateSale.initialPaymentDate}
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
                                                defaultValue={updateSale.finalPaymentDate}
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
                                                required
                                                defaultValue={updateSale.saleManager}>
                                                <option value="Andrés García">Andrés García</option>
                                                <option value="Brayan Padilla">Brayan Padilla</option>
                                                <option value="Juan Sebastián">Juan Sebastián</option>
                                                <option value="Norberto Medina">Norberto Medina</option>
                                                <option value="Francisco Javier">Francisco Javier</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className='col__btn'>
                                        <button className='btn btn-primary'>Actualizar</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default UpdateSale