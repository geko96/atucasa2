import { useContext } from "react"
import { contexto } from "../../App"
import ItemCount from "../Items/ItemCount"

export default function Cart () {
    let cart = useContext(contexto).cart
    console.log(cart)
    return (
        <div className="row">
          {cart.map(product => (
                <ItemCount productos={product}/>
            ))}
        </div>
      )
}