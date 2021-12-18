import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { Provider } from 'react-redux'

import RegistrationContainer from "./pages/registration/RegistrationContainer";
import ProfileContainer from "./pages/profile/ProfileContainer";
import MainPageContainer from "./pages/main/MainPageContainer";
import NotFoundPageContainer from "./pages/notFoundPage/NotFoundPageContainer";
import LoginContainer from "./pages/login/LoginContainer";
import WithRedirectAuthHoc from "./hocs/WithRedirectAuthHoc";
import WithRedirectNoAuthHoc from "./hocs/WithRedirectNoAuthHoc";
import Header from './components/Header/Header'
import { store } from "./store/rootStore";

import './App.css';

const routes = [
    {
        path: "/",
        render: () => <MainPageContainer />
    },
    {
        path: "/registration",
        render: () => (
            <WithRedirectNoAuthHoc>
                <RegistrationContainer />
            </WithRedirectNoAuthHoc>
        )
    },
    {
        path: "/profile",
        render: () => (
            <WithRedirectAuthHoc>
                <ProfileContainer />
            </WithRedirectAuthHoc>
        )
    },
    {
        path: "/login",
        render: () => (
            <WithRedirectNoAuthHoc>
                <LoginContainer />
            </WithRedirectNoAuthHoc>
        )
    },
    {
        path: '*',
        render: () => <NotFoundPageContainer/>
    }
]

export default function App() {
  return (
      <Provider store={store}>
          <div>
              <Router>
                  <Header />
                  <Switch>
                      {routes.map((item) =>(
                          <Route
                              exact
                              key={item.path}
                              path={item.path}
                              render={item.render}
                          />
                      ))}
                  </Switch>
              </Router>
          </div>
      </Provider>
  );
}
