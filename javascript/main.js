//console.log("Hola mundo desde Javascript");

//DOM
/*let tabla = document.querySelector(".table");
console.log(tabla);

let links = document.querySelectorAll("a");

links.forEach(function(link){
    console.log(link);
})*/

/*let celdas = document.querySelectorAll("td");

celdas.forEach(function(td){
    td.addEventListener('click',function(){
        console.log(this)
    })
})*/

//Obtener los elementos de la clase .close

//let links = document.querySelectorAll(".close");

//Recorrerlos

/*links.forEach(function(link){
    //Agregar un evento click a cada uno de ellos
    link.addEventListener("click",function(ev){
        ev.preventDefault();

        return false;
    });
});*/
/*
let iconos = document.querySelectorAll("i");

iconos.forEach(function(icono){
    icono.classList.remove("fa-star");
})
*/

//Obtener los elementos de la clase .close
let links = document.querySelectorAll(".close");

//Recorrerlos
links.forEach(function(link){
    //Agregar un evento click a cada uno de ellos
    link.addEventListener("click",function(ev){
        ev.preventDefault();
        let content = document.querySelector('.content');

        //Quitarle las clases de animación que ya tiene
        content.classList.remove("animate__fadeInDown");
        content.classList.remove("animate__animated");

        //Agregar clases para animar su salida
        content.classList.add("animate__fadeOutUp");
        content.classList.add("animate__animated");

        //setTimeout(() => {location.href = "/";},600);
        setTimeout(function(){
            location.href = "/boletines";
        },600);
        return false;
    });
});

