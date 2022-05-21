import React from "react"
import Swal from "sweetalert2"
import { Button } from "react-bootstrap"



export default function Counter (elementos) {
    let data = (elementos.elementos)

    const [count, setCount] = React.useState(data.initial)


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

    


    return (
        <>
        <Button variant="primary" id="-" onClick={del()}>-</Button>
        <div className="text-center">{count}</div>
        <Button variant="primary" id="+" >+</Button>

        

        </>
    )
}



