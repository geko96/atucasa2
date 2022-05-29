import './App.css';
import Router from './components/Router/Router';
import { createContext } from 'react';
export const StorageId = 777
let ContextValue = {
  "cart": [],
  "Credentials":[],
  "products":[]
}
if (localStorage.getItem(StorageId) == null) {
  console.log('Persistencia Vacia')
  let ContextValue = JSON.parse(localStorage.getItem(StorageId))

}else {
  console.log('Persistencia en uso')
  ContextValue = JSON.parse(localStorage.getItem(StorageId))
}


export let contexto = createContext()
const Provider = contexto.Provider

console.log(contexto)




function App() {
  return (
    <Provider value={ContextValue}>
      <Router/>
    </Provider>
  );
}

export default App;