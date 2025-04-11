import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router";
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
        element:  <MainPageContainer />
    },
    // {
    //     path: "/registration",
    //     element:
    //         <WithRedirectNoAuthHoc>
    //             <RegistrationContainer />
    //         </WithRedirectNoAuthHoc>
    //
    // },
    {
        path: "/profile",
        element:
            <WithRedirectAuthHoc>
                <ProfileContainer />
            </WithRedirectAuthHoc>

    },
    {
        path: "/login",
        element:
            <WithRedirectNoAuthHoc>
                <LoginContainer />
            </WithRedirectNoAuthHoc>

    },
    // {
    //     path: '*',
    //     element:  <NotFoundPageContainer/>
    // }
]

export default function App() {

  return (
      <Provider store={store}>
          <div>
              <BrowserRouter>
                  <Header />
                  <Routes>
                      {routes.map((item) =>(
                          <Route
                              exact
                              key={item.path}
                              path={item.path}
                              element={item.element}
                          />
                      ))}
                  </Routes>
              </BrowserRouter>
          </div>
      </Provider>
  );
}
