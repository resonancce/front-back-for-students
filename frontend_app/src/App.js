import React, { useState } from 'react';

import Content from './components/Content/Content'
import Header from './components/Header/Header'

import './App.css';

export default function App() {
  return (
      <div>
        <Header />
        <Content />
      </div>
  );
}
