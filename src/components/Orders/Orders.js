import { collection, getFirestore, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";



export default function Orders () {
    const [isLoading, setIsLoading] = useState(true);
    const [prodArr, setProdarr] = useState(null)
    useEffect(() => {
      const db = getFirestore()
      const productsRef = collection(db, 'orders')
      getDocs(productsRef).then(res => {
        setProdarr(res.docs.map(doc => ({id: doc.id, ...doc.data()})))
        console.log(prodArr)
        setIsLoading(false)
        
      })
      
    }, []);
    if (isLoading) { // ⬅️ si está cargando, mostramos un texto que lo indique
        return (
          <div className="App">
            <h1 className="absoluteCenter"><Spinner animation="grow" variant="warning"/></h1>
          </div>
        );
      }
      return (
        <div className="row">
            <table className="FULLTABLE" id="tbOrders">
                <tr>
                    <td>ID</td>
                    <td>Nombre</td>
                    <td>Fecha</td>
                </tr>
                {prodArr.map(product => {
                        return (
                            <tr key={product.id}><td>{product.id}</td><td>{product.cliente}</td><td>{product.timeStamp}</td></tr>
                        )
                })}
                
            </table>
        </div>
      );
}