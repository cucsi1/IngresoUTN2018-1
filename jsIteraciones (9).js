function Mostrar()
{

	var contador=0;
	var numero;
	var mayor;
	var menor;
	var respuesta;
	
	   
	do{ 
	    
		numero=parseInt(prompt("ingrese numero"));
		contador++;
		respuesta=prompt("desea continuar?");



	     
	  
	if ( contador ==1){

		mayor=numero;
		menor=numero;
		}
	 
	 
	   if (numero > mayor){
		  
     	mayor=numero;
  
	}
	   if (numero < menor){
		   menor=numero;
	   }
	 
	
	// declarar variables
	


	} while(respuesta =='s');

	document.getElementById("maximo").value= " el numero es mayor " + mayor;
	document.getElementById("minimo").value= " el numero es menor " + menor;
	
		
	
	




}//FIN DE LA FUNCIÓN