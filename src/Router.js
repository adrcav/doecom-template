import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { margins } from './components/theme';

import Header from './components/Header';
import Footer from './components/Footer';
import Loading from './components/Loading';
// import { errorMessage } from './services/errors';

import GiveSuccess from './components/GiveSuccess';
import RegisterSuccess from './components/RegisterSuccess';

import Main from './containers/Main';
import Cause from './containers/Cause';
import Give from './containers/Give';
import Login from './containers/Login';
import Register from './containers/Register';

const Router = () => {
  let loading = false;

  if (loading) return (<Loading />);

  return (
    <BrowserRouter>
      <Header />
      <div style={{ marginTop: margins.header }}>
        <Switch>
          <Route path="/" component={Main} exact />
          <Route path="/login" component={Login} />
          <Route path="/register/success" component={RegisterSuccess} />
          <Route path="/register" component={Register} />
          <Route path="/cause/:id" component={Cause} />
          <Route path="/give/success" component={GiveSuccess} />
          <Route path="/give/:id" component={Give} />
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
