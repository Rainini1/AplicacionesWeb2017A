/**
 * Created by Alex on 29/5/2017.
 */


function holaMundo()
{
    console.log("Hola Mundo 1")
};

let holaMundo2 = function () {
    console.log("Hola Mundo 2")
}

let holaMundo3 = ()=> {
    console.log("Hola Mundo 3")
}

let holamundo4 = () => console.log("Hola Mundo 4");

let holaMundo5 = function () {
    return 5;
}

let holaMundo6 = ()=> 5; //se omite el return

let holaMundo7 = ()=> {
    let a = 2;
    return a+3;
};

let nombreUsuario = "Alexandra Granda";

let saludar = nombre => "Hola" + nombreUsuario;//retorna un string sin necesidad de especificarlo

let saludarConApellido = (nombre, apellido) => `Hola ${nombre} ${apellido}`;

console.log(saludarConApellido("Alexandra", "Granda"));