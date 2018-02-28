function Mostrar()
{
    var positivo=0;
	var negativo=1;
	var respuesta;
	var numero;
	var contadorNegativo= 0;
	//OTRA OPCION PARA VERIFICAR LOS NEGATIVOS
	//var flag = 0;
	
	do{
		numero = parseInt(prompt("Ingrese un numero"));
		
		if(numero >=0){
			positivo = positivo + numero;
		}else{
			negativo = numero * negativo;
			contadorNegativo++; 
			//flag =1;
		}
		
		respuesta = prompt("Desea ingresar otro numero?");

	}while(respuesta == 's');


document.getElementById('suma').value=positivo;

	if(contadorNegativo == 0) { //(!flag)
		negativo = 0;
	}
document.getElementById('producto').value=negativo;






}//FIN DE LA FUNCIÓN