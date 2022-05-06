/**
 *      CLASES Y ENTIDADES
 */
class Producto {
    constructor(categoria, codigo, nombre, imagen, precio, stock) {
        this.categoria = categoria;
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
        this.imagen = imagen;
        this.cantidad = 0;
        this.subtotal = 0;
    }
}

/**
 *      VARIABLES Y OBJETOS GLOBALES
 */

let productos = []
let productosCarrito = [];
let carritoUpdated = [];
let articulo = "";
let cantidad = 0;
let totalCarrito = 0;
const newCategoria = document.getElementById("articulos");
const montoTotal = document.getElementById("total");
const montoMinuta = document.getElementById("montoMinuta");
const cerrarCarrito = document.getElementById("boton-comprar");
const vaciarCarrito = document.getElementById("boton-vaciar");
const codigoProducto = document.getElementById("articulos");
const carritoHTML = document.querySelector("#listacarrito tbody");
const minutaHTML = document.querySelector("#minuta tbody");
const itemCarritoHTML = document.getElementById("carrito")
const pagarCompra = document.getElementById("pagar")
const minutaModal = document.getElementById("minutaModal")
/**
 *      FUNCIONES
 */

function listarProductos() {
    //LEER LA TABLA DE PRODUCTOS DESDE UNA BASE DE DATOS JSON USANDO FETCH
    fetch("../bdatos/productos.json")
        .then(connectOk => connectOk.json())
        .then(resultSet => {
                let listaProductos = "";
                let categoria = "";
                let categoriaAnt = "";
                //RECORRO LA LISTA DE PRODUCTOS
                resultSet.forEach(element => {
                    //ARMAR UN ARRAY DE PRODUCTOS
                    productos.push(new Producto(element.categoria, element.codigo, element.nombre, element.imagen, element.precio, element.stock));
                    //APLICO DESESTRUCTURACIÓN
                    let { categoria, codigo, nombre, imagen, precio, stock } = element;
                    //AGRUPAR POR CATEGORÍAS DE PRODUCTOS
                    if (categoriaAnt === "" || categoriaAnt !== categoria) {
                        categoriaAnt = categoria;
                        let newTitulo = document.createTextNode(categoriaAnt);
                        newCategoria.insertAdjacentHTML(
                            "beforeend",
                            `<div id="${categoriaAnt}" class="row m-2"><h5><strong>${categoriaAnt}</strong></h5></div>`
                        );
                    }
                    //AGREGO PRODUCTOS SEGÚN CATEGTORIA
                    newDetalle = document.getElementById(categoria);
                    newDetalle.insertAdjacentHTML(
                        "beforeend",
                        `<div class="card col-md-3 border-warning">
                            <div class="card-header">
                                <h5 class="card-title">${nombre}</h5>
                            </div>
                            <div class="card-body">
                                <img src="${imagen}" class="card-img-top img-buffet border" alt="...">
                            </div>
                            <div class="card-footer text-end">
                                <span>$${precio}.-</span>
                                <button id="${codigo}" class="btn btn-primary idprod text-end">+</button>
                            </div>
                        </div>`
                    );
                });
            })
        .catch(error => console.log(error))
}

function agregarCarrito(id) {
    //Buscar el producto en el lista de productos
    const resultado = productos.find(producto => producto.codigo == id)
    //Verificar si existe el producto en el Carrito
    const repetido = productosCarrito.some(producto => producto.codigo == resultado.codigo)
    if (repetido) {
        //Agregar al producto existente en el Carrito
        const carritoUpdated = productosCarrito.map((el) => {
            if (el.codigo === resultado.codigo) {
                //Actualizo el item y lo guardo
                el.cantidad++;
                el.subtotal += parseInt(resultado.precio);
                return el;
            } else {
                //Guardo el item sin actualizar
                return el;
            }
        });

        //Limpiar el  Carrito
        while (productosCarrito.length>0) {
            productosCarrito.pop()
        }
        //Limpiar localStorage
        localStorage.removeItem("carrito")

        //Cargar el carrito desde el array actualizado
        for (elementos of carritoUpdated) {
             productosCarrito.push(elementos);
        }
    } else {
        //Agregar un producto nuevo al Carrito
        resultado.cantidad = 1;
        resultado.subtotal = resultado.precio;
        productosCarrito.push(resultado);
    }
    //Cargar localStorage    
    localStorage.setItem("carrito",JSON.stringify(productosCarrito))

    //Limpiar el HTML del carrito
    limpiarCarritoHTML();
    //Llenar el HTML del carrito
    llenarCarritoHTML();

}

