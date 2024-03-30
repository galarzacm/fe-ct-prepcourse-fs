function saludar (){
console.log("Hola");
}

function saludarAUnaPersona(nombre, cb) {
  cb() //funcion de CallBack
  console.log(nombre)
}

saludarAUnaPersona("Cristian", saludar)

