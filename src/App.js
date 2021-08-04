import { BrowserRouter, Link, Route, Router } from 'react-router-dom';
import './App.css';
import DataProvider from './Components/DataProvider/DataProvider';
import Navbar from './Components/Header/Navbar';
import ProductDetail from './Components/ProductDetail/ProductDetail';
import Products from './Components/Products/Products';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />

        <section>
          <Route exact path="/products" component={Products} />
          <Route path="/products/:id" component={ProductDetail} />
        </section>

      </div>
    </BrowserRouter>
  );
}

export default App;
