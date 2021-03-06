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

    /* ajustarSaldos(){
        
    } */
}

/**
 *      VARIABLES Y OBJETOS GLOBALES
 */

let productos = [];
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
const itemCarritoHTML = document.getElementById("carrito");
const pagarCompra = document.getElementById("pagar");
const minutaModal = document.getElementById("minutaModal");
/**
 *      FUNCIONES
 */

function listarProductos() {
    //LEER LA TABLA DE PRODUCTOS DESDE UNA BASE DE DATOS JSON USANDO FETCH
    fetch("../../productos.json")
        .then((connectOk) => connectOk.json())
        .then((data) => {
            cargarProductos(data);
        })
        .catch((error) => console.log(error));
}

function cargarProductos(resultSet) {
    //LEER LA TABLA DE PRODUCTOS DESDE UNA BASE DE DATOS JSON USANDO FETCH
    let categoriaAnt = "";
    //RECORRO LA LISTA DE PRODUCTOS
    resultSet.forEach((element) => {
        //ARMAR UN ARRAY DE PRODUCTOS
        element.stock = ajustarSaldos(element.codigo, element.stock);
        productos.push(
            new Producto(
                element.categoria,
                element.codigo,
                element.nombre,
                element.imagen,
                element.precio,
                element.stock
            )
        );
        //APLICO DESESTRUCTURACI??N
        let { categoria, codigo, nombre, imagen, precio, stock } = element;
        //AGRUPAR POR CATEGOR??AS DE PRODUCTOS
        if (categoriaAnt === "" || categoriaAnt !== categoria) {
            categoriaAnt = categoria;
            newCategoria.insertAdjacentHTML(
                "beforeend",
                `<div id="${categoriaAnt}" class="row m-2"><h5><strong>${categoriaAnt}</strong></h5></div>`
            );
        }
        //AGREGO PRODUCTOS SEG??N CATEGTORIA
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
}

//  AJUSTAR LOS SALDOS SEG??N LO CARGADO EN EL CARRITO
function ajustarSaldos(codigo, stock) {
    const indice = productosCarrito.findIndex(
        (itemCarrito) => itemCarrito.codigo == codigo
    );
    const stockCarrito = indice != -1 ? productosCarrito[indice].stock : stock;
    return stockCarrito;
}

// AGREGAR ITEMS AL CARRITO
function agregarCarrito(id) {
    //Buscar el indice del producto en el array
    const indice = productos.findIndex((element) => element.codigo == id);
    //Controlar el stock
    if (productos[indice].stock == 0) {
        Swal.fire({
            title: "??HUBO UN PROBLEMA!",
            text: "!NOS QUEDAMOS SIN STOCK, LE PEDIMOS DISCULPAS! \n !PERO TENEMOS OTROS  PRODUCTOS IGUAL DE RICOS!",
            icon: "warning",
            confirmButtonText: "??GRACIAS!",
        });
        return;
    } else {
        productos[indice].stock--;
    }

    //Buscar el producto en el lista de productos
    const resultado = productos.find((producto) => producto.codigo == id);

    //Verificar si existe el producto en el Carrito
    const repetido = productosCarrito.some(
        (producto) => producto.codigo == resultado.codigo
    );
    if (repetido) {
        //Agregar el producto existente en el Carrito
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
        while (productosCarrito.length > 0) {
            productosCarrito.pop();
        }
        //Limpiar localStorage
        localStorage.removeItem("carrito");

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
    localStorage.setItem("carrito", JSON.stringify(productosCarrito));

    //Limpiar el HTML del carrito
    limpiarCarritoHTML();
    //Llenar el HTML del carrito
    llenarCarritoHTML();
}

// LIMPIAR LA VISTA HTML
function limpiarCarritoHTML() {
    // Limpiar el HTML
    while (carritoHTML.firstChild) {
        carritoHTML.removeChild(carritoHTML.firstChild);
    }
    montoTotal.innerHTML = `0`;
}

// CARGAR LA VISTA HTML
function llenarCarritoHTML() {
    totalCarrito = 0;
    let i = 0;
    productosCarrito.forEach((element) => {
        //Aplico DESESTRUCTURACI??N
        let { nombre, cantidad, precio, subtotal } = element;

        let fila = document.createElement("tr");
        fila.setAttribute("class", "item-carrito");
        fila.innerHTML = `<td><button name="${i}" class="bi bi-trash btn btn-danger quitar"></button>
             <button name="${i}" class="bi bi-dash-square btn btn-warning restar"></button>
         </td>
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

// QUITAR ELEMENTO DEL CARRITO
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

// RESTAR UNIDADES EN EL CARRITO
function restarItemCarrito(item) {
    //Disminuir cantidad del item del array productosCarrito
    const itemUpdate = productosCarrito[item];

    if (itemUpdate.cantidad >= 2) {
        itemUpdate.stock++;
        itemUpdate.cantidad--;
        itemUpdate.subtotal -= parseInt(itemUpdate.precio);
        const carritoUpdated = productosCarrito.map((el) => {
            if (el.codigo === itemUpdate.codigo) {
                //Actualizo el item y lo guardo
                el.cantidad = itemUpdate.cantidad;
                el.subtotal = itemUpdate.subtotal;
                el.stock = itemUpdate.stock;
                return el;
            } else {
                //Guardo el item sin actualizar
                return el;
            }
        });

        //Limpiar el  Carrito
        while (productosCarrito.length > 0) {
            productosCarrito.pop();
        }
        //Limpiar localStorage
        localStorage.removeItem("carrito");

        //Cargar el carrito desde el array actualizado
        for (elementos of carritoUpdated) {
            productosCarrito.push(elementos);
        }
    } else {
        quitarItemCarrito(item);
    }
    //Cargar localStorage
    localStorage.setItem("carrito", JSON.stringify(productosCarrito));

    //Limpiar el HTML del carrito
    limpiarCarritoHTML();
    //Llenar el HTML del carrito
    llenarCarritoHTML();
}

function vaciarCompra() {
    //Eliminar todos los items del array productosCarrito
    productosCarrito.splice(0, productosCarrito.length);
    //Limpiar LocalStorage
    localStorage.removeItem("carrito");
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
    productosCarrito.forEach((element) => {
        //Desestructurando el Objeto
        let { nombre, cantidad, precio, subtotal } = element;
        let fila = document.createElement("tr");
        fila.setAttribute("class", "text-center");
        fila.innerHTML = ` <th scope="row" class="text-start">${nombre}</th>
          <td>${cantidad}</td>
          <td>${precio}</td>
          <td class="text-end">$ ${subtotal}</td>`;
        //Insertar la fila
        minutaHTML.appendChild(fila);
        totalCarrito += parseInt(subtotal);
    });
    montoMinuta.innerHTML = `$ ${totalCarrito}`;
}

function realizarPago() {
    // Utilizo la API SWEETALERT
    Swal.fire({
        title: "??GRACIAS POR SU COMPRA!",
        text: `!EL MONTO DE $ ${totalCarrito} FU?? CONFIRMADO PRONTO RECIBIR?? SU PEDIDO!`,
        icon: "success",
        confirmButtonText: "??GRACIAS!",
    });

    vaciarCompra();
}

/**
 *      EVENTOS
 */

codigoProducto.addEventListener("click", (e) => {
    //controlo que el evento se produzca en el elemento correcto
    e.target.classList.contains("idprod") && agregarCarrito(e.target.id);
});

itemCarritoHTML.addEventListener("click", (e) => {
    //controlo que el evento se produzca en el elemento correcto
    e.target.classList.contains("quitar") && quitarItemCarrito(e.target.name);
    e.target.classList.contains("restar") && restarItemCarrito(e.target.name);
});

cerrarCarrito.addEventListener("click", () => {
    cerrarCompra();
});

pagarCompra.addEventListener("click", () => {
    realizarPago();
});

vaciarCarrito.addEventListener("click", () => {
    vaciarCompra();
});

/*
 *      MAIN
 */
// Usando  proceso simplificado del operador OR cargar el carrito
productosCarrito = JSON.parse(localStorage.getItem("carrito")) || [];
// Leer los productos desde un archivo JSON
listarProductos();
// Cargar el carrito con compras pendientes
llenarCarritoHTML();
// Actualizar los stocks de los productos si hay un Carrito cargado
//ajustarSaldos();
