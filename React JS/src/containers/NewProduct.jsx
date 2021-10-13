import React, {useState} from 'react'
import '../assets/styles/containers/NewProduct.scss';
import CurrencyInput from 'react-currency-input-field';

const NewProduct = (props) => {

    function generateUUID() { // Public Domain/MIT
        let d = new Date().getTime();//Timestamp
        let d2 = (performance && performance.now && (performance.now() * 1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
          let r = Math.random() * 16;//random number between 0 and 16
          if (d > 0) { //Use timestamp until depleted
            r = (d + r) % 16 | 0;
            d = Math.floor(d / 16);
          } else { //Use microseconds since page-load if supported
            r = (d2 + r) % 16 | 0;
            d2 = Math.floor(d2 / 16);
          }
          return (c === 'x' ? r : (r && 0x3 | 0x8)).toString(16);
        });
      }

    const [form, setValues] = useState({id:generateUUID()});
    
    const handleInput = (e) => { //recopilar informacion de formulario
        setValues({
          ...form,
          [e.target.name]: e.target.value,
        });
      };

    const handleSubmit = (e) => { // enviar informacion formulario
        e.preventDefault();
        try {
          // if (!sales.some((item) => item.id === form.id)) {
          //   props.history.push('/');
          // }
          props.history.push('/');
        } catch (error) {
          console.log('error', error);
        }
      };

    return (
        <>
            <div className='product__container'>
                <div className="row">
                    <div className="col">
                        <div>
                            <h1 className='col__text'>Nuevo Producto</h1>
                            <form onSubmit={handleSubmit}>
                                <fieldset disabled>
                                    <div className='mb-3'>
                                        <label>ID producto</label>
                                        <input
                                            type="text"
                                            className = "form-control"
                                            placeholder = {form.id}/>
                                    </div>
                                    
                                </fieldset>
                                <div>
                                    <label>Nombre</label>
                                    <input
                                        type="text"
                                        className = "form-control"
                                        placeholder = "Razer Blackwidow"/>
                                </div>
                                <div>
                                    <label>Cantidad</label>
                                    <input
                                        type="number"
                                        className = "form-control"
                                        placeholder = ""/>
                                </div>
                                <div>
                                    <label>Caracteristicas</label>
                                    <textarea
                                        type="text"
                                        className = "form-control"
                                        placeholder = ""/>
                                </div>
                                <div className='mb-3'>
                                    <label>Precio</label>
                                    <CurrencyInput
                                        name='price_product'
                                        className='form-control'
                                        onChange={handleInput}
                                        placeholder='$'
                                        prefix='$'
                                        step={1}
                                        required
                                    />
                                </div>
                                <div className='col__productManager'>
                                    <div className='col__productManager-select'>
                                        <select 
                                            className="form-select"
                                            name='productManager'
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
        </>
    )
}

export default NewProduct