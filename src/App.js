import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <>
    <NavBar carrito={0}/>
    <ItemListContainer/>
    </>
  );
}

export default App;
