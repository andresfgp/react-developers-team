import React from 'react';
import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../assets/styles/components/SalesList.scss';
import { ReactComponent as DeleteIcon } from '../assets/static/delete.svg';
import { ReactComponent as UpdateIcon } from '../assets/static/edit.svg';
import { ReactComponent as CompletedIcon } from '../assets/static/completed.svg';
import { ReactComponent as CancelIcon } from '../assets/static/cancel.svg';

const SalesList = (props) => {

    const { searchedSale, deleteItem, initSaleEdit, sales, saveSales} = props;
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
        deleteItem(id, sales, saveSales,"ventas");
        // deleteItem(id);
    }

    const onEdit = (id) => {
        initSaleEdit(id,"ventas");
    }
    //location.reload();
    return (
        <>
            <section className='saleslist'>
                <div className='saleslist__container'>
                    <h1>Ventas</h1>
                    <div className='saleslist-table'>
                        <table className='table table-dark table-striped table-bordered' id='tb'>
                            <thead>
                                <tr>
                                    <th>Eliminar</th>
                                    <th>Estado</th>
                                    <th>Identificador único de venta</th>
                                    <th>Descripción</th>
                                    <th>Valor</th>
                                    <th>Cantidad</th>
                                    <th>Valor Total</th>
                                    <th>Cliente</th>
                                    <th>Fecha inicial pago</th>
                                    <th>Fecha final pago</th>
                                    <th>Responsable</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredSales().length > 0 && filteredSales().map(item => {

                                    item.totalSaleValue = item.saleValue * item.saleQuantity;
                                    return (
                                        <tr key={item.id}>
                                            <td><div className="icons"><DeleteIcon className="Icon Icon-delete" onClick={() => onDelete(item.id)} /></div></td>
                                            {item.state === 'En proceso' && <td><Link className="icons" to={`/updateSale/${item.id}`}><UpdateIcon className="Icon Icon-update" onClick={() => onEdit(item.id)} /></Link></td>}
                                            {item.state === 'Completado' && <td><div className="icons"><CompletedIcon className="Icon2" onClick={() => onEdit(item.id)} /></div></td>}
                                            {item.state === 'Cancelado' && <td><div className="icons"><CancelIcon className="Icon2" onClick={() => onEdit(item.id)} /></div></td>}
                                            <td>{item.id}</td>
                                            <td>{item.description}</td>
                                            {/* <td>{item.product_id}</td> */}

                                            {/* <td>{item.hasOwnProperty('product')&&item.product.name}</td> */}
                                            <td>{`$${item.saleValue}`}</td>
                                            <td>{item.saleQuantity}</td>
                                            <td>{`$${item.totalSaleValue}`}</td>
                                            <td></td>
                                            {/* <td>{item.hasOwnProperty('customer')&&item.customer.name}</td> */}
                                            <td>{item.initialPaymentDate}</td>
                                            <td>{item.finalPaymentDate}</td>
                                            {/* <td>{item.saleManager}</td> */}
                                            <td>{item.hasOwnProperty('user') && item.user.name}</td>
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
            </section>
        </>
    )
}

export default SalesList
