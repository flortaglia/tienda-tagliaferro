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
    // <BrowserRouter>

      <div className="App">
        <NavBar/>
        <ItemListContainer text="Soy item list"/>
        <ItemDetailContainer/>
        {/* <Routes>
          <Route path="/" element={<ItemListContainer text="Soy item list"/>}/>
          <Route path="*" element={<Navigate to="/"/>}/>
        </Routes> */}
       
      </div>
    
  );
}

export default App;
