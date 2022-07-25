import React, { useState , useEffect } from "react";
import {useParams} from "react-router-dom"
import ItemDetail from "./ItemDetail"
import { doc, getDoc,} from "firebase/firestore";
import { collectionProductos } from "./Firebase";

const ItemDetailContainer = () => {

    const [item, setItem] = useState({});
    const { id } = useParams()

    useEffect(() => {
        const ref = doc(collectionProductos, id);
        const consulta = getDoc(ref)

        consulta
            .then(resultado => {
                const producto = resultado.data()
                setItem(producto)
            })
        }, [id])
        console.log(item)

    return  <ItemDetail {...item}/>
}

export default ItemDetailContainer