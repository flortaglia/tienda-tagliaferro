import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom";
import  Cart  from './components/Cart';
import {CartProvider} from "./context/CartContext"
import Form from './components/Form';
import Footer from './components/Footer';


function App() {

  return (
    <CartProvider >
      <BrowserRouter>
        <div className="App">
          <NavBar/>
          
          <Routes>
            <Route path="/" element={<ItemListContainer />}/>
            <Route path="/productos/:categoryId" element={<ItemListContainer/>}/>
            <Route path="/detail/:seeId" element={<ItemDetailContainer/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/cart/form" element={<Form />}/>
            <Route path="*" element={<Navigate to="/"/>}/>
          </Routes>
          <Footer/>
        </div>
      </BrowserRouter>
    </CartProvider>  
  );
}

export default App;
