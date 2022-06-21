import { useContext } from "react"
import { contexto } from "../Context/context"
import ItemCount from "../Items/ItemCount"
import { Button, Table } from "react-bootstrap"
import './cart.css'
import { StorageId } from "../Context/context"
import React from "react"
import { useEffect , useState } from "react"
import { Link } from "react-router-dom"
import Modal from "react-bootstrap/Modal"
import Accordion from "react-bootstrap/Accordion"
import Form from "react-bootstrap/Form"
import InputGroup from 'react-bootstrap/InputGroup';
import { collection, getFirestore, addDoc } from "firebase/firestore"
import CartDetail from "./CartDetail"



export default function Cart () {
  let temp = 0 
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    let contexti = useContext(contexto)
    let { cart, setCart } = useContext(contexto)
    const [count, setCount] = React.useState(0)
    const cartContext = useContext(contexto).cart
    const [amount, setAmount] = React.useState(0)

    useEffect(() => {

      for (let i = 0; i < cartContext.length; i++) {
        temp = temp+cartContext[i].Cantidad
        setCount(temp)
        
        
      }
  
      
  
      
    },[cart.lengt, count])

    useEffect(() => {
      //Precio Total Carrito
      let total = 0
      for (let i = 0; i < cartContext.length; i++) {
        console.log('Cantidad :' + cartContext[i].Cantidad + ' precio: ' + cartContext[i].precio)
        total = total + (cartContext[i].Cantidad*cartContext[i].precio)
        setAmount(total)
        
      }
  
      
  
      
    },[])

    

    function deleteById (elemento) {
      
      let id = cart.findIndex(item => item == elemento.product)
      console.log(id)
      console.log('Valor buscado '+ JSON.stringify(elemento.product) + ' con el resultado '+ id)
      setCart(cart.filter(item => item !== elemento.product))
      
      console.log(cart)
      if(cart.length === 0){
        document.location.reload()
      }
      return
    }
    
    
    if (count === 0 ) {
      return (
        <div className="emptyCart">
            <h2>No hay Productos en el carrito</h2>
            <Link to="/" className="botonera">
                <Button variant="primary">Ir a comprar</Button>
                </Link>


          
        </div>
      )
    }else {
      return (
        <div className="CART">
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
                  <td><Button type="button" variant="warning" id={product.nombre} onClick={() => deleteById({product})}>✖</Button></td>

                </tr>

              ))}
          </tbody>
          </table>

          <CartDetail/>

          <Button variant="primary" onClick={handleShow}>
            Comprar
          </Button>

          <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
          <Modal.Title>Confirmar Compra</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
            <InputGroup className="mb-3">
              <InputGroup.Text >👤</InputGroup.Text>
              <Form.Control
                placeholder="Nombre completo"
                aria-label="Username"
                aria-describedby="basic-addon1"
                id="name"
              />
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Text>🏠</InputGroup.Text>
              <Form.Control
                placeholder="Direccion de facturacion"
                aria-label="Username"
                aria-describedby="basic-addon1"
                id="direction"
              />
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Text>📞</InputGroup.Text>
              <Form.Control
                placeholder="Telefono"
                aria-label="Username"
                aria-describedby="basic-addon1"
                id="phone"
              />
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Text >✉</InputGroup.Text>
              <Form.Control
                placeholder="email"
                aria-label="Username"
                aria-describedby="basic-addon1"
                id="email"
              />
            </InputGroup>

              <p>Metodo de pago: 
              <Form.Select aria-label="Default select example">
                <option value="1">Mercadopago</option>
                <option value="2">Transferencia</option>
                <option value="3">Efectivo</option>
              </Form.Select>
              </p>
              
            </form>

          </Modal.Body>
          <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={() => {saveOrder()}}>
            Comprar
            </Button>
            </Modal.Footer>
          </Modal>


          
        </div>
      )
    }

    async function saveOrder () {
      const db = getFirestore()
      let order = {
        "cliente": document.getElementById('name').value,
        "telefono": document.getElementById('phone').value,
        "direccion": document.getElementById('direction').value,
        "correo": document.getElementById('email').value,
        "total": amount,
        "productos": cart,
        "timeStamp": new Date(Date.now()).toUTCString()
      }

      //añadir al firestore
      const docRef = await addDoc(collection(db, "orders"), order);
      console.log(order)
      console.log("Document written with ID: ", docRef.id);

      handleClose();
      setCart([])
      document.location.reload()


    }

    

      
}

