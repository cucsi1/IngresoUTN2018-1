function Mostrar()
{
//tomo el mes 
var mesDelAño = document.getElementById('mes').value;

switch ( mesDelAño){
    case "Febrero":
    alert("este mes no tiene mas de 29 dias");
    break;
    
    case "Enero":
    case "Marzo":
    case "Abril":
    case "Mayo":
    case "Junio":
    case "Julio":
    case "Agosto":
    case "Septiembre":
    case "Octubre":
    case "Noviembre":
    case "Diciembre":
    alert("Este mes tiene 30 o mas días");
    break;

}
	
	


}//FIN DE LA FUNCIÓN