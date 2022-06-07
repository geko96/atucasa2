import ItemCount from "./ItemCount";
import React from "react";
import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";


export default function ItemList () {

    const [isLoading, setIsLoading] = useState(true);
    const [prodArr, setProdarr] = useState(null)
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

    
