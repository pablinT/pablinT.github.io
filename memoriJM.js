
//1-DOM
const botones=document.querySelector("div.fichas");
var candi = [];

var canvas=document.getElementById('canvas');
var	ctx=canvas.getContext('2d');

var jug1= [0];
var jug2= [0];
var suma1=0;
var suma2=0;

//2-Eventos

botones.addEventListener("click", darVuelta);
botones.addEventListener("click", tranquiloEh);
botones.addEventListener("click", noMasDe2);

canvas.addEventListener("click", sumarAdentro);// USAR ESTOS DOS PARA PUNTAJES

canvas.addEventListener("click", paveando);//USAR ESTOS DOS PARA PUNTAJES
//botones.addEventListener("click", quienEs);
//botones.addEventListener("click", contarClicks);

//botones.addEventListener("click", Comparar);






//3-Callbacks FUNCIONES QUE LAS EJECUTA EL MOTOR DE JAVASCRIPT
	function lala(u){ // ESTO ES UN INTENTO PARA ACOMODAR LA CHANCHADA DE ABAJO
		var quien=u.target.name;
    	
	    	var lala=u.target.src;
	    	var dondeDer=donde.match(/.*\/(.*)$/)[1];// me quedo con la parte derecha, el nombre de la imagen
	    	var dondeIzq=donde.match(/^(.*\/)/)[1];//me quedo con la parte izquierda, todo menos 'imagen.jpg'

	}
function sumarAdentro(u){
	//var aVer=u.target.type;
	//console.log(suma1);
	ctx.font="30px impact";
	ctx.fillStyle="#000000";
	//ctx.fillText('Tocá acá',10,50);

	ctx.clearRect(0, 0, 300, 300);
	ctx.fillText("En construcción :D",10,50);
	
	//ctx.fillText("   J1:  " + `${suma1}`+"   J2:  " + `${suma1}`,10,50);
	

	}

function puntajeJug1(u){
	jug2.push(1)

		jug2.forEach (function(numero){//esto es para sumar todos los aciertos
        suma1 += numero;
    	});
    	console.log(suma1);
	
		}

function puntajeJug1(u){
	jug2.push(1)
	
		jug2.forEach (function(numero){//esto es para sumar todos los aciertos
        suma2 += numero;
    	});
    	console.log(suma2);
	
		}

	function darVuelta(li){ 
	    //var quien=li.originalTarget.value;
	    	var quien=li.target.name;
	    	
	    	var donde=li.target.src;
	    	var dondeDer=donde.match(/.*\/(.*)$/)[1];// me quedo con la parte derecha, el nombre de la imagen
	    	var dondeIzq=donde.match(/^(.*\/)/)[1];//me quedo con la parte izquierda, todo menos 'imagen.jpg'

	    if (li.target.type == "image"){
	    				    			
	    					if (dondeDer =="tapa.jpg") { // Si esta boca abajo la ficha
	    						console.log('acala esta el clickeo ficha');   							    							    					
								li.target.src = dondeIzq+quien+".jpg";
								candi.push(quien)
											if (candi.length==2) { // si ya di vuelta dos fichas

												if (candi[0]==candi[1]) { // y son iguales..
														
														candi[0].outerHTML='<img src="li.target.src">';//quedadan cara arriba las fichas y dejan de ser input
														candi[1].outerHTML='<img src="li.target.src">';//quedadan cara arriba las fichas y dejan de ser input
														
														candi=[];// vacio el candi para que quede listo para una proxima evaluacion
														
												}else{ //si no son iguales
														li.target.src =dondeIzq+quien+".jpg";


														setTimeout(function(){
															li.target.src = dondeIzq+"tapa.jpg";
															

															// ALTA CROTADA ESTO  --- CHANCHADA /////

															document.getElementsByName(candi[0])[0].src=
															document.getElementsByName(candi[0])[0].src.match(/^(.*\/)/)[1]+"tapa.jpg"


															
															document.getElementsByName(candi[0])[1].src=
															document.getElementsByName(candi[0])[1].src.match(/^(.*\/)/)[1]+"tapa.jpg"


															}, 1100);

														setTimeout(function(){
															
														candi=[]}, 1101);// vacio el candi para que quede listo para una proxima evaluacion
														
														}
											}else{//si solo elegi un candidato todavia, o sea, el candi.length=1

												}
							} 
		}
}
		

function tranquiloEh(u){
 	if (!candi.length==0){

u.preventDefault();

	}			
}				


function noMasDe2(u){
	var losInputs=document.getElementsByTagName('input') //hay 18 fichas

 	if (candi.length==2){  // si hay dos fichas siendo evaluando no podes tocar otra
 		 for (var i = 0; i < 18; i++) { // inhabilito todas cuando ocurre una evaluacion
 		 		losInputs[i].disabled=true;

				setTimeout(function(){		//	vuelvo a habilitarlas al mismo tiempo que el array candi se vacia											
							for (var i = 0; i < 18; i++) {
 					 		losInputs[i].disabled=false;

							}
						}, 1101)
 		
  
	}

							
	}
}




