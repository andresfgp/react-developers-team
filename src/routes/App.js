import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Login from '../containers/Login';
import Register from '../containers/Register';
import NewSale from '../containers/NewSale';
import Modal from '../containers/Modal';
import Home from '../containers/Home';
import '../assets/styles/App.scss';


const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/newSale' component={NewSale} />
          <Route exact path='/modal' component={Modal} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
