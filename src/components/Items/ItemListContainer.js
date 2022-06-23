import React, { useState , useEffect } from "react"
import ItemList from "./ItemList"
import { productos }  from "./Productos" 
import { useParams } from "react-router-dom"

const ItemListContainer = () => {

    const [items, setItems] = useState([])
    const {category}= useParams ()

        useEffect(() => {
            new Promise((res) => {
            setTimeout(()=> {
                res(category ? productos.filter((producto)=> {
                return producto.category === category
                }) : productos)
            },2000) 
        })
            .then(resultado =>{
                setItems(resultado)
            })},[category])
            
    return (
        <>
            <ItemList productos={items}/>
        </>
    )
}

export default ItemListContainer