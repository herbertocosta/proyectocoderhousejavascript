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
    let categoria = ""
    for (const key in productos) 
    {
        if(categoria == "" || categoria != productos[key].categoria){
            categoria = productos[key].categoria;
            listaProductos += `==========================\n ${categoria} \n==========================\n`;
        }
        productos[key].aplicarDescuento;
        listaProductos += `Producto: ${productos[key].codigo} - ${productos[key].nombre} $${productos[key].precio} Stock: ${productos[key].stock }  \n`;
    }
    alert(
        listaProductos
    );
}
    
function listarCarrito() {
    let listaProductos = "";
    let totalCarrito = 0;
    for (const key in carrito) {
        listaProductos += `# ${key} Producto: ${carrito[key].producto} $${
            carrito[key].precio
        } Cantidad: ${carrito[key].cantidad} Monto: ${
            parseInt(carrito[key].precio) * parseInt(carrito[key].cantidad)
        } \n`;
        totalCarrito +=
            parseInt(carrito[key].precio) * parseInt(carrito[key].cantidad);
    }
    listaProductos += `========================== \n TOTAL DE LA COMPRA: ${totalCarrito} \n==========================`;
    alert(listaProductos);
}

function cerrarCompra() {
    listarCarrito();
}

function quitarCarrito() {
    do {
        listarCarrito();
        articulo = parseInt(prompt("Elija el Producto que quiere QUITAR"));
    
        if (!isNaN(articulo) && parseInt(articulo) < carrito.length)
        {
            carrito.splice(articulo, 1);
        } else {
            if (isNaN(articulo)) {
                break;
            } else {
                alert(`LO SENTIMOS NO EXISTE EL CÓDIGO ${articulo}`);
            }
        }
    } while (true);
}

const productos = [];
const carrito = [];

cargarProductos();

listarProductos();

let articulo = "";
let cantidad = 0;

do {
    articulo = prompt("Elija el código del producto que quiere comprar");
    if (articulo === null) {
        if (carrito.length > 0){
            if (confirm("¿DESEA CERRAR LA COMPRA?")){
                cerrarCompra();
                break;
            } else {
                if (confirm("¿QUIERE QUITAR UN PRODUCTO")){
                    quitarCarrito()
                }
            }
        } else {
            if (confirm("¿DESEA INTERRUMPIR SU COMPRA?")) {
                alert("LAMENTAMOS NO HAYA ENCONTRADO EL PRODUCTO DE SU AGRADO");
                break;
            } else {
                continue;
            }
        }
    } else {
        results = productos.filter(function (producto) { return producto.codigo == articulo; });
        if (results.length > 0){
            cantidad = parseInt(prompt("Elija la cantidad que quiere comprar"));
            if (parseInt(results[0].stock) >= cantidad)
            {
                results[0].stock -= cantidad;
                carrito.push(new Carrito(results[0].codigo, results[0].nombre, results[0].precio, cantidad));
                let idx = productos.findIndex((el) => el.codigo == results[0].codigo);
                productos[idx].stock = results[0].stock;
            }
            else
            {
                alert("STOCK INSUFICIENTE");
            }
        } else {
            alert(`LO SENTIMOS NO TENEMOS ${articulo}`);
        }
    }
} while (true);
