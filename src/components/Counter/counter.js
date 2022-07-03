import React from "react"
import Swal from "sweetalert2"
import { Button } from "react-bootstrap"
import { Link } from "react-router-dom";

import { useState} from "react";
import { useContext } from "react";
import { contexto } from "../Context/context";
import { StorageId } from "../Context/context";



export default function Counter (array) {
    
    const {cart , setCart} = useContext(contexto)

    let data = array.elementos

    let addItem = () => {
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

    let deleteItem = () => {
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
        
        
        function CheckIfExist(){

            for (let i = 0; i < cart.length; i++) {
                if(cart[i].nombre === ItemForCart.nombre){
                    
                    return true
                }
            }
        
        }

        if(CheckIfExist()){
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Ya existe en el carrito',
                showConfirmButton: false,
                timer: 1500
            })
        }else{
            setCart([...cart, ItemForCart])
        }

        



        
        console.log('Array de items'+ JSON.stringify(cart))
        
        
        

        

    }

    
    

    function ShopButton () {
        if(action == 'comprar'){
        return (
            <>
            <div className="botonera">
            <Button variant="primary" id="-" onClick={deleteItem}>-</Button>
            <div className="text-center">{count}</div>
            <Button variant="primary" id="+" onClick={addItem}>+</Button>
        
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








