import React, { useState , useEffect } from "react"
import ItemList from "./ItemList"
import { productos }  from "./Productos" 
import { useParams } from "react-router-dom"
import { db } from "./Firebase"
import { collection , getDocs } from "firebase/firestore"
//import { getDocs } from "firestore/firebase"

const ItemListContainer = () => {

    const [items, setItems] = useState([])
    const {category}= useParams ()

    const collectionProductos = collection(db,"productos")
    const consulta = getDocs(collectionProductos)
    console.log(consulta)

        useEffect(() => {
            const collectionProductos = collection(db,"productos")
            const consulta = getDocs(collectionProductos)
            console.log(consulta)

            consulta
                .then((resultado)=>{
                    const productos_mapeados = resultado.docs.map(referencia => {
                        //console.log(referencia.id)
                        //console.log(referencia.data())
                        const aux = referencia.data()
                        aux.id = referencia.id
                        return aux
                    })
                    setItems(productos_mapeados)
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