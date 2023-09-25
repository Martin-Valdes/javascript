//Este codigo se basa en un formulario que debe completar un cliente con el fin de 
//solicitar un ptroducto a medida. En desarrollo web realice en el index dicho formulario.
//La idea es poder generar una cotizacion luego de completar los campos.

let medidaX;
let medidaY;
let materialPcb;
let paisEnvio;
let cantidadUnidades;
let costoEnvio;


while (isNaN(medidaX)){
    medidaX = parseInt(prompt('Ingrese el largo en mm del PCB'));
    comprobarDato(medidaX);
    
}


while (isNaN(medidaY)){
    medidaY = parseInt(prompt('Ingrese el ancho en mm del PCB'));
    comprobarDato(medidaY);
}

while(true){
    materialPcb = parseInt(prompt('Ingrese el material de fabricacion\n 1-FR4\n 2-Fibra'))
switch(materialPcb){

case 1:
    break;
case 2:
    break;
default:
    alert('no has introducido un valor valido');

}
if(materialPcb == 1 || materialPcb == 2){
    break;
}
}

while(true){
    paisEnvio = parseInt(prompt('Ingrese el pais de destino:\n 1-Uruguay\n 2-Argentina\n 3-Brasil'))
switch(paisEnvio){

case 1:
    costoEnvio = 50;
    break;
case 2:
    costoEnvio = 70;
    break;
case 3:
    costoEnvio = 40;
    break;
default:
    alert('no has introducido un valor valido');

}
if(paisEnvio<4 && paisEnvio>0){
    break;
}
}

while (isNaN(cantidadUnidades)){
    cantidadUnidades = parseInt(prompt('Ingrese cantidad de unidades de PCB´s'));
    comprobarDato(cantidadUnidades);
}

let cotizacionFinal = ((((((medidaX*medidaY))*0.0005)*materialPcb))*cantidadUnidades + costoEnvio);

alert('El costo de total es de:\n'+'USD '+cotizacionFinal.toFixed(2));

while(true){
    
let confirmacionCompra = parseInt(prompt('Confirma su compra?\n 1-Confirmar compra \n 2-Cancelar pedido'));

switch(confirmacionCompra){

    case 1:
        alert('Gracias por su compra\n Se ha enviado informacion a su casilla de correo');
        break;
    case 2:
        alert('Compra cancelada.');
        break;
    default:
        alert('no has introducido un valor valido');

}
if (confirmacionCompra == 1 || confirmacionCompra == 2){
    break
}

}

function comprobarDato (datoIngresado){
    if(isNaN(datoIngresado)){
        alert('Debe ingresar un dato valido');
    }
    else{
        return false;
    }
}