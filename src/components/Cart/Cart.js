import { useContext } from "react"
import { contexto } from "../../App"
import ItemCount from "../Items/ItemCount"
import { Button } from "react-bootstrap"
import './cart.css'
import { StorageId } from "../../App"



export default function Cart () {
    let contexti = useContext(contexto)
    let cart = useContext(contexto).cart
    console.log(cart)

    function SaveData () {
      
      localStorage.setItem(StorageId,JSON.stringify(contexti))
      document.location.reload()
    }

    function deleteById (elemento) {
      
      let id = cart.findIndex(item => item == elemento.product)
      console.log(id)
      console.log('Valor buscado '+ JSON.stringify(elemento.product) + ' con el resultado '+ id)
      cart.splice(id,1)
      SaveData();
      console.log(cart)
      return
    }


    return (
        <div>
          <table className="TablaCart">
          <thead>
              <tr>
                  <th> </th>
                  <th>Nombre</th>
                  <th>Cantidad</th>
                  <th>Precio</th>
                  <th>Total</th>
                  <th> </th>
              </tr>
          </thead>
          <tbody>
          {cart.map(product => (
                <tr key={product.nombre}>
                  <td><img className="iconImage" src={product.FullData.img[0]}/></td>
                  <td>{product.nombre}</td>
                  <td>{product.Cantidad}</td>
                  <td>{product.precio}</td>
                  <td>{product.precio*product.Cantidad}</td>
                  <td><button type="button" id={product.nombre} onClick={() => deleteById({product})}>✖</button></td>

                </tr>

              ))}
          </tbody>
          </table>


          
        </div>
      )

      
}

