import React from "react"
import { Card } from "react-bootstrap"
import { Button } from "react-bootstrap"
import Swal from 'sweetalert2'
import './items.css'
import { NavLink } from "react-router-dom"
import Counter from "../Counter/counter"
import { useContext } from "react"
import { contexto } from "../../App"

export default function ItemCount({productos}) {
    
    

    try {
    return (
    
        <Card key={productos.name} className="margin10" style={{ width: '250px'}}>
            <NavLink exact to={'/item/'+productos.id}><p><img className="cardImg" src={productos.img[0]}/></p></NavLink>
            <Card.Body className="row">
                <Card.Title>{productos.name}</Card.Title>
                <Card.Subtitle>${productos.precio}</Card.Subtitle>

                <Card.Text>{productos.description}</Card.Text>
                
                <Counter elementos={{"initial":productos.initial,"stock":productos.stock,"id":productos.id,"FullData":productos}}/>
                
                

            </Card.Body>
        </Card>
    )
    }catch{}
}

