import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../assets/styles/components/SalesList.scss';
import { ReactComponent as DeleteIcon } from '../assets/static/delete.svg';
import { ReactComponent as UpdateIcon } from '../assets/static/edit.svg';

const SalesList = (props,p) => {

    const { searchedSale, deleteSales, updateSales} = props;
    const [currentPage, setCurrentPage] = useState(0)
    const elementNumber = 5;

    const filteredSales = () => {
        return searchedSale.slice(currentPage, currentPage + elementNumber)
    }

    const nextPage = () => {
        if (searchedSale.length > currentPage + elementNumber)
            setCurrentPage(currentPage + elementNumber);
    }

    const prevPage = () => {
        if (currentPage > 0)
            setCurrentPage(currentPage - elementNumber);
    }

    const onDelete = (id) => {
        deleteSales(id);
    }

    const onEdit = (id) => {
        console.log(props);

        updateSales(id);
    }

    return (
        <div className='saleslist container flex-column'>
            <div className='saleslist-table saleslist'>
                <table className='table table-dark table-striped table-bordered' id='tb'>
                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
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
                                <tr key={item.id}>
                                    <td><DeleteIcon className="Icon Icon-delete" onClick={() => onDelete(item.id)} /></td> 
                                    <td><Link to={`/updateSale/${item.id}`}><UpdateIcon className="Icon Icon-update" onClick={() => onEdit(item.id)} /></Link></td>
                                    <td>{item.id}</td>
                                    <td>{item.valUni}</td>
                                    <td>{item.description}</td>
                                    <td>{item.cantidad}</td>
                                    <td>{item.totalSaleValue}</td>
                                    <td>{item.docCliente}</td>
                                    <td>{item.estado}</td>
                                    <td>{item.initialPaymentDate}</td>
                                    <td>{item.finalPaymentDate}</td>
                                    <td>{item.saleManager}</td>
                                </tr>
                            );
                        })
                        }
                    </tbody>
                </table>
                <div className="saleslist-table-empty">
                    {searchedSale.length === 0 ? <h6>NO EXISTEN VENTAS</h6> : null}
                </div>
            </div>

            <div className='container_pag'>
                <button className="btn btn-primary" onClick={prevPage}>Anterior</button>
                {/* &nbsp; */}
                <h4>{(currentPage / elementNumber) + 1}</h4>
                {/* &nbsp; */}
                <button className="btn btn-primary" onClick={nextPage}>Siguiente</button>
            </div>
        </div>
    )
}

export default SalesList
