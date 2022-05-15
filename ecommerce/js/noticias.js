/*
 *      DEFINIR VARIABLES Y OBJETOS GLOBALES
 */

let fechaActual = new Date();
const fechaElegida = document.getElementById("fecha")
const contenedorNoticias = document.getElementById("acordeon");          
// console.log(fechaActual)
// console.log(
//         `${fechaActual.getFullYear()}-${fechaActual.getMonth()+1}-${fechaActual.getDate()}`
// );
//document.getElementById("fecha").value = fechaActual.getFullYear()+"-"+(fechaActual.getMonth()+1)+"-"+fechaActual.getDate();

/*
 *      DEFINIR FUNCIONES
 */

function cargarNoticias() {
    const selectDate = fechaElegida.value
    if (
        Date.parse(selectDate) > Date.parse(fechaActual)
    ) {
        Swal.fire({
            title: "¡DISCULPE!",
            text: "!SOLO PODEMOS MOSTRARLE LAS NOTICIAS DE LOS ÚLTIMOS 30 DIAS CORRIDOS A LA FECHA!",
            icon: "error",
            timer: 100000,
        });
        return;
    }

    let url = `https://newsapi.org/v2/everything?q=Apple&from=${selectDate}&to=${selectDate}&sortBy=popularity&apiKey=964e2c8419e74e94aba7221a34d3646c`;
    
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            noticias = data.articles;
            construirNoticias(noticias);
        })
        .catch((error) => console.log(error));
}    

const construirNoticias = (noticias) => {
    contenedorNoticias.innerHTML = "";
    let noticia = "";
    let contador = 0;
    let collapsed = `class="accordion-button"`;
    let collapseddet = `accordion-collapse collapse show`;
    let ariaexpanded = `true`;
    let fecha = "";
    
    if (typeof noticias === 'undefined'){
        Swal.fire({
            title: "¡DISCULPE!",
            text: "!SOLO PODEMOS MOSTRARLE LAS NOTICIAS DE LOS ÚLTIMOS 30 DIAS CORRIDOS A LA FECHA!",
            icon: "error",
            timer: 100000,
        });
        return;
    }

    noticias.forEach(element => {

        fecha = element.publishedAt.split("T")[0].split("-");

        noticia = `<div class="accordion-item">
        <h2 class="accordion-header" id="copete${contador}">
            <button ${collapsed} type="button" data-bs-toggle="collapse"
                data-bs-target="#collapse${contador}" aria-expanded="${ariaexpanded}" aria-controls="collapse${contador}">
                <strong> ${fecha[2]}/${fecha[1]}/${fecha[0]}
                - ${element.title}
            </button>
        </h2>
        <div id="collapse${contador}" class="${collapseddet}" aria-labelledby="copete${contador}"
            data-bs-parent="#selector">
            <div class="accordion-body">
                <div class="container-fluid">
                    <div class="row align-items-center">
                        <div class="col-md-4">
                            <img class="imagen" src="${element.urlToImage}"
                                alt="foto noticias del barrio">
                        </div>
                        <div class="col-md-8">
                            <p>
                                ${element.description}
                            </p>
                            <a href="${element.url}">Fuente: ${element.author}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>`;
    ariaexpanded = `false`;
    collapsed = `class="accordion-button collapsed"`;
    collapseddet = `accordion-collapse collapse`;
    contenedorNoticias.innerHTML += noticia;
    contador++;
    });
}

/**
 *      EVENTOS Y PR0OCESOS
 */

fechaActual=`${fechaActual.getFullYear()}-${fechaActual.getMonth()+1}-${fechaActual.getDate()}`;

fechaElegida.addEventListener("change", (e) => {
    //controlo que el evento se produzca en el elemento correcto
    cargarNoticias();
});

