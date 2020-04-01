//DOM
var FPS=40;


var ancho=700;
var alto=300;
var piso=200;

var canvas,ctx;

var imgAlbert,imgCorona,imgBsas;


var presi={y:piso, vy:0, gravedad:2, salto:28, vymax:9, saltando:false };
var nivel={ velocidad:7, marcador:0, muerto:false};
var corona={x:ancho+100, y:piso};
var avion={x:400, y:30, velocidad:1};
var fondo={x:0, y:piso+35};





//Eventos
document.addEventListener("keydown", salta);
document.addEventListener("click", salta);



//Callbacks 

function saltar(){
	presi.saltando=true;
	presi.vy=presi.salto;

	}




function salta(evento){ // 
		if (evento.keyCode == 32 || evento.button == 0 ) {
			//console.log('salta')
			

			if (nivel.muerto== false){
				saltar()
				}else{
					nivel.velocidad=9;
					nivel.muerto=false;
					nivel.marcador=0;

					avion.velocidad=1;
					corona.x=ancho+100;
					avion.x=ancho+100;

			}


		}

	}




function cargaImagenes(){ 
	imgAlbert=new Image();
	imgCorona=new Image();
	imgBsas=new Image();
	imgAvion=new Image();
	albertlus=new Image();


	imgAlbert.src="fotos/albert.jpg"
	imgCorona.src="fotos/corona.jpg"
	imgBsas.src="fotos/fondo.jpg"
	imgAvion.src="fotos/avion.jpg"
	albertlus.src="fotos/albertlus.jpg"
	
}

function inicializa(){ // probar despues de mandar estas 2 variables pa arriba

	canvas=document.getElementById('canvas');
	ctx=canvas.getContext('2d');
	cargaImagenes();

}







function dibujaFondo(){
	ctx.drawImage(imgBsas,fondo.x,0,700,300,0,fondo.y,700,30);

}

function dibujaAlbert(){
	ctx.drawImage(imgAlbert,0,0,160,160,100,presi.y,50,50);

}
/*function colisionAlbert(){
	if (nivel.muerto== true) {
	console.log('mori');

	}
}*/

function dibujaCorona(){
	ctx.drawImage(imgCorona,0,0,939,939,corona.x,corona.y,50,50);

}
function dibujaAvion(){
	ctx.drawImage(imgAvion,0,0,939,939,avion.x,avion.y,90,90);

}


function logicaFondo(){//como se mueve el fondo
	if (fondo.x > 700) {
		fondo.x= 0;

	} else {
		fondo.x+=nivel.velocidad;

	}

}





function vuela(){//como se mueve el avion
	if (avion.x < -100) {
		avion.x= ancho+100;

	} else {
		avion.x-= nivel.velocidad/4;

	}

}



function contagio(){//como se mueve el corona
	if (corona.x < -100) {
		corona.x= ancho+100;
		nivel.marcador++;

	} else {
		corona.x-=nivel.velocidad;

	}

}


function colision(){ // probar despues de mandar estas 2 variables pa arriba
	if (corona.x >= 130 && corona.x <=150 ) {
		if (presi.y>= piso){
			nivel.muerto=true;
			nivel.velocidad=0;
			avion.velocidad=0;
		}

	}

	if (corona.x >= 90 && corona.x <=150 	) {
		if (presi.y>0 &&corona.y-presi.y<= 55	){
			console.log('UY')
			nivel.muerto=true;
			nivel.velocidad=0;
			avion.velocidad=0;
		}

	}


}





function gravedad(){
	if (presi.saltando == true) {
			
		if (presi.y-presi.vy-presi.gravedad > piso) { 
			presi.saltando = false;
			presi.vy=0;
			presi.y=piso;
		}
		else {
			presi.vy -= presi.gravedad;
			presi.y-=presi.vy;

		}
	}
}







function puntuacion(){//como se mueve el corona
	ctx.font="30px impact";
	ctx.fillStyle="#0CB7F2";
	ctx.fillText(`${nivel.marcador}`,600,50);

	if (nivel.muerto== true) {
		
		ctx.drawImage(albertlus,0,0,160,160,100,presi.y,50,50);
		ctx.font = "60px impact";
		ctx.fillText("Corona wins :(",200,150);

	}

}


function pasarNivel1(){
	if (nivel.marcador == 2 ){
		ctx.font = "60px impact";
		ctx.fillText("segunda semana",200,150);
		nivel.velocidad=nivel.velocidad+1

	}
}
function pasarNivel2(){
	if (nivel.marcador == 7 ){
		ctx.font = "60px impact";
		ctx.fillText("tercer semana",200,150);
	}
}





             //--------//  Bucle principal -------

setInterval(function(){
	principal();

}, 1000/FPS)


function borraCanvas(){
	canvas.width=ancho;
	canvas.height=alto;

}

function principal(){
	borraCanvas();
	gravedad();
	colision();
	//colisionAlbert()
	logicaFondo();
	//console.log('principal')
	contagio();
	vuela();
	dibujaFondo();
	dibujaAvion();
	dibujaCorona();
	dibujaAlbert();
	puntuacion();
	pasarNivel1();


}
