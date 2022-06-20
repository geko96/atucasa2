import './App.css';
import Router from './components/Router/Router';
import {Provider} from './components/Context/context';
import { useState } from 'react';



function App() {

  const [cart, setCart] = useState([]);

  let ContextValue = {
    "cart": cart,
    "setCart": setCart,
    "Credentials":[],
    "products":[]
  }


  return (
    <Provider value={ContextValue}>
      <Router/>
    </Provider>
  );
}

export default App;