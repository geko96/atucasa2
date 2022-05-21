import React from "react"
import Swal from "sweetalert2"
import { Button } from "react-bootstrap"

import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";



export default function Counter (elementos) {

    let data = elementos.elementos

    let add = () => {
        if (count >= data.stock) {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Sin stock Disponible',
                showConfirmButton: false,
                timer: 1500
              })
        }else {
            return setCount(count + 1)
        }
    }

    let del = () => {
        if (count <= 0) {
            return setCount(0)
        }else{
            return setCount(count - 1)
        }
    }

    const [count, setCount] = useState(0);

  

  return (
    <>
    <Button variant="primary" id="-" onClick={del}>-</Button>
    <div className="text-center">{count}</div>
    <Button variant="primary" id="+" onClick={add}>+</Button>

    

    </>
)
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<coun />);