function limpiarCarritoHTML() {
    // Limpiar el HTML
    while (carritoHTML .firstChild) {
        carritoHTML.removeChild(carritoHTML.firstChild);
    }
    montoTotal.innerHTML = `0`;
}

function llenarCarritoHTML() {
    totalCarrito = 0;
    let i = 0;
    productosCarrito.forEach(element => {
        //Aplico DESESTRUCTURACIÓN
        let {nombre, cantidad, precio, subtotal} = element;

        let fila = document.createElement("tr");
        fila.setAttribute("class", "item-carrito");
        fila.innerHTML = 
        `<td><button id="${i}" class="bi bi-trash btn btn-warning quitar"></button></td>
         <td>${nombre}</td>
         <td>${cantidad}</td>
         <td>${precio}</td>
         <td class="text-end">$${subtotal}</td>`;
        carritoHTML.appendChild(fila);
        totalCarrito += parseInt(subtotal);
        i++;
    });
    montoTotal.innerHTML = totalCarrito;
}

function quitarItemCarrito(item) {
    //Eliminar el item del array productosCarrito
    productosCarrito.splice(item, 1);
    //Borrar localStorage
    localStorage.removeItem("carrito");
    //Cargar localStorage
    localStorage.setItem("carrito", JSON.stringify(productosCarrito));

    limpiarCarritoHTML();
    llenarCarritoHTML();
}

function vaciarCompra() {
    //Eliminar todos los items del array productosCarrito
    productosCarrito.splice(0,productosCarrito.length);
    //Limpiar LocalStorage
    localStorage.removeItem("carrito")
    //Recargar carrito HMTL
    limpiarCarritoHTML();
    llenarCarritoHTML();

}

function cerrarCompra() {
    // Limpiar la minuta HTML
    while (minutaHTML.firstChild) {
        minutaHTML.removeChild(minutaHTML.firstChild);
    }
    montoMinuta.innerHTML = `0`;
    totalCarrito = 0;

    //Llenar la minuta de compra
    productosCarrito.forEach(element => {
        //Desestructurando el Objeto
        let { nombre, cantidad, precio, subtotal } = element;
        let fila = document.createElement("tr");
        fila.setAttribute("class", "text-center");
        fila.innerHTML = 
        ` <th scope="row" class="text-start">${nombre}</th>
          <td>${cantidad}</td>
          <td>${precio}</td>
          <td class="text-end">$ ${subtotal}</td>`;
        //Insertar la fila
        minutaHTML.appendChild(fila);
        totalCarrito += parseInt(subtotal);
    });
    montoMinuta.innerHTML = `$ ${totalCarrito}`;
}
// INTRODUCIR SWEET ALERT
function realizarPago() {
    Swal.fire({
        title: "¡GRACIAS POR SU COMPRA!",
        text: `!EL MONTO DE $ ${totalCarrito} FUÉ CONFIRMADO PRONTO RECIBIRÁ SU PEDIDO!`,
        icon: "success",
        confirmButtonText: "¡GRACIAS!"
    });

    vaciarCompra();
}

/**
 *      EVENTOS
 */

codigoProducto.addEventListener("click", (e) => {
    //controlo que el evento se produzca en el elemento correcto
    e.target.classList.contains("idprod") && agregarCarrito(e.target.id);
})

itemCarritoHTML.addEventListener("click", (e) =>{
    //controlo que el evento se produzca en el elemento correcto
    e.target.classList.contains("quitar") && quitarItemCarrito(e.target.id);
})

cerrarCarrito.addEventListener("click", () => {
    cerrarCompra();
})

pagarCompra.addEventListener("click", () => {
    realizarPago();
})

vaciarCarrito.addEventListener("click", () => {
    vaciarCompra();
})


/*
 *      MAIN 
 */

//cargarProductos();

listarProductos();
//Usando  proceso simplificado del operador OR
productosCarrito = JSON.parse(localStorage.getItem("carrito")) || [];
llenarCarritoHTML();
