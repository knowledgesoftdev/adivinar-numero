/* Crea un juego de adivinanza en JavaScript. Genera un número aleatorio y permite al usuario ingresar un número para adivinar el número generado. Si el número ingresado es mayor o menor que el número generado, muestra un mensaje al usuario para ayudarlo a adivinar. */

/* let numAleatorio=Math.floor(Math.random()*20+1)

while(true){
    //AQUI IRA EL PROMPT LO PONDRE AL FINAL
    let numero=parseInt(prompt("Ingresar un número entre el 1 - 20."))
    if(isNaN(numero)){
        alert("Debe ser númerico, leer la indicación")
    }

    if(numero===0 || numero>20){
        alert("Leer la indicación no puede ser cero, y tampoco puede superar el rango(20)..!")
    }else{
        if(numAleatorio===numero){
            alert("Felicidades, encontrastes el número escondido")
            break
        }else{
            if(numero>numAleatorio){
                alert("Menos.!")
            }

            if(numero<numAleatorio){
                alert("Más.!")
            }
        }
    }
} */

//OBTENIENDO LOS IDS
const divCartas = document.querySelector(".cartas");
const divs = document.querySelector(".estiloDiv");

//FUNCIONES
crearDivs = () => {
  let numAleatorio = Math.floor(Math.random() * 20 + 1);
  for (let i = 1; i <= 20; i++) {
    let div = document.createElement("div");
    div.classList.add("estiloDiv");
    let numeroDiv = document.createTextNode(i);

    div.appendChild(numeroDiv);
    divCartas.appendChild(div);

    div.addEventListener("click", () => {
      if (numAleatorio === i) {
        Swal.fire(
            'Good!',
            'Enhorabuena, encontrastes el número, a que no puedes volver a intentarlo!',
            'success'
          )
        reiniciarJuego();
      }

      if (i > numAleatorio) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Menos!',
          })
      }

      if (i < numAleatorio) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Más!',
          })
      }
    });
  }
};

reiniciarJuego = () => {
  divCartas.innerHTML = "";
  crearDivs();
};

//EVENTOS
window.addEventListener("load", crearDivs);
