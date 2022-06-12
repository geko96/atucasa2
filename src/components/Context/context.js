import { createContext } from 'react';
export const StorageId = 777


export let ContextValue = {
    "cart": [],
    "Credentials":[],
    "products":[]
}

if (localStorage.getItem(StorageId) == null) {
    console.log('Persistencia Vacia')
    
  
}else {
    console.log('Persistencia en uso')
    ContextValue = JSON.parse(localStorage.getItem(StorageId))
}
  
  
export let contexto = createContext()
export const Provider = contexto.Provider