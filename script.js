let input1 = document.getElementsByName("input1")[0];
let input2 = document.getElementsByName("input2")[0];
let input3 = document.getElementsByName("input3")[0];
let arti = document.querySelector(".movies")
let btn = document.querySelector(".btn")
let modo = null
let modal = document.getElementById("modal");
let count = 4
let ini = document.getElementById("ini")
let reg = document.getElementById("reg")

class Movie  {
    constructor(nombre, descripcion, actores, id ) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.actores = actores;
        this.id = id
    }
}

const mwm = new Movie("muere monstruo muere", "una pelicula malisima, asi que la voy a usar de relleno", "Tania Casciani", 0)
const fightClub = new Movie("Club de la Pelea", "Un chabón re aburrido se encuentra con uno re divertido y hacen unas re locuras, entre ellas, crear un club", "Brad Pitt", 1);
const groundhogDay = new Movie("Flubber", "El cientifico se saca un moco y se arma alto quilombo", "Robin Williams", 2);
const iAmLegend = new Movie("Soy Leyenda", "Will quedo solo y le habla a maniquíes. El chabón se encuentra con una mujer que le dice que es una leyenda", "Will Smith", 3);

const pelis = [mwm, fightClub, groundhogDay, iAmLegend];

function mostrarDos() {
    for (let i = 1; i < pelis.length; i++) {
    let nombre = pelis[i].nombre
    let descripcion = pelis[i].descripcion
    let actores = pelis[i].actores
    const div = document.createElement("div")
    div.className = "pelis peli" + i
    div.innerHTML= `<img src="img/peli${[i]}.jpg" alt="imagen no disponible"><div><h3>${nombre}</h3> <p>${descripcion}</p> <p>${actores}</p><button value="${[i]}" onclick="borrar(value)">Borrar</button></div>`
    arti.appendChild(div)
    }
}

mostrarDos()

function mostrar() {
    let nombre = input1.value
    let descripcion = input2.value
    let actores = input3.value
    let id = count
    const div = document.createElement("div")
    div.className = "pelis peli" + count
    div.innerHTML= `<img src="img/nodis.jpg" alt="imagen no disponible"><div><h3>${nombre}</h3> <p>${descripcion}</p> <p>${actores}</p><button value="${count}"  onclick="borrar(value)">Borrar</button></div>`
    arti.appendChild(div)
    pelis.push(new Movie(nombre, descripcion, actores, id));
    count++
}

borrar = (value) => {
    let peli = buscarPeli(value)
    pelis.splice(pelis.indexOf(peli), 1)
    document.querySelector(`.peli${value}`).classList.add("borrar")
}

buscarPeli = (a) => {
    return pelis.find(peli => peli.id == a)
}


if (localStorage.getItem('darkMode') === null) {
    localStorage.setItem('darkMode', false)
}

btn[0].addEventListener("click", cambiarEstado)

function revisarEstado() {
    if (localStorage.getItem('darkMode') === "true") {
        modo = true
        document.querySelectorAll("a").forEach((a) => a.classList.add("blacka"))
        document.querySelector("header").classList.add("black")
        document.querySelector("main").classList.add("black")
        document.querySelector("a").classList.add("black")
        document.querySelector("article").classList.add("black")
        document.querySelector('.btn').innerHTML = `<i class="fa-solid fa-sun"></i>`
        document.querySelector('.btn').classList.add("light")
        document.querySelectorAll("button").forEach((a) =>  a.classList.add("light"))
        document.querySelectorAll("button").forEach((a) =>  a.classList.remove("dark"))
    } else {
        modo = false
        document.querySelector('.btn').innerHTML = `<i class="fa-solid fa-moon"></i>`
        document.querySelector('.btn').classList.add("dark")
        document.querySelectorAll("button").forEach((a) =>  a.classList.add("dark"))
    }
}

revisarEstado()

