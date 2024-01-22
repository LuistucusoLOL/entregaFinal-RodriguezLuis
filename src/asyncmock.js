const productos = [
    { id: "1", nombre: "Arepa con queso", stock:100,  precio: 1000, img: "../public/imagenes/ar de queso.jpeg",idCat:"arepas"},
    { id: "2", nombre: "Arepa con carne picada", stock:100,  precio: 1500, img: "../public/imagenes/ar de mechada.jpeg",idCat:"arepas"},
    { id: "3", nombre: "Arepa con chuleta de cerdo", stock:100,  precio: 2000, img: "../public/imagenes/ar chuleta.jpeg",idCat:"arepas"},
    { id: "4", nombre: "Arepa con jamon y queso", stock:100,  precio: 1300, img: "../public/imagenes/ar jamon con queso.jpeg",idCat:"arepas"},
    { id: "5", nombre: "Nestea", stock:100,  precio: 600, img: "../public/imagenes/nestea.jpeg",idCat:"bebidas"},
    { id: "6", nombre: "Cepita", stock:100,  precio: 400, img: "../public/imagenes/cepita.jpeg",idCat:"bebidas"},
    { id: "7", nombre: "Juguito natural de naran", stock:100,  precio: 350, img: "../public/imagenes/juguito.jpeg",idCat:"bebidas"},
    { id: "8", nombre: "Cafe", stock:100,  precio: 450, img: "../public/imagenes/cafe.jpeg",idCat:"bebidas"},
    { id: "9", nombre: "Empanada de queso", stock:100,  precio: 1200, img: "../public/imagenes/e queso.jpeg",idCat:"empanadas"},
    { id: "10", nombre: "Empanada de jamon con queso", stock:100,  precio: 1300, img: "../public/imagenes/e jamon con queso.jpeg",idCat:"empanadas"},
    { id: "11", nombre: "Empanada de carne", stock:100,  precio: 1500, img: "../public/imagenes/e carne molida.jpeg",idCat:"empanadas"},
    { id: "12", nombre: "Empanada de carne picada", stock:100,  precio: 1400, img: "../public/imagenes/e carne mechada.jpeg",idCat:"empanadas"},
    { id: "13", nombre: "Empanada de chuleta de cerdo", stock:100,  precio: 2000, img: "../public/imagenes/e cerdo.jpeg",idCat:"empanadas"},
    
]

export const getProductos = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(productos);
        }, 100)
    })
}


export const getUnProducto = (id) => {
    return new Promise( resolve => {
        setTimeout( () => {
            const producto = productos.find(item => item.id === id);
            resolve(producto);
        }, 100)
    })
}


export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(()=> {
            const productosCategoria = productos.filter(item => item.idCat === idCategoria );
            resolve(productosCategoria);
        },100)
    })
}



