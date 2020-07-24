alert ('hola antoniooooo');
var nombre= "Carlos Fuentes";
var altura=185;
/*

var concatenacion = nombre + " " + altura;

var datos=document.getElementById("datos");
datos.innerHTML=concatenacion;


if(altura >=190){
    datos.innerHTML +='<h1>Eres super alto</h1>'
}
else{
    datos.innerHTML +='<h1>No eres una persona alta</h1>'
}


for(var i=0; i<=2020; i++){
    datos.innerHTML += "<h2>Estamos en el año: "+i;
}
*/
function MuestraMiNombre(nombre,altura){
    var MisDatos =`
    <h1>Soy la caja de datos</h1>
    <h2>Mi nombre es: ${nombre}</h2>
    <h3>Mido: ${altura}</h3>
    `;
return MisDatos;
}

function imprimir({
    var datos = document.getElementById("datos");
    datos.innerHTML = MuestraMiNombre();
    

})

MuestraMiNombre("Carlos fuentes",190);