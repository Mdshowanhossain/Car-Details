import { BrowserRouter, Route, Router } from 'react-router-dom';
import './App.css';
import DataProvider from './Components/DataProvider/DataProvider';
import Navbar from './Components/Header/Navbar';
import Products from './Components/Products/Products';

function App() {
  return (
    <DataProvider>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Products />
        </BrowserRouter>
      </div>
    </DataProvider>
  );
}

export default App;
