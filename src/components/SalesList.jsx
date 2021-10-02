import React from 'react'
import '../assets/styles/containers/Home.scss';
import { sales } from '../data/sales'

const SalesList = (props) => {
    return (
        <div className='sales__list container'>
            <table className='table table-dark table__sales table-striped table-bordered' id='tb'>
                <thead>
                    <tr>
                        <th>Id Venta</th>
                        <th>Valor</th>
                        <th>Descripción</th>
                        <th>Fecha inicial de pago</th>
                        <th>Fecha final de pago</th>
                        <th>Responsable</th>
                    </tr>
                </thead>
                <tbody>

                    {sales.length > 0 &&
                        sales.map(item => {
                            return (
                                <tr>
                                    <td>{item.idVenta}</td>
                                    <td>{item.valor}</td>
                                    <td>{item.desc}</td>
                                    <td>{item.finipago}</td>
                                    <td>{item.ffpago}</td>
                                    <td>{item.responsable}</td>
                                </tr>
                            );
                        })
                    }


                </tbody>
            </table>
        </div>
    )

}

export default SalesList
