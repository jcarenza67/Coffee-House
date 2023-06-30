import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import InventoryControl from './InventoryControl';
import Header from './Header';


function App() {
  return (
    <div className="app-container">
      <Header />
      <InventoryControl />
    </div>
  );
}

export default App;
