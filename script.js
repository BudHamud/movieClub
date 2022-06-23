let input1 = document.getElementsByName("input1")[0];
let input2 = document.getElementsByName("input2")[0];
let input3 = document.getElementsByName("input3")[0];
let arti = document.querySelector(".movies")
let btn = document.getElementsByClassName("btn")
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
const groundhogDay = new Movie("El Dia de la Marmota", "Se repite el mismo dia, precisamente el día de la marmota como indica el título de la película", "Phill Murray", 2);
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

crearUsuario = () => {
    modal.classList.add("modal")
    modal.innerHTML = `<div class="modal-container"><div class="modal-header"><h2>Crear Usuario</h2></div><div class="modal-body"><div><label for="nombre">Nombre</label><input type="text" id="nombre" placeholder="Nombre"></div><div><label for="edad">Edad</label><input type="number" id="edad" placeholder="Edad"></div><div><label for="email">Email</label><input type="email" id="email" placeholder="Email"></div><div><label for="contraseña">Constraseña</label><input type="password" id="password" placeholder="Contraseña"></div></div><div class="modal-footer"><button type="button" onclick="crearUsuario2()">Crear</button><button type="button" onclick="cerrarModal()">Cerrar</button></div></div>`
}
    
crearUsuario2 = () => {
    let nombre = document.querySelector("#nombre").value
    let edad = document.querySelector("#edad").value
    let email = document.querySelector("#email").value
    let password = document.querySelector("#password").value
    let usuario = new Usuario(nombre, edad, email, password)
    localStorage.setItem('usuario', JSON.stringify(usuario))
    Swal.fire(
        'Excelente!',
        'Usuario creado con éxito',
        'success'
    )
    cerrarModal()
}

iniciarSesion = () => {
    modal.classList.add("modal")
    modal.innerHTML = `<div class="modal-container"><div class="modal-header"><h2>Iniciar Sesión</h2></div><div class="modal-body"><div><label for="email">Email</label><input type="email" id="email" placeholder="Email"></div><div><label for="contraseña">Contraseña</label><input type="password" id="password" placeholder="Contraseña"></div></div><div class="modal-footer"><button type="button" onclick="iniciarSesion2()">Iniciar</button><button type="button" onclick="cerrarModal()">Cerrar</button></div></div>`
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

aver = () => {
    Swal.fire(
        'Good job!',
        'You clicked the button!',
        'success'
      )
}