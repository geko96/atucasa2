import ItemDetail from "./ItemDetail";
import React from "react";
import { useEffect, useState } from "react";
import './items.css'
import { useParams } from 'react-router-dom';
import { getFirestore, getDoc, doc, getDocs, collection } from 'firebase/firestore'

export default function ItemDetailContainer () {
    const [isLoading, setIsLoading] = useState(true);
    const [prodArr, setProdarr] = useState(null)
    let parametros = useParams().id
    
    useEffect(() => {
      const db = getFirestore()
      const productRef = doc(db, 'Productos', parametros)
      getDoc(productRef).then(res => {
        
        setProdarr({"id":res.id, ...res.data()})
        
        setIsLoading(false)
      })
      
      
    }, []);
    if (isLoading) { // ⬅️ si está cargando, mostramos un texto que lo indique
        return (
          <div className="App">
            <h1>Cargando...</h1>
          </div>
        );
      }

      
      return (
        <ItemDetail producto={prodArr} className="DetailBody"/>
      );
    }

    
