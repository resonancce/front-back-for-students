import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import { Provider } from 'react-redux'

import RegistrationContainer from "./pages/registration/RegistrationContainer";
import ProfileContainer from "./pages/profile/ProfileContainer";
import Header from './components/Header/Header'
import Content from './components/Content/Content'
import { store } from "./store/rootStore";

import './App.css';

const routes = [
    {
        path: "/registration",
        element: <RegistrationContainer />
    },
    {
        path: "/profile",
        element: <ProfileContainer />
    }
]

export default function App() {
  return (
      <Provider store={store}>
          <div>
              <Router>
                  <Header />
                  <Routes>
                      {routes.map((item) =>(
                          <Route
                              key={item.path}
                              path={item.path}
                              element={item.element}
                          />
                      ))}
                  </Routes>
              </Router>
              {/*<Content />*/}
          </div>
      </Provider>
  );
}
