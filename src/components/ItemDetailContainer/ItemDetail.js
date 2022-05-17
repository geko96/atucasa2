import React from "react"
import Swal from 'sweetalert2'
import './items.css'
import ItemList from "../Items/ItemList"


export default function ItemDetail({producto}) {
    const [count, setCount] = React.useState(producto.initial)
    
    let add = () => {
        if (count >= producto.stock) {
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
            setCount(0)
        }else{
            setCount(count - 1)
        }
    }

    return (
        <>
            <div className="contenedor">
                <div className="Fotos">
                    <div id="DefaultPic"><img className="DefaultPicDisplayed" src={producto.img[0]}></img></div>
                    <div id="carruselImg">{producto.img.map(img => (
                        <img src={img} className="litleImg"/>
                    ))}
                </div>
                </div>
                <div className="menu">
                    <h1>{producto.name}</h1>
                    <h3>${producto.precio}</h3>
                    Medios de pago
                    Envio
                </div>
                <div className="Description">
                    <h1>{producto.name}</h1>
                    <p>{producto.fullDescription}</p>
                </div>
                <div className="OtrosProductos">
                    <h2>Otros Productos</h2>
                    <ItemList/>
                </div>
            </div>
        </>
    )
}

