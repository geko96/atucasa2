import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/Items/ItemListContainer';
import ItemCount from './components/Items/ItemCount';



function App() {
  return (
    <>
    <NavBar carrito={0}/>
    <ItemListContainer/>
    </>
  );
}

export default App;
