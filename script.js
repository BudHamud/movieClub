let input1 = document.getElementsByName("input1")[0];
let input2 = document.getElementsByName("input2")[0];
let input3 = document.getElementsByName("input3")[0];
let arti = document.querySelector(".movies")
let btn = document.querySelector(".btn")
let modo = null
count = 4

class Movie  {
    constructor(nombre, descripcion, actores, id ) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.actores = actores;
        this.id = id;
    }
}

const mwm = new Movie("muere monstruo muere", "una pelicula malisima, asi que la voy a usar de relleno", "Tania Casciani", 0)
const fightClub = new Movie("Club de la Pelea", "Un chabón re aburrido se encuentra con uno re divertido y hacen unas re locuras, entre ellas, crear un club", "Brad Pitt", 1);
const groundhogDay = new Movie("El Dia de la Marmota", "Se repite el mismo dia, precisamente el día de la marmota como indica el título de la película", "Phill Murray", 2);
const iAmLegend = new Movie("Soy Leyenda", "Will quedo solo y le habla a maniquíes. El chabón se encuentra con una mujer que le dice que es una leyenda", "Will Smith", 3);

const pelis = [mwm, fightClub, groundhogDay, iAmLegend];

function mostrar() {
    let nombre = input1.value
    let descripcion = input2.value
    let actores = input3.value
    id = count
    const div = document.createElement("div")
    div.innerHTML= `<div class="pelis"><img src="img/nodis.jpg" alt="imagen no disponible"><div><h3>${nombre}</h3> <p>${descripcion}</p> <p>${actores}</p><button value="${pelis.length}"  onclick="borrar(value)">Borrar</button></div></div>`
    arti.appendChild(div)
    pelis.push(new Movie(nombre, descripcion, actores, id));
    count++
}

function mostrarDos() {
    for (let i = 1; i < pelis.length; i++) {
    let nombre = pelis[i].nombre
    let descripcion = pelis[i].descripcion
    let actores = pelis[i].actores
    const div = document.createElement("div")
    div.innerHTML= `<div class="pelis"><img src="img/peli${[i]}.jpg" alt="imagen no disponible"><div><h3>${nombre}</h3> <p>${descripcion}</p> <p>${actores}</p><button value="${[i]}" onclick="borrar(value)">Borrar</button></div></div>`
    arti.appendChild(div)
    }
}

mostrarDos()

borrar = (value) => {
    
    if (count > pelis.length) {
        arti.removeChild(arti.pelis.length)
        pelis.splice(pelis.length - 1, 1)
        count--
    } else {
        pelis.splice(value, 1)
        arti.removeChild(arti.childNodes[value])
        count--
    }
}


if (localStorage.getItem('darkMode') === null) {
    localStorage.setItem('darkMode', false)
}

function revisarEstado() {
    if (localStorage.getItem('darkMode') === "true") {
        modo = true
        document.querySelector("header").classList.add("black")
        document.querySelector("main").classList.add("black")
        document.querySelector("article").classList.add("black")
    } else {
        modo = false
        document.querySelector("header").classList.remove("black")
        document.querySelector("main").classList.remove("black")
        document.querySelector("article").classList.remove("black")
    }
}

revisarEstado()

function cambiarEstado() {
    if (localStorage.getItem('darkMode') === "true") {
        localStorage.setItem('darkMode', "false")
        document.querySelector("header").classList.remove("black")
        document.querySelector("main").classList.remove("black")
        document.querySelector("article").classList.remove("black")
    } else {
        localStorage.setItem('darkMode', "true")
        document.querySelector("header").classList.add("black")
        document.querySelector("main").classList.add("black")
        document.querySelector("article").classList.add("black")
    }
}

btn.addEventListener("click", cambiarEstado)