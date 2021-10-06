import React, {useState} from 'react';
import useLocalStorage from './useLocalStorage'

const UseContext= React.createContext();

function UseProvider(props){

    const { children } = props;

    const generateUUID=()=> { // Public Domain/MIT
      let d = new Date().getTime();//Timestamp
      let d2 = (performance && performance.now && (performance.now() * 1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        let r = Math.random() * 16;//random number between 0 and 16
        if (d > 0) { //Use timestamp until depleted
          r = (d + r) % 16 | 0;
          d = Math.floor(d / 16);
        } else { //Use microseconds since page-load if supported
          r = (d2 + r) % 16 | 0;
          d2 = Math.floor(d2 / 16);
        }
        return (c === 'x' ? r : (r && 0x3 | 0x8)).toString(16);
      });
    }

    const [openModal,setOpenModal]=useState(false); // state Modal and function to set
    const [formNewSale, setFormNewSale] = useState({id:generateUUID()});

    const [sales,saveSales] = useLocalStorage('SALES_V1',[]); //nuevo Hook para localStorageItem

    const [searchValue,setSearchValue]=useState(''); //props input for Search

    let searchedSale=[];
    !searchValue.length>0?searchedSale=sales:searchedSale=sales.filter(item=>item.description.toLowerCase().includes(searchValue.toLowerCase())); //filter Search text
    
    const addSales=(form)=>{ // New array with important true or false
      const newSales=[...sales]; //nueva 
      newSales.push(form);
      saveSales(newSales) //setSales change for saveSale
    }
    const deleteSales=(id)=>{ // New array with delete Sales
      const newSales=sales.filter(item=>item.id!==id); //nueva lista
      saveSales(newSales) //setSales change for saveSale
    }
    return(
        <UseContext.Provider value={{
            searchValue,  //COMPONENT -> Search.jsx
            formNewSale,  //CONTAINER -> NewSale.jsx
            openModal,  //CONTAINER -> NewSale.jsx
            searchedSale, //CONTAINER -> Home.jsx
            setSearchValue, //CONTAINER -> Search.jsx
            setFormNewSale,  //CONTAINER -> NewSale.jsx
            setOpenModal, //CONTAINER -> NewSale.jsx
            addSales, //CONTAINER -> NewSale.jsx
            generateUUID, //CONTAINER -> NewSale.jsx
            deleteSales, //CONTAINER -> Home.jsx            
        }}>
            {children}
        </UseContext.Provider>
    )
}

export {UseContext, UseProvider}