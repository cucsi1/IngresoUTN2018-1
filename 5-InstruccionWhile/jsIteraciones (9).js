function Mostrar()
{

/*	var contador=0;
	// declarar variables
	var numero;
	var mayor;
	var menor;
	var respuesta;
	do{
		numero = parseInt(prompt("Ingrese un numero: "));
		contador++;
		respuesta = prompt("desea ingresar otro numero: ? s/n");
		if(contador == 1){
			mayor = numero;
			menor = numero; 
		}
		if(numero > mayor){
			mayor = numero;
		}
		if(numero < menor){
			menor = numero;
		}
	
	}while(respuesta =='s');
	
	document.getElementById("maximo").value = mayor;
	document.getElementById("minimo").value = menor;

	//OTRA SOLUCION USANDO BANDERA EN VEZ DE CONTADOR 

*/	var numero;
	var mayor;
	var menor;
	var respuesta;
	var flag=0; 

	do{
		numero = parseInt(prompt("Ingrese un numero: "));

		if(numero > mayor || flag == 0){
			mayor = numero;
		}

		if(numero < menor || flag == 0){
			menor = numero;
			flag = 1;
		}
		
		respuesta = prompt("desea continuar: s/n?");
	}while(respuesta == 's');

	document.getElementById("maximo").value = "El numero mayor es:  " + mayor;
	document.getElementById("minimo").value = "El numero menor ingresado es:  " + menor; 

	
	




}//FIN DE LA FUNCIÓN