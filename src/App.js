import './App.css';
import Router from './components/Router/Router';
import {Provider} from './components/Context/context';
import { useState } from 'react';



function App() {

  const [cart, setCart] = useState([]);
  const [order, setOrder] = useState([]);

  let ContextValue = {
    "cart": cart,
    "setCart": setCart,
    "order": order,
    "setOrder": setOrder,
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