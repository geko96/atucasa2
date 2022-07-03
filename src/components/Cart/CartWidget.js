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
    setCount(() => {
      let temp = 0
      cart.map((product) => {
        temp += product.Cantidad
      }
      )
      return temp
    })
  }
    , [cart]);


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