function Mostrar()
{

var sexo = prompt("ingrese f ó m .");


while ( sexo != "f" && sexo != "m"){
    sexo=prompt("dato mal ingresado");
}

alert("dato valido");
document.getElementById("Sexo").value=sexo;

}//FIN DE LA FUNCIÓN