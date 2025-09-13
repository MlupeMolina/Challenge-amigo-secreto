// Variable global que almacena los nombres ingresados
let amigos = [];

/*
  Este bloque permite al usuario ingresar nombres de amigos en un campo de texto siempre que el campo no esté vacío.
  Al hacerlo, el nombre se agrega a la lista de amigos y se muestra en pantalla.
*/
function agregarAmigo() {
  let nombre = document.querySelector("#amigo").value;

  if (nombre === "") {
    alert("Por favor ingrese un nombre.");
    return;
  }

  amigos.push(nombre);
  document.querySelector("#amigo").value = "";
  mostrarAmigos();
}

// Permite agregar con Enter
document.querySelector("#amigo").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    agregarAmigo();
  }
});

/*
  La función mostrarAmigos() actualiza la lista en pantalla,
  mostrando los nombres ingresados.
*/
function mostrarAmigos() {
  let lista = document.querySelector("#listaAmigos");
  lista.innerHTML = "";

  /*
    Bucle que recorre y asigna un elemento de lista por cada amigo ingresado.
  */
  for (let i = 0; i < amigos.length; i++) {
    let items = document.createElement("li");
    items.textContent = amigos[i];

    // Crea un nuevo elemento de enlace para la "X"
    let enlaceX = document.createElement("a");
    enlaceX.textContent = "x";
    enlaceX.href = "#"; // El "#" evita que la página se recargue
    enlaceX.className = "eliminar-amigo";

    // Le añade un escuchador de eventos para que llame a la función eliminarAmigo
    enlaceX.addEventListener('click', function (event) {
      // Previene el comportamiento por defecto del enlace (que la página se recargue)
      event.preventDefault();
      eliminarAmigo(i);
    });

    items.appendChild(enlaceX);
    lista.appendChild(items);
  }
}

/*
  Función que realiza el sorteo. Primero verifica que haya suficientes nombres ingresados
  y luego elige uno al azar para mostrarlo en pantalla.
*/
function sortearAmigo() {
  let sorteado = document.querySelector("#resultado");
  if (amigos.length < 2) {
    alert("Debe ingresar al menos dos amigos para realizar el sorteo.");
    return;
  }

  let indice = Math.floor(Math.random() * amigos.length);
  sorteado.textContent = `El amigo sorteado es: ${amigos[indice]}`;
}

/*
  La funcion eliminarAmigo() permite al usuario eliminar cualquier nombre de la lista
  y se actualiza la lista en pantalla
*/
function eliminarAmigo(posicion) {
  // Con splice() se elimina 1 elemento en la posición dada
  amigos.splice(posicion, 1);
  // Se vuelve a llamar a la función para actualizar la lista en la pantalla
  mostrarAmigos();
}
/*
  La función reiniciar() reinicia el sorteo.
  Borra el array de amigos, limpia la lista en pantalla y el resultado.
*/
function reiniciar() {
 amigos = [];
 document.querySelector("#resultado").innerHTML = "";
 mostrarAmigos();
}