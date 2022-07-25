import React, { useState , useEffect } from "react"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import { collectionProductos} from "./Firebase"
import { getDocs , query , where} from "firebase/firestore"

const ItemListContainer = () => {

    const [items, setItems] = useState([])
    const {category}= useParams ()

        useEffect(() => {
            const consulta = category
            ? query(collectionProductos, where("category","==",category))
            : collectionProductos;
            
            getDocs(consulta).then((resultado)=>{
                    const productosMapeados = resultado.docs.map(referencia => {
                        const aux = referencia.data()
                        aux.id = referencia.id
                        return aux
                    })
                    setItems(productosMapeados)
                })
                .catch((error)=>{
                    console.log(error)
                })    
        },[category])
            
    return (
        <>
            <ItemList productos={items}/>
        </>
    )
}

export default ItemListContainer