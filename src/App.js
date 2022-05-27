import './App.css';
import Router from './components/Router/Router';
import { createContext } from 'react';



export let contexto = createContext()
const Provider = contexto.Provider

console.log(contexto)

let ContextValue = {
  "cart": [],
  "Credentials":[],
  "products":[]
}


function App() {
  return (
    <Provider value={ContextValue}>
      <Router/>
    </Provider>
  );
}

export default App;