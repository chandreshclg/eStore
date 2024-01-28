import logo from './logo.svg';
import './App.css';
import TopNavComponent from './Components/TopNav';
import CatNavComponent from './Components/CatNav';
import MainComponent from './Components/MainComponent';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './Components';
import ProductDetails from './Components/ProductDetails';
import CartComponent from './Components/Cart';

function App() {
  return (
    <div className="App">
      <TopNavComponent/>
      <CatNavComponent/>
      <Routes>
        <Route path='/' Component={LandingPage}></Route>
        <Route path='/productDetails' Component={ProductDetails}></Route>
        <Route path='/cart' Component={CartComponent}></Route>
      </Routes>
    </div>
  );
}

export default App;
