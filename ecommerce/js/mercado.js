//DEFINIR VARIABLES Y OBJETOS GLOBALES
const productos = [];
const carrito = [];
let articulo = "";
let cantidad = 0;
let monto = 0;
const newCategoria = document.getElementById("articulos");
const newTotal = document.getElementById("total");


class Producto {
    constructor(categoria, codigo, nombre, precio, stock) {
        this.nombre = nombre;
        this.categoria = categoria;
        this.precio = precio;
        this.stock = stock;
        this.codigo = codigo;
    }
    aplicarDescuento() {
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

class Carrito {
    constructor(codigo, producto, precio, cantidad) {
        this.codigo = codigo;
        this.producto = producto;
        this.precio = precio;
        this.cantidad = cantidad;
    }

    eliminar(carrito, item) {
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

function cargarProductos() {
    productos.push(new Producto("CLÁSICAS", 11, "PEPPERONI", 1180, 10));
    productos.push(new Producto("CLÁSICAS", 12, "VEGETARIANA", 1160, 10));
    productos.push(new Producto("CLÁSICAS", 13, "HAWAIANA", 1170, 10));
    productos.push(new Producto("CLÁSICAS", 14, "MARGARITA", 1170, 15));
    productos.push(new Producto("CLÁSICAS", 15, "A LA MEXICANA", 1500, 3));
    productos.push(new Producto("LAS MÁS VENDIDAS", 21, "POLLO ASADO", 1180, 8));
    productos.push(new Producto("LAS MÁS VENDIDAS", 22, "CLÁSICA SUPER", 1750, 8));
    productos.push(new Producto("LAS MÁS VENDIDAS", 23, "JAMÓN Y ALBAHACA", 1750, 8));
    productos.push(new Producto("LAS MÁS VENDIDAS", 24, "MOZZARELLA CLÁSICA", 1750, 8));
    productos.push(new Producto("ELECCIÓN DEL CHEF", 31, "FONTINA", 2750, 8));
    productos.push(new Producto("ELECCIÓN DEL CHEF", 32, "ESPINACA Y QUESO", 2750, 8));
    productos.push(new Producto("ELECCIÓN DEL CHEF", 33, "TOCINO Y HUEVO", 3750, 8));
    productos.push(new Producto("ELECCIÓN DEL CHEF", 34, "ESPINACA-ALCAUCILES", 4750, 8));
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
        //AGREGO PRODUCTOS
        newDetalle = document.getElementById(categoria);
        newDetalle.insertAdjacentHTML(
            "beforeend",
            `<div class="card col-sm-4">
                    <div class="card-body">
                        <h5 class="card-title">${productos[key].nombre}</h5>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <p>$${productos[key].precio}.-</p>
                        <a  id="${productos[key].codigo}" href="#" class="btn btn-primary idprod">+</a>
                    </div>
                </div>`
        );
    }
}

function agregarCarrito(id) {
    const resultado = productos.find(producto => producto.codigo == id)
    newCarrito = document.getElementById("listacarrito")
    newCarrito.insertAdjacentHTML(
        "beforeend",
        `<li name"item-carrito" class="text-end item-carrito">${resultado.nombre} --> ${resultado.precio}</li>`
    );
    carrito.push(resultado);
    monto += resultado.precio;
    newTotal.textContent = monto
}

function cerrarCompra() {
    let listaProductos = "";
    let totalCarrito = 0;
    for (const key in carrito) {
        listaProductos += `# ${key} Producto: ${carrito[key].nombre} Cantidad: 1 Monto: ${parseInt(carrito[key].precio)} \n`;
        totalCarrito += parseInt(carrito[key].precio);
    }
    listaProductos += `========================== \n TOTAL DE LA COMPRA: ${totalCarrito} \n==========================`;
    alert(listaProductos);
}


window.onload = () => {
    cargarProductos();
    listarProductos();
    const cerrarCarrito = document.getElementById("boton-comprar");
    cerrarCarrito.addEventListener("click", function () {
        cerrarCompra();
    })
    //VACIAR EL CARRITO
    const quitarCarrito = document.getElementById("boton-vaciar");
    quitarCarrito.addEventListener("click", () =>{
        const listaCarrito = document.querySelectorAll(".item-carrito")
        for (let i = 0; i < listaCarrito.length; i++) {
            const padre = listaCarrito[i].parentNode;
            padre.removeChild(listaCarrito[i]);
        }
        monto = 0;
        newTotal.textContent = monto;
    })
    //SELECCIONAR ITEMS PARA AGREGAR AL CARRITO
    const codigoProducto = document.querySelectorAll(".idprod");
    for (let i = 0; i < codigoProducto.length; i++) {
        codigoProducto[i].addEventListener("click", function () {
            agregarCarrito(this.id)
            //console.log(this.id) 
        })
    }
}

