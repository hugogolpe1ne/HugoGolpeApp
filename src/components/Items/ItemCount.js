import {useState} from "react"

const ItemCount = ({Stock,Initial=[0],onAdd=()=>{}}) => {

    const [contador, setContador] = useState(Initial)
    const aumentarContador = () => {
        if (contador < Stock) {
            setContador(contador +1)
        }
    }
    const disminuirContador = () => {
        if (contador > 0){
            setContador(contador - 1)
        }
    }

    const confirmarContador = () => {
        onAdd(contador)
    }
    

    return (
        <div>
            <p>cantidad : {contador} Unidades : {Stock}</p>
            <button onClick={aumentarContador}>aumentar</button>
            <button onClick={disminuirContador}>disminuir</button>
            <button onClick={confirmarContador}>Comprar</button>
        </div>
    )
}

export default ItemCount