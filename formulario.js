var formulario = document.querySelector("#formulario"); // Estaba utilizando un id que no existía, así que seleccioné el formulario por el id "formulario"

formulario.onsubmit = function (e) {
  e.preventDefault(); // Tenía e.prevent y lo cambié por la versión correcta

  var n = formulario.elements[0];
  var edadElemento = formulario.elements[1]; // Renombré la variable para evitar conflictos de nombres
  var na = formulario.elements[2];

  var nombre = n.value;
  var edad = edadElemento.value; // Utilicé la variable renombrada

  var i = na.selectedIndex;
  var nacionalidad = na.options[i].value;
  console.log(nombre, edad);
  console.log(nacionalidad);

  if (nombre.length === 0) {
    n.classList.add("error");
  }
  if (edad < 18 || edad > 120) {
    edadElemento.classList.add("error");
  }

  if (nombre.length > 0 && edad >= 18 && edad <= 120) {
    // Verifiqué correctamente el rango de edad
    agregarInvitado(nombre, edad, nacionalidad);
  }
};

var lista = document.getElementById("lista-de-invitados"); // Declaré la variable lista fuera de la función agregarInvitado

function agregarInvitado(nombre, edad, nacionalidad) {
  if (nacionalidad === "ar") {
    nacionalidad = "Argentina";
  } else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana";
  } else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana";
  } else if (nacionalidad === "per") {
    nacionalidad = "Peruana";
  }

  var elementoLista = document.createElement("div");
  elementoLista.classList.add("elemento-lista"); // Agregué la clase al elemento

  lista.appendChild(elementoLista);

  crearElemento("Nombre", nombre, elementoLista); // Pasé elementoLista como argumento
  crearElemento("Edad", edad, elementoLista); // Pasé elementoLista como argumento
  crearElemento("Nacionalidad", nacionalidad, elementoLista); // Pasé elementoLista como argumento

  var corteLinea = document.createElement("br"); // Agregué un salto de línea después de cada elemento de la lista
  elementoLista.appendChild(corteLinea);

  var botonBorrar = document.createElement("button");
  botonBorrar.textContent = "Eliminar invitado";
  botonBorrar.className = "boton-borrar"; // Agregué una clase CSS al botón
  elementoLista.appendChild(botonBorrar);

  botonBorrar.onclick = function () {
    elementoLista.remove(); // Eliminé el elemento de la lista correctamente
  };
}

function crearElemento(descripcion, valor, elementoLista) {
  // Agregué elementoLista como argumento para evitar errores de variable no definida
  var spanNombre = document.createElement("span");
  var inputNombre = document.createElement("input");
  var espacio = document.createElement("br");
  spanNombre.textContent = descripcion + ": ";
  inputNombre.value = valor;
  elementoLista.appendChild(spanNombre);
  elementoLista.appendChild(inputNombre);
  elementoLista.appendChild(espacio);
}
