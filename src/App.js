import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>

      <div className="App">

        <NavBar/>
        
        
        <Routes>
          <Route path="/" element={<ItemListContainer text="Lista de Productos"/>}/>
          <Route path="/productos" element={<ItemListContainer text="Lista de Productos"/>}/>
          <Route path="/productos/:categoryId" element={<ItemListContainer/>}/>
          <Route path="/detail/:seeId" element={<ItemDetailContainer/>}/>
          <Route path="*" element={<Navigate to="/"/>}/>
        </Routes>
       
      </div>

    </BrowserRouter>
  );
}

export default App;
