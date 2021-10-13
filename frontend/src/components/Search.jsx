import React, { useContext } from 'react';
import '../assets/styles/components/Search.scss';
import { UseContext } from '../hooks/useContext'

const Search = (props) => {

  const {name}=props;

  const { searchValue, setSearchValue } = useContext(UseContext);

  const handleInput = (event) => { //recopilar informacion del search
    setSearchValue(event.target.value);
  };

  return (
    <>
      <section className='main'>
        <h2 className='main__title'>¿Buscas {name}?</h2>
        <input
          name='search'
          type='text'
          className="input"
          placeholder='Buscar...'
          value={searchValue}
          onChange={handleInput}
        />
      </section>
    </>
  );
};

export default Search;