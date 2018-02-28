function Mostrar()
{
	var numero;
	var acumulador = 0;
	var contador = 0;
	var promedio;

while ( contador <5  ){

	numero=parseInt(prompt(" ingresar numero "));
	acumulador= acumulador + numero;
	contador= contador + 1;
    }
		promedio= acumulador/5;
      


document.getElementById('suma').value=contador;
document.getElementById('promedio').value=promedio;
}
//FIN DE LA FUNCIÓN