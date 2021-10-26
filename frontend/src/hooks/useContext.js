import React, { useState, useEffect } from 'react';
import useLocalStorage from './useLocalStorage'

const UseContext = React.createContext();

function UseProvider(props) {

  const { children } = props;

  const generateUUID = () => { // Public Domain/MIT
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

  const [openModal, setOpenModal] = useState(false); // state Modal and function to set

  const [formNewSale, setFormNewSale] = useState({ id: generateUUID() });
  const [sales, saveSales] = useLocalStorage('SALES_V1', []); //nuevo Hook para localStorageItem
  const [updateSale, setUpdateSale] = useState({});
  const [ventas, setVentas] = useState([]);

  const [formNewProduct, setFormNewProduct] = useState({ id: generateUUID() });
  const [products, saveProducts] = useLocalStorage('PRODUCTS_V1', []); //nuevo Hook para localStorageItem
  const [updateProduct, setUpdateProduct] = useState({});
  const [productos, setProductos] = useState([]);

  const [formNewSupplier, setFormNewSupplier] = useState({ id: generateUUID() });
  const [suppliers, saveSuppliers] = useLocalStorage('SUPPLIERS_V1', []); //nuevo Hook para localStorageItem

  const [searchValue, setSearchValue] = useState(''); //props input for Search

  let searchedSale = [];
  !searchValue.length > 0 ? searchedSale = sales : searchedSale = sales.filter(item => item.description.toLowerCase().includes(searchValue.toLowerCase())); //filter Search text

  let searchedProduct = [];
  !searchValue.length > 0 ? searchedProduct = products : searchedProduct = products.filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase())); //filter Search text


  // const addItem = (form, array, save) => {
  //   const newItem = [...array];
  //   newItem.push(form);
  //   save(newItem)
  // }

  const addItem = (form, array, save, option) => {
    try {
      const newItem = [...array];
      newItem.push(form);
      save(newItem);
      console.log('oppppppp',option);
      fetch(`http://137.184.137.28:5000/${option}/create`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
      });
      console.log(ventas);
    } catch (error) {
      console.log('error', error);
    }

  }

  // const deleteItem = (id, array, save) => {
  //   const newItem = array.filter(item => item.id !== id);
  //   save(newItem)
  // }

  const deleteItem = (id, array, save, option) => {
    const newItem = array.filter(item => item.id !== id);
    save(newItem)
    fetch(`http://137.184.137.28:5000/${option}/d/${id}`,
      {
        method: 'DELETE',
      })
      .then(response => response.json()
      ).catch((error) => {
        console.log(error);
      });
  }

  const deleteSupplier = (supplier) => {
    const newItem = suppliers.filter(item => item.supplier !== supplier);
    saveSuppliers(newItem)
  }

  // const updateItem = (array, save, value) => {
  //   let newItem = [...array]
  //     .map((item) => ((item.id === value.id) ? item = value : item));
  //   save(newItem)
  // }

  const updateItem = (array, save, value, option) => {
    try {
      let newItem = [...array]
        .map((item) => ((item.id === value.id) ? item = value : item));
      save(newItem)
      fetch(`http://137.184.137.28:5000/${option}/u/${value.id}`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(value)
      });
    } catch (error) {
      console.log('error', error);
    }
  }

  const initSaleEdit = (id, option) => {
    setUpdateSale(searchedSale.filter((item) => ((item.id === id)))[0]);
    fetch(`http://137.184.137.28:5000/${option}/${id}`)
      .then(response => response.json())
      .then(data => { setUpdateSale(data); }
      ).catch((error) => {
        console.log(error);
      });

  }

  const initProductEdit = (id,option) => {
    setUpdateProduct(searchedProduct.filter((item) => ((item.id === id)))[0]);
    fetch(`http://137.184.137.28:5000/${option}/${id}`)
    .then(response => response.json())
    .then(data => { setUpdateSale(data); }
    ).catch((error) => {
      console.log(error);
    });
  }

  useEffect(() => {
    if (searchValue !== "") {
      fetch('http://137.184.137.28:5000/ventas')
        .then(response => response.json())
        .then(data => {
          setVentas(data);
        }
        ).catch((error) => {
          console.log(error);
        });

    } else {

      fetch('http://137.184.137.28:5000/ventas')
        .then(response => response.json())
        .then(data => {

          setVentas(data);
        }
        ).catch((error) => {
          console.log(error);
        });

    }
  }, [searchValue])


  useEffect(() => {
    if (searchValue !== "") {
      fetch('http://137.184.137.28:5000/productos')
        .then(response => response.json())
        .then(data => {
          setProductos(data);
        }
        ).catch((error) => {
          console.log(error);
        });

    } else {

      fetch('http://137.184.137.28:5000/productos')
        .then(response => response.json())
        .then(data => {


          setProductos(data);
        }
        ).catch((error) => {
          console.log(error);
        });

    }
  }, [searchValue])
  return (
    <UseContext.Provider value={{
      searchValue,  //COMPONENT -> Search.jsx
      openModal,  //CONTAINER -> NewSale.jsx, NewProduct.jsx, UpdateProduct.jsx
      formNewSale,  //CONTAINER -> NewSale.jsx
      updateSale, //CONTAINER -> UpdateSale.jsx
      searchedSale, //CONTAINER -> Sales.jsx
      sales, //CONTAINER -> Sales.jsx, NewSale.jsx, UpdateSale.jsx  
      saveSales, //CONTAINER -> Sales.jsx, NewSale.jsx, UpdateSale.jsx 
      formNewProduct,  //CONTAINER -> NewProduct.jsx
      searchedProduct, //CONTAINER -> Products.jsx
      updateProduct, //CONTAINER -> UpdateProduct.jsx
      products, //CONTAINER -> Products.jsx, NewProduct.jsx, UpdateProduct.jsx  
      saveProducts, //CONTAINER -> Products.jsx, NewProduct.jsx, UpdateProduct.jsx 
      formNewSupplier, //MODAL-COMPONENT -> NewSupplier.jsx
      suppliers, //MODAL-COMPONENT -> NewSupplier.jsx //CONTAINER -> NewProduct.jsx, UpdateProduct.jsx
      saveSuppliers, //MODAL-COMPONENT -> NewSupplier.jsx
      setSearchValue, //CONTAINER -> Search.jsx
      setOpenModal, //CONTAINER -> NewSale.jsx, NewProduct.jsx, UpdateProduct.jsx //MODAL-COMPONENT -> NewSupplier.jsx
      addItem, //CONTAINER -> NewSale.jsx, NewProduct.jsx //MODAL-COMPONENT -> NewSupplier.jsx
      deleteItem, //CONTAINER -> Sales.jsx, Products.jsx
      updateItem, //CONTAINER -> UpdateSale.jsx, UpdateProduct.jsx     
      generateUUID, //CONTAINER -> NewSale.jsx, NewProduct.jsx //MODAL-COMPONENT -> NewSupplier.jsx
      setFormNewSale,  //CONTAINER -> NewSale.jsx
      setUpdateSale, //CONTAINER -> UpdateSale.jsx
      initSaleEdit, //CONTAINER -> Sales.jsx
      setFormNewProduct,  //CONTAINER -> NewProduct.jsx
      setUpdateProduct, //CONTAINER -> UpdateProduct.jsx
      initProductEdit, //CONTAINER ->  Products.jsx
      setFormNewSupplier, //MODAL-COMPONENT -> NewSupplier.jsx
      deleteSupplier, //CONTAINER -> NewProduct.jsx
      ventas,
      productos,
    }}>
      {children}
    </UseContext.Provider>
  )
}

export { UseContext, UseProvider }