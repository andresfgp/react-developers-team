import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Login from '../containers/Login';
import Home from '../containers/Home';
import '../assets/styles/App.css';


const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
