import React from 'react'
import { useState } from 'react'
import '../assets/styles/components/SalesList.scss';
import { sales } from '../data/sales'
// import { Sales } from '../interfaces/fetchAllSalesResponse'

const SalesList = (props) => {

    const [currentPage, setCurrentPage] = useState(0)
    const [search, setSearch] = useState('')

    const filteredSales = () => {
        if (search.length === 0)
            return sales.slice(currentPage, currentPage + 3)
    }

    const nextPage = () => {
        if (sales.length > currentPage + 3)
            setCurrentPage(currentPage + 3);
    }

    const prevPage = () => {
        if (currentPage > 0)
            setCurrentPage(currentPage - 3);
    }

    return (
        <div className='saleslist container flex-column'>
            <div className='saleslist-table saleslist'>
                <table className= 'table table-dark table-striped table-bordered' id='tb'>
                    <thead>
                        <tr>
                            <th>Id Venta</th>
                            <th>V. Unitario</th>
                            <th>Descripción</th>
                            <th>Cantidad</th>
                            <th>Valor Total</th>
                            <th>Cliente</th>
                            <th>Estado</th>
                            <th>Fecha inicial de pago</th>
                            <th>Fecha final de pago</th>
                            <th>Responsable</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredSales().length > 0 && filteredSales().map(item => { 
                            return (
                                <tr key = {item.idVenta}>
                                    <td>{item.idVenta}</td>
                                    <td>{item.valUni}</td>
                                    <td>{item.desc}</td>
                                    <td>{item.cantidad}</td>
                                    <td>{item.valor}</td>
                                    <td>{item.docCliente}</td>
                                    <td>{item.estado}</td>
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

            <div className ='container_pag'>
                <button className="btn btn-primary" onClick={prevPage}>Anterior</button>
                {/* &nbsp; */}
                <h4>{(currentPage / 3) + 1}</h4>
                {/* &nbsp; */}
                <button className="btn btn-primary" onClick={nextPage}>Siguiente</button>
            </div>
        </div>
    )
}

export default SalesList
