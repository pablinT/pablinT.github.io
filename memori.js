
//1-DOM
const botones=document.querySelector("div.fichas");
var candi = [];


//2-Eventos

botones.addEventListener("click", darVuelta);
botones.addEventListener("click", tranquiloEh);

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




	function darVuelta(li){ 
	    //var quien=li.originalTarget.value;
	    	var quien=li.target.name;
	    	
	    	var donde=li.target.src;
	    	var dondeDer=donde.match(/.*\/(.*)$/)[1];// me quedo con la parte derecha, el nombre de la imagen
	    	var dondeIzq=donde.match(/^(.*\/)/)[1];//me quedo con la parte izquierda, todo menos 'imagen.jpg'

	    if (li.target.type == "image"){
	    				    			
	    					if (dondeDer =="urna.jpg") { // Si esta boca abajo la ficha
	    						console.log('acala esta el click');
   							    							    					
							//console.log(li.target.type); si no sabes de que tipo es..... facil che

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
															li.target.src = dondeIzq+"urna.jpg";
															

															// ALTA CROTADA ESTO  --- CHANCHADA /////

															document.getElementsByName(candi[0])[0].src=
															document.getElementsByName(candi[0])[0].src.match(/^(.*\/)/)[1]+"urna.jpg"


															
															document.getElementsByName(candi[0])[1].src=
															document.getElementsByName(candi[0])[1].src.match(/^(.*\/)/)[1]+"urna.jpg"


															}, 1200);

														setTimeout(function(){
															
														candi=[]}, 1201);// vacio el candi para que quede listo para una proxima evaluacion
														
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



	// 								} else {
	// 							console.log("aca iria urna");
	// 							li.target.src = dondeIzq+"urna.jpg";
	// 										}
	// 						}
	// 					}
	// function Comparar(u){

	// 		var candi1=u.target.name;
	// 		var candiDoble=document.getElementsByName(candi1);
			
	// if (u.target.type == "image" ){
	// 	candi.push(candi1)

	// 		if (candi.length==2) {
	// 					if (candi[0]==candi[1]) {
	// 							for ( i=0; i<2; i++) {
	// 							candiDoble[0].outerHTML='<img src="file:///C:/Users/Pablo/Dropbox/EDUCACIONIT/memori/fotos/axel.jpg">';
	// 							candi=[];
	// 							// // // candi1Doble[i].target.outerHTML='<img src="file:///C:/Users/Pablo/Dropbox/EDUCACIONIT/memori/fotos/axel.jpg">';
	// 								}
								//u.target.outerHTML='<img src="file:///C:/Users/Pablo/Dropbox/EDUCACIONIT/memori/fotos/axel.jpg">';

							
			// ME PA QUE CUANDO TOCO UNA FICHA, MEJOR LA CONVIERTO EN IMAGEN. DE ULTIMA SI COINCIDEN LA DEJO ASI
			//TAMBIEN HAY QUE PONERLE UN TOPE A LA CANTIDAD DE IMAGENES QUE SE PUEDEN TOCAR





		

			// if (candi==[]){
			// 	candi[0]=candi1;
			// 	}else{
			// 	candi[1]=candi1;	
			// 	candi2=candi[1];
			// 	}
			
		
			// if (!candi2=='') {//si todavia no elegimos 2do candidatos
			// 		if (candi1==candi2) {//si los candidatos son iguales
			// 			u.target.i




			// }













