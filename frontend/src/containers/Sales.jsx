import React, { useContext } from 'react'
// import { Link } from 'react-router-dom';
import '../assets/styles/containers/Sales.scss';
import Search from '../components/Search';
import SalesList from '../components/SalesList';
import { UseContext } from '../hooks/useContext'

const Sales = (props) => {

    const { searchedSale, deleteItem, initSaleEdit, sales, saveSales } = useContext(UseContext);

    const handleOnClick = (e) => {
        props.history.push('/newSale');
    };

    return (
        <>
            <Search name="alguna venta"/>
            <div className='sales__container'>
                <div className='sales__container-btn'>
                    <button onClick={handleOnClick}>+</button>
                </div>
                <SalesList
                    searchedSale={searchedSale}
                    deleteItem={deleteItem}
                    initSaleEdit={initSaleEdit}
                    sales={sales}
                    saveSales={saveSales} />
            </div>
        </>
    )
}

export default Sales