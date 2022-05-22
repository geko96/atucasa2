import React from "react"
import { Card } from "react-bootstrap"
import { Button } from "react-bootstrap"
import Swal from 'sweetalert2'
import './items.css'
import { NavLink } from "react-router-dom"
import Counter from "../Counter/counter"

export default function ItemCount({productos}) {
    
    

    try {
    return (
    
        <Card key={productos.name} className="margin10 rowItem" style={{ width: '250px'}}>
            <NavLink exact to={'/item/'+productos.id}><p><img className="cardImg" src={productos.img[0]}/></p></NavLink>
            <Card.Body className="centrado">
                <Card.Title>{productos.name}</Card.Title>
                <Card.Subtitle>${productos.precio}</Card.Subtitle>

                <Card.Text>{productos.description}</Card.Text>
                <div>
                <Counter elementos={{"initial":productos.initial,"stock":productos.stock,"id":productos.id}}/>
                </div>
                

            </Card.Body>
        </Card>
    )
    }catch{}
}

