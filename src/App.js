import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/about';
import Cart from './components/cart';
import Home from './components/home';
import Navbar from './components/navbar';
import Shop from './components/shop';
// import AddProduct from './components/admin/addItem';
import ProductScr from './components/productScreen';
import LoginScreen from './components/loginScreen';

function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route path="/products/:id" component={ProductScr} />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/login" component={LoginScreen} />
        <Route path="/shop" component={Shop} />
        <Route path="/cart:id?" component={Cart} />
        {/* <Route path="/addProduct" component={AddProduct} /> */}
      </Switch>
      </BrowserRouter>
      {/* <Home/>
      <About/> */}
    </>
  );
}

export default App;
