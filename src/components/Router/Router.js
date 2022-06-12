import React from 'react';
import NavBar from '../NavBar/NavBar';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import Cart from '../Cart/Cart';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Orders from '../Orders/Orders';


export default function Router() {
    return (
      <BrowserRouter>
        <NavBar id="navbar"/>
        <Routes>
            <Route exact path='/' element={ <ItemListContainer/> } />
            <Route exact path='/category/:id' element={<ItemListContainer/>}/>
            <Route exact path='/item/:id' element={<ItemDetailContainer/>}/>
            <Route exact path='/cart' element={ <Cart/> } />
            <Route exact path='/orders' element={ <Orders/> } />   
        </Routes>
      </BrowserRouter>
    );
  }