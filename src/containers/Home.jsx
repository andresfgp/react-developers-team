import React from 'react'
// import { Link } from 'react-router-dom';
import '../assets/styles/containers/Home.scss';
import Search from '../components/Search';
import SalesList from '../components/SalesList';

const Home = (props) => {

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
                <SalesList />
            </div>
         </>
    )
}

export default Home
