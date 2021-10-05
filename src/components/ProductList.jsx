import React from 'react'
import '../assets/styles/containers/Products.scss';
import { products } from '../data/products'

const ProductsList = (propsss) => {
    return (
        <div className='products__list container'>
            <table className='table table-dark table__products table-striped table-bordered' id='tbp'>
                <thead>
                    <tr>
                        <th>Id Producto</th>
                        <th>Nombre</th>
                        <th>Stock</th>
                        <th>Caracteristicas</th>
                        <th>Precio</th>
                        <th>Proveedor</th>
                    </tr>
                </thead>
                <tbody>

                    {products.length > 0 &&
                        products.map(item => {
                            return (
                                <tr key = {item.idProducto}>
                                    <td>{item.idProducto}</td>
                                    <td>{item.Nombre}</td>
                                    <td>{item.Stock}</td>
                                    <td>{item.Caracteristicas}</td>
                                    <td>{item.Precio}</td>
                                    <td>{item.Proveedor}</td>
                                </tr>
                            );
                        })
                    }


                </tbody>
            </table>
        </div>
    )

}

export default ProductsList
