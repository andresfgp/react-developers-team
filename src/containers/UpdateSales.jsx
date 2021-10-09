import React, {useContext} from 'react'
import '../assets/styles/containers/NewSale.scss';
import CurrencyInput from 'react-currency-input-field';
import {UseContext} from '../hooks/useContext'

const UpdateSales = (props) => {

    const {searchedSale} =useContext(UseContext);

      // eslint-disable-next-line react/destructuring-assignment
    const { id } = props.match.params;

    const userID = searchedSale.filter((item) => ((item.id === id)));

    const [formID, setValues] = React.useState(userID[0]);

    const handleInput = (e) => { //recopilar informacion de formulario
        setValues({
          ...formID,
          [e.target.name]: e.target.value,
        });
      };

    console.log(formID);

    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <div>
                            <h1 className='col__text'>Nueva Venta</h1>
                            <form //</div>onSubmit={handleSubmit}
                            >
                                <fieldset disabled>
                                    <div className="mb-3">
                                        <label>Identificador único de venta</label>
                                        <input 
                                            type="text"
                                            className="form-control"
                                            defaultValue={formID.id}
                                            // placeholder={formNewSale.id}
                                             />
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
                                        defaultValue={formID.totalSaleValue}
                                        required
                                    />
                                </div>
                                <div className='mb-3'>
                                    <label>Descripción de la Venta</label>
                                    <textarea
                                       // onChange={handleInput}
                                        type='text'
                                        name='description'
                                        className='form-control'
                                        rows="3"
                                        defaultValue={formID.description}
                                        required
                                    />
                                </div>
                                <div className='col__dates'>
                                    <div>
                                        <label>Fecha Inicial de Pago</label>
                                        <input
                                          //  onChange={handleInput}
                                            type='date'
                                            name='initialPaymentDate'
                                            className='form-control'
                                            defaultValue={formID.initialPaymentDate}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label>Fecha Final de Pago</label>
                                        <input
                                           // onChange={handleInput}
                                            type='date'
                                            name='finalPaymentDate'
                                            className='form-control'
                                            defaultValue={formID.finalPaymentDate}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className='col__saleManager'>
                                    <div className='col__saleManager-select'>
                                        <select 
                                            className="form-select"
                                            name='saleManager'
                                           // onChange={handleInput}
                                            required>
                                            <option defaultValue>{formID.saleManager}</option>
                                            <option value="andres">Andrés García</option>
                                            <option value="brayan">Brayan Padilla</option>
                                            <option value="sebastian">Juan Sebastián</option>
                                            <option value="norberto">Norberto Medina</option>
                                            <option value="francisco">Francisco Javier</option>
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
        </>
    )
}
export default UpdateSales