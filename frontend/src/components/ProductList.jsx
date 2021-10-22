import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../assets/styles/components/ProductList.scss';
import { ReactComponent as DeleteIcon } from '../assets/static/delete.svg';
import { ReactComponent as UpdateIcon } from '../assets/static/edit.svg';


const ProductList = (props) => {

    const { searchedProduct, deleteItem, initProductEdit, products, saveProducts} = props;

    const [currentPage, setCurrentPage] = useState(0)
    const elementNumber = 5;

    const filteredProduct = () => {
        return searchedProduct.slice(currentPage, currentPage + elementNumber)
    }

    const nextPage = () => {
        if (searchedProduct.length > currentPage + elementNumber)
            setCurrentPage(currentPage + elementNumber);
    }

    const prevPage = () => {
        if (currentPage > 0)
            setCurrentPage(currentPage - elementNumber);
    }

    const onDelete = (id) => {
        deleteItem(id,products, saveProducts,"productos");
    }

    const onEdit = (id) => {
        initProductEdit(id,"producto");
    }

    return (
        <>
            <section className='productList'>
                <div className='productList__container'>
                    <h1>Productos</h1>
                    <div className='productList-table'>
                        <table className='table table-dark table-striped table-bordered' id='tb'>
                            <thead>
                                <tr>
                                    <th>Eliminar</th>
                                    <th>Editar</th>
                                    <th>Identificador único de producto</th>
                                    <th>Nombre</th>
                                    <th>Stock</th>
                                    <th>Caracteristicas</th>
                                    <th>Precio</th>
                                    <th>Proveedor</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredProduct().length > 0 && filteredProduct().map(item => {
                                    return (
                                        <tr key={item.id}>
                                            <td><div className="icons"><DeleteIcon className="Icon Icon-delete" onClick={() => onDelete(item.id)} /></div></td> 
                                            <td><Link className="icons" to={`/updateProduct/${item.id}`}><UpdateIcon className="Icon Icon-update" onClick={() => onEdit(item.id)} /></Link></td>
                                            <td>{item.id}</td>
                                            <td>{item.name}</td>
                                            <td>{item.stock}</td>
                                            <td>{item.type}</td>
                                            <td>{`$${item.price}`}</td>
                                            <td>{item.supplier}</td>
                                        </tr>
                                    );
                                })
                                }
                            </tbody>
                        </table>
                        <div className="productList-table-empty">
                            {searchedProduct.length === 0 ? <h6>NO EXISTEN PRODUCTOS</h6> : null}
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

export default ProductList