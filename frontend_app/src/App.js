import React from 'react';

import ProfileContainer from "./pages/profile/ProfileContainer";
import Header from './components/Header/Header'
import Content from './components/Content/Content'

import './App.css';

export default function App() {
  return (
      <div>
        <Header />
        {/*<Content />*/}
          <ProfileContainer />
      </div>
  );
}
