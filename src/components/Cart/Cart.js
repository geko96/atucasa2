import { useContext } from "react"
import { contexto } from "../Context/context"
import ItemCount from "../Items/ItemCount"
import { Button, Table } from "react-bootstrap"
import './cart.css'
import { StorageId } from "../Context/context"
import React from "react"
import { useEffect , useState } from "react"
import { Link } from "react-router-dom"
import Modal from "react-bootstrap/Modal"
import Accordion from "react-bootstrap/Accordion"
import Form from "react-bootstrap/Form"
import InputGroup from 'react-bootstrap/InputGroup';
import { collection, getFirestore, addDoc } from "firebase/firestore"
import TheEmptyCart from "./TheEmptyCart"
import TheCart from "./TheCart"



export default function Cart () {
  let temp = 0
  let { cart, setCart } = useContext(contexto)
  const [count, setCount] = React.useState(0)
  const cartContext = useContext(contexto).cart

  useEffect(() => {

    for (let i = 0; i < cartContext.length; i++) {
      temp = temp+cartContext[i].Cantidad
      setCount(temp)
      
      
    }

    

    
  },[cart.length, count])

    
    

   
    
    function Router () {
      const page = count === 0 ? <TheEmptyCart /> : <TheCart/>

      return (
        <div>
          {page}
        </div>
      )
    }

    return (
      <Router />
    )
  
    

    

    

      
}

