import React from "react"
import Swal from "sweetalert2"
import { Button } from "react-bootstrap"
import { Link } from "react-router-dom";

import { useState} from "react";
import { useContext } from "react";
import { contexto } from "../Context/context";
import { StorageId } from "../Context/context";


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

        

        let ItemForCart = {
            "nombre":data.FullData.name,
            "precio":data.FullData.precio,
            "Cantidad":count,
            "FullData":data.FullData
        }
        
        function check () {
            for (let i = 0; i < miContexto.cart.length; i++) {
            
                if (miContexto.cart[i].nombre === ItemForCart.nombre) {
                    console.log('Existencia encontrada en el index '+ i)
                    miContexto.cart[i].Cantidad = miContexto.cart[i].Cantidad + ItemForCart.Cantidad
                    return true
                }
                
            }
        }

        if (check()) {
            console.log('Producto con existencia agregado')
        }else {
            miContexto.cart.push(ItemForCart)
        }
        

        



        if (miContexto.cart[0] == null) {
            miContexto.cart.splice(0,1)
        }
        
        console.log('Array de items'+ JSON.stringify(miContexto.cart))
        localStorage.setItem(StorageId,JSON.stringify(miContexto))
        
        

        

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








