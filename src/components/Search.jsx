
   
import React from 'react';
import '../assets/styles/components/Search.scss';

const Search = (props) => {

  const handleInput = (event) => { //recopilar informacion del search
    console.log(event.target.value);
  };

  return (
    <>
      <section className='main'>
        <h2 className='main__title'>¿Buscas alguna venta?</h2>
        <input
          name='search'
          type='text'
          className="input"
          placeholder='Buscar...'
          onChange={handleInput}
        />
      </section>
    </>
  );
};

export default Search;