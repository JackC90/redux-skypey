import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import Sidebar from '../components/sidebar/Sidebar';
import Main from '../components/main/Main';
import store from '../store';
import _ from 'lodash';

const App = () => {
  const { contacts } = store.getState();

  return (
    <div className="App">
      <Sidebar contacts={_.values(contacts)} />
      <Main />
    </div>
  );
}

export default App;
