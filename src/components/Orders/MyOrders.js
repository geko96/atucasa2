import { useContext, useEffect } from "react";
import { contexto } from "../Context/context";
import React from "react";
import './orders.css';
const localStorageId = "orders";




export default function MyOrders () {
    const { order, setOrder } = useContext(contexto);
    const [isLoading, setIsLoading] = React.useState(true);
    console.log(order)

    function orderReady () {
         
        
        return (
            <div className="orders">
                <h1>Mi Orden</h1>
                <h3>Orden Nº: {order.id}</h3>
                <h3>Cliente: {order.cliente}</h3>
                <h3>Telefono: {order.telefono}</h3>
                <h3>Direccion: {order.direccion}</h3>
                <h3>Correo: {order.correo}</h3>
                <h3>Productos: </h3>
                <div>
                <p>{order.productos.map((product) => {
                    return (
                        <div>
                            <p>{product.Cantidad} x {product.nombre} x ${product.precio} = ${product.precio*product.Cantidad} </p>
                            
                        </div>
                    )
                })}</p>
                </div>
                <h3>Total: {order.total}</h3>
                
                <h3>Fecha: {order.timeStamp}</h3>
    
            </div>
        )
    }
 
    useEffect(() => {
        order.id === undefined ? setIsLoading(true) : setIsLoading(false)
    }
        , [order]);



  
    

    return (
        <div>
            {isLoading ? <h1 className="orders">No hay ordenes</h1> : orderReady()}
        </div>
    )

   
 
 
 

    

        

}