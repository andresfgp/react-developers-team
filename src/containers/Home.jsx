import React from 'react'
// import { Link } from 'react-router-dom';
import '../assets/styles/containers/Home.scss';
import Search from '../components/Search';

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

                <div className='sales__list'>
                    {/* insertar codigo aqui para mostrar ventas */}
                </div>
            </div>
        </>
    )
}

export default Home
