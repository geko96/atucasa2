import React from "react"
import { Card } from "react-bootstrap"
import { Button } from "react-bootstrap"
import Swal from 'sweetalert2'


export default function ItemCount({productos}) {
    const [count, setCount] = React.useState(productos.initial)
    
    let add = () => {
        if (count >= productos.stock) {
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

    try {
    return (
    
        <Card key={productos.name} className="margin10" style={{ width: '18rem' }}>
        <Card.Img variant="top" src="logo192.png" />
            <Card.Body className="centrado">
                <Card.Title>{productos.name}</Card.Title>
                <Card.Subtitle>${productos.precio}</Card.Subtitle>

                <Card.Text>{productos.description}</Card.Text>
                <div className="botonera">
                    <Button variant="primary" onClick={del}>-</Button>
                    <Card.Text className="text-center">{count}</Card.Text>
                    <Button variant="primary" onClick={add}>+</Button>
                </div>
                <Button variant="primary">Agregar al carrito</Button>

            </Card.Body>
        </Card>
    )
    }catch{}
}

