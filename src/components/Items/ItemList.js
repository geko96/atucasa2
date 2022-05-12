import ItemCount from "./ItemCount";


let arraye = [
    {"name":"jabon","precio":500,"description":"jabon para lavarropas","initial":0,"stock":10},
    {"name":"lavandina","precio":100,"description":"lavandina","initial":3,"stock":100},
    {"name":"perfume","precio":2500,"description":"Perfue para ropa","initial":1,"stock":7},
    {"name":"detergente","precio":150,"description":"Detergente amarillo","initial":0,"stock":20},
    {"name":"jabon solido","precio":5500,"description":"jabon duro","initial":0,"stock":30},
]

let arre2 = {"name":"jabon","precio":500,"description":"jabon para lavarropas","initial":3,"stock":10}


export default function ItemList () {
    return (
        <div className="cuadricula">
            {arraye.map(product => (
                <ItemCount productos={product}/>
            ))}
        </div>
    )
}