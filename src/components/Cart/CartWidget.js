import { contexto } from "../Context/context";
import { useContext } from "react";
import { NavLink } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import React from "react";
import { useEffect } from "react";

export default function CartWidget () {

  const { cart, setCart } = useContext(contexto) 
  const [count, setCount] = React.useState(0)

  


  useEffect(() => {
    let temp = 0
    for (let i = 0; i < cart.length; i++) {
        temp += cart[i].Cantidad
      setCount(temp)
      
    }

    

    
  },[cart])

  if(count > 0){
    return(
        <>
        Carrito: {count}
        </>
    )
  }

  return(
        <>
        Carrito
        </>
  )

}