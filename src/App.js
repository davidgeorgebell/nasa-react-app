import React from 'react';
import Header from './components/Header';
import DataDetails from './components/DataDetails'

import './App.css';


class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <DataDetails />
      </div>
    )
  }
}


export default App;
