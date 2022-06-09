import ItemCount from "./ItemCount";
import React from "react";
import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { getFirestore, getDoc, doc, getDocs, collection } from 'firebase/firestore'


export default function ItemList () {

    const [isLoading, setIsLoading] = useState(true);
    const [prodArr, setProdarr] = useState(null)
    useEffect(() => {
      const db = getFirestore()
      const productsRef = collection(db, 'Productos')
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
          {prodArr.map(product => (
                <ItemCount key={product.name} productos={product}/>
            ))}
        </div>
      );
    }

    
