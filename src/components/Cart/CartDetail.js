import { contexto } from "../Context/context";
import { useContext, useEffect } from "react";
import React from "react";





export default function CartDetail() {
    const { cart, setCart } = useContext(contexto);
    const [count, setCount] = React.useState(0);
    const [amount, setAmount] = React.useState(0);

    useEffect(() => {
        let temp = 0
        for (let i = 0; i < cart.length; i++) {
            temp += cart[i].Cantidad
          setCount(temp)
          
        }
    
        
    
        
      },[cart])

    useEffect(() => {
        //Precio Total Carrito
        let total = 0;
        for (let i = 0; i < cart.length; i++) {
            console.log('Cantidad :' + cart[i].Cantidad + ' precio: ' + cart[i].precio);
            total = total + (cart[i].Cantidad * cart[i].precio);
            setAmount(total);
        }
    }, [cart]);

    return (
        <table className="TablaCart">
            <tr><td>Items</td><td>{count}</td></tr>
            <tr><td>Total</td><td>${amount}</td></tr>
            
            
          </table>
    )
}