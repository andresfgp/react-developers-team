import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Login from '../containers/Login';
import Register from '../containers/Register';
import NewSale from '../containers/NewSale';
import Sales from '../containers/Sales';
import Products from '../containers/Products';
import NewProduct from '../containers/NewProduct';
import UpdateSale from '../containers/UpdateSale';
import UpdateProduct from '../containers/UpdateProduct';
import '../assets/styles/App.scss';


const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={Sales} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/newSale' component={NewSale} />
          <Route exact path='/newProduct' component={NewProduct} />
          <Route exact path='/products' component={Products} />
          <Route exact path='/updateSale/:id' component={UpdateSale} />
          <Route exact path='/updateProduct/:id' component={UpdateProduct} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
