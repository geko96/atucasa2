import { useContext } from "react"
import { contexto } from "../Context/context"
import ItemCount from "../Items/ItemCount"
import { Button, Table } from "react-bootstrap"
import './cart.css'
import { StorageId } from "../Context/context"
import React from "react"
import { useEffect , useState } from "react"
import { Link } from "react-router-dom"



export default function Cart () {
  let temp = 0 

    let contexti = useContext(contexto)
    let cart = contexti.cart
    console.log(cart)
    const [count, setCount] = React.useState(0)
    const cartContext = useContext(contexto).cart
    const [amount, setAmount] = React.useState(0)

    useEffect(() => {

      for (let i = 0; i < cartContext.length; i++) {
        temp = temp+cartContext[i].Cantidad
        setCount(temp)
        
        
      }
  
      
  
      
    },[cartContext.lengt, count])

    useEffect(() => {
      //Precio Total Carrito
      let total = 0
      for (let i = 0; i < cartContext.length; i++) {
        console.log('Cantidad :' + cartContext[i].Cantidad + ' precio: ' + cartContext[i].precio)
        total = total + (cartContext[i].Cantidad*cartContext[i].precio)
        setAmount(total)
        
      }
  
      
  
      
    },[])

    function SaveData () {
      
      localStorage.setItem(StorageId,JSON.stringify(contexti))
      document.location.reload()
    }

    function deleteById (elemento) {
      
      let id = cart.findIndex(item => item == elemento.product)
      console.log(id)
      console.log('Valor buscado '+ JSON.stringify(elemento.product) + ' con el resultado '+ id)
      cart.splice(id,1)
      SaveData();
      console.log(cart)
      return
    }

    if (count === 0 ) {
      return (
        <div className="emptyCart">
            <h2>No hay Productos en el carrito</h2>
            <Link to="/" className="botonera">
                <Button variant="primary">Ir a comprar</Button>
                </Link>


          
        </div>
      )
    }

    return (
        <div className="CART">
          <table className="TablaCart">
          <thead>
              <tr>
                  <th> </th>
                  <th>Nombre</th>
                  <th>Cantidad</th>
                  <th>Precio</th>
                  <th>Total</th>
                  <th> </th>
              </tr>
          </thead>
          <tbody>
          {cart.map(product => (
                <tr key={product.nombre}>
                  <td><img className="iconImage" src={product.FullData.img[0]}/></td>
                  <td>{product.nombre}</td>
                  <td>{product.Cantidad}</td>
                  <td>{product.precio}</td>
                  <td>{product.precio*product.Cantidad}</td>
                  <td><button type="button" id={product.nombre} onClick={() => deleteById({product})}>✖</button></td>

                </tr>

              ))}
          </tbody>
          </table>

          <table className="TablaCart">
            <tr><td>Items</td><td>{count}</td></tr>
            <tr><td>Total</td><td>${amount}</td></tr>
            
            
          </table>
          <Button className="left">Comprar</Button>


          
        </div>
      )

      
}

