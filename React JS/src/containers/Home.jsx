import React, { useContext } from 'react'
// import { Link } from 'react-router-dom';
import '../assets/styles/containers/Home.scss';
import Search from '../components/Search';
import SalesList from '../components/SalesList';
import { UseContext } from '../hooks/useContext'

const Home = (props) => {

    const { searchedSale, deleteSales, initSaleEdit } = useContext(UseContext);

    const handleOnClick = (e) => {
        props.history.push('/newSale');
    };

    return (
        <>
            <Search />
            <div className='sales__container'>
                <div className='sales__container-btn'>
                    <button onClick={handleOnClick}>+</button>
                </div>
                <SalesList searchedSale={searchedSale} deleteSales={deleteSales} initSaleEdit={initSaleEdit} />
            </div>
        </>
    )
}

export default Home