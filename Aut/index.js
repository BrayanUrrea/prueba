import { mostrar } from './connBD.js'

mostrar().then((p) =>{
    console.log(p.user)
    console.log(p.password)
    console.log(p)
})

// var myObj = new Object(),
//   str = "myString",
//   rand = Math.random(),
//   obj = new Object();

// myObj.type = "Sintaxis de puntos";
// myObj["fecha de creación"] = "Cadena con espacios";
// myObj[str] = "Valor de cadena";
// myObj[rand] = "Número aleatorio";
// myObj[obj] = "Object";
// myObj[""] = "Incluso una cadena vacía";

// console.log(myObj['fecha de creación']);


