const misProductos = [
    {id:"1",nombre:"Aromatizante de ambiente",precio:1300,img:"../img/aromatizante.jpg",idCat:"2"},
    {id:"2",nombre:"Jabon para manos X 1 Lt",precio:1100,img:"../img/jabonmanos.jpg",idCat:"2"},
    {id:"3",nombre:"Jabon liquido X 5 Lts",precio:1600,img:"../img/jabonliquido.jpg",idCat:"3"},
]

export const getProductos = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve (misProductos);
        },100)
    })
}

//Creamos una funcion similar a la anterior pero que retorne 1 solo item

export const getUnProducto = (id) => {
    return new Promise (resolve => {
        setTimeout( () => { 
            const producto = misProductos.find(prod => prod.id === id);
            resolve(producto);
        },100)
    })

}

// Creamos una funcion que retorna un array de una determinada categoria de producto:

export const getProductosPorCategoria = (idCategoria) =>{
    return new Promise ( resolve => {
        setTimeout( () => {
            const productosCategoria = misProductos.filter (prod => prod.idCat === idCategoria);
            resolve (productosCategoria);
        },100)
    })
}

