import React, { Component } from 'react';
import './App.css';

import AddTask from './AddTask/AddTask';

import Header from '../component/Header/Header';


class App extends Component {
  render() {
    return (
      <div className="body-div">
        <div className="App">
          <Header />
          <AddTask />
        </div>
      </div>
      
    );
  }
}

export default App;
