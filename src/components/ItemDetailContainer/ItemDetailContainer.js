import ItemDetail from "./ItemDetail";
import React from "react";
import { useEffect, useState } from "react";
import './items.css'



export default function ItemDetailContainer () {

    const [isLoading, setIsLoading] = useState(true);
    const [prodArr, setProdarr] = useState(null)
    useEffect(() => {
      fetch("http://104.248.199.109/atucasa")
        .then((response) => response.json())
        .then((product) => {
            console.log(product)
            setProdarr(product)
            setIsLoading(false)
        });
    }, []);
    if (isLoading) { // ⬅️ si está cargando, mostramos un texto que lo indique
        return (
          <div className="App">
            <h1>Cargando...</h1>
          </div>
        );
      }
      return (
        <ItemDetail producto={prodArr[0]} className="DetailBody"/>
      );
    }

    
