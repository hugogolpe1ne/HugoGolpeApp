import React, { useState , useEffect } from "react";
import {useParams} from "react-router-dom"
import ItemDetail from "./ItemDetail"
import { doc, getDoc,} from "firebase/firestore";
import { collectionProductos } from "./Firebase";

const ItemDetailContainer = () => {

    const [producto,setProduct] = useState({});
    const {id} = useParams()

    useEffect(() => {
        const ref = doc(collectionProductos,id);
        getDoc(ref).then((response) => {
                setProduct({
                    id: response.id,
                    ...response.data(),
                })
        })
    }, [id]);
    console.log(producto)

    return  <ItemDetail producto={producto}/>
}

export default ItemDetailContainer