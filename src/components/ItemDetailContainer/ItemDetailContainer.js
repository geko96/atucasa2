import ItemDetail from "./ItemDetail";
import React from "react";
import { useEffect, useState } from "react";
import './items.css'
import { useParams } from 'react-router-dom';

export default function ItemDetailContainer () {
    const [isLoading, setIsLoading] = useState(true);
    const [prodArr, setProdarr] = useState(null)
    let parametros = useParams().id
    console.log(parametros)
    
    useEffect(() => {
      fetch("http://api.geko.com.ar/atucasa")
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
        <ItemDetail producto={prodArr[parametros]} className="DetailBody"/>
      );
    }

    
