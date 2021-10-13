import React from 'react'
import '../assets/styles/containers/Products.scss';
import ProductList from '../components/ProductList';

const Home = (props) => {

    const handleOnClick = (e) => {
        props.history.push('/newProduct');
    };

    return (
        <>
            <div className='products__container'>
                <h1>Productos - EquipoDeveloopers</h1>
                <div className='products__container-btn'>
                    <button onClick={handleOnClick}>+</button>
                </div>
                <ProductList />
            </div>
        </>
    )
}

export default Home