function cambiarEstado() {
    if (localStorage.getItem('darkMode') === "true") {
        localStorage.setItem('darkMode', "false")
        document.querySelector("header").classList.remove("black")
        document.querySelector("a").classList.remove("black")
        document.querySelector("main").classList.remove("black")
        document.querySelector("article").classList.remove("black")
        document.querySelector('.btn').innerHTML = `<i class="fa-solid fa-moon"></i>`
        document.querySelectorAll("a").forEach((a) => a.classList.remove("blacka"))
        document.querySelectorAll("button").forEach((a) =>  a.classList.add("dark"))
        document.querySelectorAll("button").forEach((a) =>  a.classList.remove("light"))
        document.querySelectorAll(".pelis").forEach((a) =>  a.classList.add("darkp"))
        document.querySelectorAll(".pelis").forEach((a) =>  a.classList.remove("lightp"))
    } else {
        localStorage.setItem('darkMode', "true")
        document.querySelector("header").classList.add("black")
        document.querySelector("a").classList.add("black")
        document.querySelector("main").classList.add("black")
        document.querySelector("article").classList.add("black")
        document.querySelector('.btn').innerHTML = `<i class="fa-solid fa-sun"></i>`
        document.querySelectorAll("a").forEach((a) => a.classList.add("blacka"))
        document.querySelectorAll("button").forEach((a) =>  a.classList.add("light"))
        document.querySelectorAll("button").forEach((a) =>  a.classList.remove("dark"))
        document.querySelectorAll(".pelis").forEach((a) =>  a.classList.add("lightp"))
        document.querySelectorAll(".pelis").forEach((a) =>  a.classList.remove("darkp"))
    }
}

class Usuario {
    constructor(nombre, edad, email, password) {
        this.nombre = nombre;
        this.edad = edad;
        this.email = email;
        this.password = password;
    }
}

cerrarModal = () => {
    modal.innerHTML = ""
    modal.classList.remove("modal")
}

crearUsuario = () => {
    modal.classList.add("modal")
    modal.innerHTML = `<div class="modal-container"><div class="modal-header"><h2>Crear Usuario</h2></div><div class="modal-body"><div><label for="nombre"><p>Nombre:</p></label><input type="text" id="nombre" placeholder="Nombre"></div><div><label for="edad"><p>Edad:</p></label><input type="number" id="edad" placeholder="Edad"></div><div><label for="email"><p>Email:</p></label><input type="email" id="email" placeholder="Email"></div><div><label for="contraseña"><p>Contraseña:</p></label><input type="password" id="password" placeholder="Contraseña"></div></div><div class="modal-footer"><button type="button" onclick="crearUsuario2()">Crear</button><button type="button" onclick="cerrarModal()">Cerrar</button></div></div>`
}
    
crearUsuario2 = () => {
    let nombre = document.querySelector("#nombre").value
    let edad = document.querySelector("#edad").value
    let email = document.querySelector("#email").value
    let password = document.querySelector("#password").value
    let usuario = new Usuario(nombre, edad, email, password)
    localStorage.setItem('usuario', JSON.stringify(usuario))
    cerrarModal()
}

iniciarSesion = () => {
    modal.classList.add("modal")
    modal.innerHTML = `<div class="modal-container"><div class="modal-header"><h2>Iniciar Sesión</h2></div><div class="modal-body"><div><label for="email"><p>Email:</p></label><input type="email" id="email" placeholder="Email"></div><div><label for="contraseña"><p>Contraseña:</p></label><input type="password" id="password" placeholder="Contraseña"></div></div><div class="modal-footer"><button type="button" onclick="iniciarSesion2()">Iniciar</button><button type="button" onclick="cerrarModal()">Cerrar</button></div></div>`
}

borrarBotones = () => {
    ini.classList.add("borrar")
    creo.classList.add("borrar")
}

bienvenida = () => {
    reg.style.display = "none"
    ini.style.display = "none"
    Swal.fire(
        'Hola!',
        'Te damos la Bienvenida',
        'success'
    )
    cerrarModal()
}

iniciarSesion2 = () => {
    let email = document.querySelector("#email").value
    let password = document.querySelector("#password").value
    let usuario = JSON.parse(localStorage.getItem('usuario'))
    if (usuario.email === email && usuario.password === password) {
        bienvenida()
    } else {
        Swal.fire(
            'Error',
            'Email o contraseña incorrecto',
            'error'
          )
    }
}

fetch('api.json')
.then(resp => resp.json())
.then(info => console.log(info))
