import React, { useContext } from 'react'
import '../assets/styles/containers/Products.scss';
import ProductList from '../components/ProductList';
import { UseContext } from '../hooks/useContext'
import Search from '../components/Search';

const Products = (props) => {

    const { searchedProduct, deleteItem, initProductEdit, products, saveProducts } = useContext(UseContext);

    const handleOnClick = (e) => {
        props.history.push('/newProduct');
    };

    return (
        <>
            <Search name="algún producto"/>
            <div className='products__container'>
                <div className='products__container-btn'>
                    <button onClick={handleOnClick}>+</button>
                </div>
                <ProductList
                    searchedProduct={searchedProduct}
                    deleteItem={deleteItem}
                    initProductEdit={initProductEdit}
                    products={products}
                    saveProducts={saveProducts} />
            </div>
        </>
    )
}

export default Products
