import React from "react"
import Swal from "sweetalert2"
import { Button } from "react-bootstrap"
import { Link } from "react-router-dom";

import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { useContext } from "react";
import { contexto } from "../../App";



export default function Counter (elementos) {
    const miContexto = useContext(contexto)

    let data = elementos.elementos

    let add = () => {
        if (count >= data.stock) {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Sin stock Disponible',
                showConfirmButton: false,
                timer: 1500
              })
        }else {
            return setCount(count + 1)
        }
    }

    let del = () => {
        if (count <= 0) {
            return setCount(0)
        }else{
            return setCount(count - 1)
        }
    }

    

    
    
    const [count, setCount] = useState(0);
    const [action, setAction] = useState('comprar');

    const CartAdd = () => {
        setAction('readyForPurchase')
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Agregado al carrito',
            showConfirmButton: false,
            timer: 1500
        })

        miContexto.cart.push(elementos.producto)

        console.log('algo : '+ JSON.stringify(miContexto))

    }

    
    

    function ShopButton () {
        if(action == 'comprar'){
        return (
            <>
            <div className="botonera">
            <Button variant="primary" id="-" onClick={del}>-</Button>
            <div className="text-center">{count}</div>
            <Button variant="primary" id="+" onClick={add}>+</Button>
        
            </div>
            <Button variant="primary" onClick={CartAdd}>Agregar al Carrito</Button>

            </>
        )
        }else {
            return (
                <Link to="/Cart" className="botonera">
                <Button variant="primary">Comprar</Button>
                </Link>
            )
        }
    }
    


  return (
    <div className="center">
        
        <ShopButton/>

    </div>
)
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<coun />);




