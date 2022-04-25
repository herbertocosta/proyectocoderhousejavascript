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

    /* aplicarDescuento() {
        if (this.precio > 1000) {
            this.precio = this.precio * 0.9;
        }
        return this.preciofinal;
    } */

    descargarStock(cantidad) {
        if (this.stock >= cantidad) {
            this.stock -= cantidad;
        } else {
            return `NO HAY SUFICIENTE STOCK DE ESE PRODUCTO, LOS SENTIMOS MUCHO`;
        }
    }
}

/* 
class Carrito {
    constructor(codigo, producto, precio, cantidad) {
        this.codigo = codigo;
        this.producto = producto;
        this.precio = precio;
        this.cantidad = cantidad;
    }

    eliminar(productosCarrito, item) {
        if (this.precio > 1000) {
            this.precio = this.precio * 0.9;
        }
        return this.preciofinal;
    }

    comprar(cantidad) {
        if (this.stock >= cantidad) {
            this.stock -= cantidad;
            return `EL PRECIO FINAL DE SU COMPRA DE ${
                this.nombre
            } AL VALOR UNITARIO DE ${this.precio} TIENE UN VALOR TOTAL DE ${
                this.precio * cantidad
            }`;
        } else {
            return `NO HAY SUFICIENTE STOCK DE ESE PRODUCTO, LOS SENTIMOS MUCHO`;
        }
    }
}
 */

/**
 *      VARIABLES Y OBJETOS GLOBALES
 */

const productos = [];
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

/**
 *      FUNCIONES
 */

function cargarProductos() {
    productos.push(new Producto("CLÁSICAS", 11, "PEPPERONI", "../img/ecommerce/11.jpg", 1180, 10));
    productos.push(new Producto("CLÁSICAS", 12, "VEGETARIANA", "../img/ecommerce/12.jpg", 1160, 10));
    productos.push(new Producto("CLÁSICAS", 13, "HAWAIANA", "../img/ecommerce/13.jpg", 1170, 10));
    productos.push(new Producto("CLÁSICAS", 14, "MARGARITA", "../img/ecommerce/14.jpg", 1170, 15));
    productos.push(new Producto("CLÁSICAS", 15, "A LA MEXICANA", "../img/ecommerce/15.jpg", 1500, 3));
    productos.push(new Producto("LAS MÁS VENDIDAS", 21, "POLLO ASADO", "../img/ecommerce/21.jpg", 1180, 8));
    productos.push(new Producto("LAS MÁS VENDIDAS", 22, "CLÁSICA SUPER", "../img/ecommerce/22.jpg", 1750, 8));
    productos.push(new Producto("LAS MÁS VENDIDAS", 23, "JAMÓN Y ALBAHACA", "../img/ecommerce/23.jpg", 1750, 8));
    productos.push(new Producto("LAS MÁS VENDIDAS", 24, "MOZZARELLA CLÁSICA", "../img/ecommerce/24.jpg", 1750, 8));
    productos.push(new Producto("ELECCIÓN DEL CHEF", 31, "FONTINA", "../img/ecommerce/31.jpg", 2750, 8));
    productos.push(new Producto("ELECCIÓN DEL CHEF", 32, "ESPINACA Y QUESO", "../img/ecommerce/32.jpg", 2750, 8));
    productos.push(new Producto("ELECCIÓN DEL CHEF", 33, "TOCINO Y HUEVO", "../img/ecommerce/33.jpg", 3750, 8));
    productos.push(new Producto("ELECCIÓN DEL CHEF", 34, "ESPINACA-ALCAUCILES", "../img/ecommerce/34.jpg", 4750, 8));
}

function listarProductos() {
    let listaProductos = "";
    let categoria = "";
    //RECORRO LA LISTA DE PRODUCTOS
    for (const key in productos) {
        //AGREGO CATEGORÍAS DE PRODUCTOS
        if (categoria === "" || categoria !== productos[key].categoria) {
            categoria = productos[key].categoria;
            let newTitulo = document.createTextNode(categoria);
            newCategoria.insertAdjacentHTML(
                "beforeend",
                `<div id="${categoria}" class="row m-2"><h5>${categoria}</h5></div>`
            );
        }
        //AGREGO PRODUCTOS SEGÚN CATEGTORIA
        newDetalle = document.getElementById(categoria);
        newDetalle.insertAdjacentHTML(
            "beforeend",
            `<div class="card col-sm-4">
                <div class="card-body">
                    <h5 class="card-title">${productos[key].nombre}</h5>
                    <div>
                    <img src="${productos[key].imagen}" class="card-img-top img-buffet" alt="...">
                    </div>
                    <p>$${productos[key].precio}.- 
                    <button id="${productos[key].codigo}" class="btn btn-primary idprod">+</button></p>
                </div>
            </div>`
        );
    }
}

function listarCarrito() {
    if (localStorage.getItem("carrito") != null){
        productosCarrito = JSON.parse(localStorage.getItem("carrito"));
        llenarCarritoHTML();
    }
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
    for (let i = 0; i < productosCarrito.length; i++) {
        let fila = document.createElement("tr");
        fila.setAttribute("class", "item-carrito");
        fila.innerHTML = `<td><button id="${i}" class="bi bi-trash btn btn-warning quitar"></button></td>
        <td>${productosCarrito[i].nombre}</td>
        <td>${productosCarrito[i].cantidad}</td>
        <td>${productosCarrito[i].precio}</td>
        <td class="text-end">$${productosCarrito[i].subtotal}</td>`;
        carritoHTML.appendChild(fila);
        totalCarrito += parseInt(productosCarrito[i].subtotal)
    }
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
    for (let i = 0; i < productosCarrito.length; i++) {
        let fila = document.createElement("tr");
        fila.setAttribute("class", "text-center");
        fila.innerHTML = `<th scope="row" class="text-start">${productosCarrito[i].nombre}</th>
        <td>${productosCarrito[i].cantidad}</td>
        <td>${productosCarrito[i].precio}</td>
        <td class="text-end">$ ${productosCarrito[i].subtotal}</td>`;
        minutaHTML.appendChild(fila);
        totalCarrito += parseInt(productosCarrito[i].subtotal);
    }
    montoMinuta.innerHTML = `$ ${totalCarrito}`;
}

/**
 *      EVENTOS
 */

codigoProducto.addEventListener("click", (e) => {
    if (e.target.classList.contains("idprod")){
        agregarCarrito(e.target.id);
    }
})

itemCarritoHTML.addEventListener("click", (e) =>{
    if (e.target.classList.contains("quitar")){
        quitarItemCarrito(e.target.id)
    }
})

cerrarCarrito.addEventListener("click", () => {
    cerrarCompra();
})

vaciarCarrito.addEventListener("click", () => {
    vaciarCompra();
})

/*
 *      MAIN 
 */

cargarProductos();
listarProductos();
listarCarrito();

