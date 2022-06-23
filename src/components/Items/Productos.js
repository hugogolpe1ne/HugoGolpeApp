export const productos =[
   {
       id: 1,
       name: "Camara",
       category:"fotografia",
       price: "80.000", 
       description: "camara canon",
       imagen: "https://http2.mlstatic.com/D_NQ_NP_858672-MLA42787141312_072020-W.jpg" ,
       stock: 6,
    },
   {
    id: 2,
    name: "Celular",
    category: "celulares",
    price: "65.000",
    description:"celular samsung",
    imagen: 'https://www.cetrogar.com.ar/media/catalog/product/t/e/te2755-1.jpg?width=500&height=500&canvas=500,500&quality=80&bg-color=255,255,255&fit=bounds',
    stock: (3),
    },
    {
        id: 3,
        name: "notebook",
        category: "computadoras",
        price: "120000",
        description:"notebook hp",
        imagen: 'https://images.fravega.com/f300/a5cba39cb966302c53e544548b3b7b2c.jpg.webp',
        stock: (3),
        }

]

export const getItemById = (id) => {
    return new Promise ((resolve) => {
        setTimeout(()=> {
            resolve(productos.find(prod => prod.id ===id));
        }, 1000)
    })
}
