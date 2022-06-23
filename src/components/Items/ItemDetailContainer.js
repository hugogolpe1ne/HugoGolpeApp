import React, { useState , useEffect } from "react";
import {useParams} from "react-router-dom"
import {getItemById} from "./Productos"
import ItemDetail from "./ItemDetail"

function ItemDetailContainer() {
    const[producto,setProduct] = useState()
    const {id} = useParams()
    useEffect(() => {
        getItemById(parseInt (id))
        .then(response => setProduct(response))
    },[])

    return(
        <div>
            <ItemDetail {...producto}/>
        </div>
    )
}



export default ItemDetailContainer