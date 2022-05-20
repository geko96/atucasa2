import React from 'react';
import NavBar from '../NavBar/NavBar';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route} from 'react-router-dom'


export default function Router() {
    return (
      <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route exact path='/' element={ <ItemListContainer/> } />
            <Route exact path='/category/:id' element={<ItemListContainer/>}/>
            <Route exact path='/item/:id' element={<ItemDetailContainer/>}/>
            
        </Routes>
      </BrowserRouter>
    );
  }