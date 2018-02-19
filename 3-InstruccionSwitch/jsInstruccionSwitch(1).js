function Mostrar()
{  
//tomo el mes
var mesDelAño= document.getElementById("mes").value;


switch (mesDelAño){ 
    
    case "Enero":
    alert( "que comiences bien el año " );
    break; 
    
    case "Marzo":
    alert("a clases ");
    break;
   
    case "Julio":
    alert("se vienen las vacaciones ");
    break;

    case "Diciembre":
    alert("felices fiestas ");
    break;
    default:
    alert(" este mes no existe");
    
}



}

//FIN DE LA FUNCIÓN