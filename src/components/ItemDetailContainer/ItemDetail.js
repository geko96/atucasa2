import React from "react"
import Swal from 'sweetalert2'
import './items.css'
import ItemList from "../Items/ItemList"
import Counter from "../Counter/counter"


export default function ItemDetail({producto}) {
    const [count, setCount] = React.useState(producto.initial)
    


    return (
        <>
            <div className="contenedor">
                <div className="Fotos">
                    <div id="DefaultPic"><img className="DefaultPicDisplayed" src={producto.img[0]}></img></div>
                    <div id="carruselImg">{producto.img.map((img,i)  => (
                        <img src={img} key={i+'_image'} className="litleImg"/>
                    ))}
                </div>
                </div>
                <div className="menu">
                    <h1>{producto.name}</h1>
                    <h3>${producto.precio}</h3>

                    Medios de pago
                    Envio
                    <Counter className="center" elementos={{"initial":producto.initial,"stock":producto.stock}}/>
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

