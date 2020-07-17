import React, { useContext } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ReactGA from 'react-ga';
import { margins } from './components/theme';

import { AuthContext } from './services/auth';

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
import Account from './containers/Account';
import Logout from './containers/Logout';
import PrivacyPolicy from './containers/PrivacyPolicy';
import TermsOfUse from './containers/TermsOfUse';

import { userInfo as dataUserInfo } from './util/data';

const { REACT_APP_GA_ID } = process.env;

const Router = () => {
  let loading = false;
  const auth = useContext(AuthContext);
  let userInfo = {};

  ReactGA.initialize(REACT_APP_GA_ID);
  ReactGA.pageview(window.location.pathname + window.location.search);

  if (auth.isAuthenticated()) {
    userInfo = dataUserInfo;
  }

  if (loading) return (<Loading />);

  return (
    <BrowserRouter>
      <Header userInfo={userInfo} />
      <div style={{ marginTop: margins.header }}>
        <Switch>
          <Route path="/" component={Main} exact />
          <Route path="/login" component={Login} />
          <Route path="/register/success" component={RegisterSuccess} />
          <Route path="/register" component={Register} />
          <Route path="/account" component={Account} />
          <Route path="/cause/:id" component={Cause} />
          <Route path="/give/success" component={GiveSuccess} />
          <Route path="/give/:id" component={Give} />
          <Route path="/logout" component={Logout} />
          <Route path="/privacy-policy" component={PrivacyPolicy} />
          <Route path="/terms-of-use" component={TermsOfUse} />
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
