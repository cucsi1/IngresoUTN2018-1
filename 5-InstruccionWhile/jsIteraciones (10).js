/*
1-Suma de los negativos. 
2-Suma de los positivos. 
3-Cantidad de positivos.
4-Cantidad de negativos. 
5-Cantidad de ceros.
6-Cantidad de números pares. 
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos).
*/
function Mostrar()
{

	var numero;
	var contadorPositivo = 0;
	var contadorNegativo = 0;
	var contadorCero = 0;
	var contadorPares = 0;
	var acumuladorPositivo = 0;
	var acumuladorNegativo = 0;
	var diferencia;
	var promedioPositivo = 0;
	var promedioNegativo = 0; 
	var continuar;

	do{
		numero = parseInt(prompt("Ingrese un numero: ")); 
			if(numero > 0 ){
				acumuladorPositivo = acumuladorPositivo + numero; 
				contadorPositivo++;
			}else if(numero < 0 ){
				acumuladorNegativo = acumuladorNegativo + numero;
				contadorNegativo++;
			}else{
				contadorCero++;
			}

			if(numero % 2 == 0){
				contadorPares++;
			}
		continuar = prompt("Desea continuar ingresando numeros: s/n?");
	}while(continuar == 's');

	if(contadorPositivo != 0){
		promedioPositivo = acumuladorPositivo / contadorPositivo;
	}

	if(contadorNegativo != 0){
		promedioNegativo = acumuladorNegativo / contadorNegativo;
	}

	document.write(("1-Suma de los negativos es: " + acumuladorNegativo) + <br/> +
	("2-Suma de los positivos es: " +  acumuladorPositivo) + <br/> + 
	("3-Cantidad de positivos es: " + contadorPositivo) + <br/> + 
	("4-Cantidad de negativos es: " + contadorNegativo) + <br/> + 
	("5-Cantidad de ceros es: " + contadorCero) + <br/> + 
	("6-Cantidad de números pares es: " + contadorPares) + <br/> +  
	("7-Promedio de positivos es : " + promedioPositivo) + <br/> +
	("8-Promedios de negativos es: " + promedioNegativo) + <br/> + 
	("9-Diferencia entre positivos y negativos es: " + diferencia) + <br/>);



}//FIN DE LA FUNCIÓN