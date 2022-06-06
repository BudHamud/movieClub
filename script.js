let input1 = document.getElementsByName("input1")[0];
let input2 = document.getElementsByName("input2")[0];
let input3 = document.getElementsByName("input3")[0];
let arti = document.querySelector(".movies")

class Movie  {
    constructor(nombre, descripcion, actores ) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.actores = actores;
    }
}

const fightClub = new Movie("Club de la Pelea", "Un chabón re aburrido se encuentra con uno re divertido y hacen unas re locuras, entre ellas, crear un club", "Brad Pitt");
const groundhogDay = new Movie("El Dia de la Marmota", "Se repite el mismo dia, precisamente el día de la marmota como indica el título de la película", "Phill Murray");
const iAmLegend = new Movie("Soy Leyenda", "Will quedo solo y le habla a maniquíes. El chabón se encuentra con una mujer que le dice que es una leyenda", "Will Smith");
const pelis = [fightClub, groundhogDay, iAmLegend];

function menu() {
    let opcion = 0
    while (opcion != 4) {
        opcion = Number(prompt(`
        1. Mostrar Peliculas
        2. Buscar pelicula
        3. Agregar pelicula
        4. Salir
        `))
        switch (opcion) {
            case 1:
                mostrarPelicula();
                break;
            case 2:
                buscarPelicula();
                break;
            case 3:
                agregarPelicula();
                break;
            case 4:
                break;
            default:
                alert("Opcion no valida");
                break;
        }
    }
}

mostrarPelicula = () => {
    for (let i = 0; i < pelis.length; i++) {
        alert(`
        Pelicula: ${pelis[i].nombre}
        Descripcion: ${pelis[i].descripcion}
        Actores: ${pelis[i].actores}
        `)
    }
}

buscarPelicula = () => {
    let pelicula = prompt(`
    Pelicula a buscar:
    - club de la pelea
    - el dia de la marmota
    - soy leyenda
    `);
    let opcion = prompt(`
    Opciones posibles:
    - descripcion
    - actores
    `);
    for (let i = 0; i < pelis.length; i++) {
        if (pelis[i].nombre === pelicula) {
            alert(pelis[i][opcion])
        }
    }
}

function mostrar() {
    let nombre = input1.value
    let descripcion = input2.value
    let actores = input3.value
    const div = document.createElement("div")
    div.innerHTML= `<div class="pelis"><img src="img/nodis.jpg" alt="imagen no disponible"><div><h3>${nombre}</h3> <p>${descripcion}</p> <p>${actores}</p><button onclick="borrar()">Borrar</button></div></div>`
    arti.appendChild(div)
    pelis.push(new Movie(nombre, descripcion, actores));
}

function mostrarDos() {
    for (let i = 0; i < pelis.length; i++) {
    let nombre = pelis[i].nombre
    let descripcion = pelis[i].descripcion
    let actores = pelis[i].actores
    const div = document.createElement("div")
    div.innerHTML= `<div class="pelis"><img src="img/peli${[i]}.jpg" alt="imagen no disponible"><div><h3>${nombre}</h3> <p>${descripcion}</p> <p>${actores}</p><button onclick="borrar()">Borrar</button></div></div>`
    arti.appendChild(div)
    }
}

mostrarDos()

borrar = () => {
    let divLeg = document.querySelector(".pelis")
    divLeg.remove()
}