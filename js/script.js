// //Este codigo se basa en un formulario que debe completar un cliente con el fin de 
//solicitar un ptroducto a medida. En desarrollo web realice en el index dicho formulario.
//La idea es poder generar una cotizacion luego de completar los campos.

let medidaX;
let medidaY;
let paisEnvio;
let cantidadUnidades;
let costoEnvio;
let condicional = 1;
let condicionalMaterial = 1;
let paisVerificacion = 1;



alert("Bienvenido al simulador de cotizacion de productos.\nComenzamos!\nPresione Enter. ")


while (isNaN(medidaX)){
    medidaX = parseInt(prompt('Ingrese el largo en mm del PCB'));
    comprobarDato(medidaX);
    
}


while (isNaN(medidaY)){
    medidaY = parseInt(prompt('Ingrese el ancho en mm del PCB'));
    comprobarDato(medidaY);
}


let materialPcb = parseInt(prompt('Ingrese el material de fabricacion\n 1-FR4\n 2-Fibra'));

while(condicionalMaterial==1){
    
    if(materialPcb == 1){
        condicionalMaterial = 0;
        alert("Material seleccionado FR4");
    }
    else if(materialPcb == 2){
        condicionalMaterial = 0;
        alert("Material seleccionado Fibra");
    }
    else{
        alert("Ha ingresado un dato incorrecto")
        materialPcb = parseInt(prompt('Ingrese el material de fabricacion\n 1-FR4\n 2-Fibra'));
    }
    }

while(paisVerificacion == 1){
    paisEnvio = parseInt(prompt('Ingrese el pais de destino:\n 1-Uruguay\n 2-Argentina\n 3-Brasil'))
switch(paisEnvio){

case 1:
    paisVerificacion = 0;
    costoEnvio = 50;
    break;
case 2:
    paisVerificacion = 0;
    costoEnvio = 70;
    break;
case 3:
    paisVerificacion = 0;
    costoEnvio = 40;
    break;
default:
    alert('no has introducido un valor valido');
    paisEnvio = parseInt(prompt('Ingrese el pais de destino:\n 1-Uruguay\n 2-Argentina\n 3-Brasil'))
}

}

while (isNaN(cantidadUnidades)){
    cantidadUnidades = parseInt(prompt('Ingrese cantidad de unidades de PCB´s'));
    comprobarDato(cantidadUnidades);
}

let cotizacionFinal = ((((((medidaX*medidaY))*0.0005)*materialPcb))*cantidadUnidades + costoEnvio);

alert('El costo de total es de:\n'+'USD '+cotizacionFinal.toFixed(2));

let confirmacionCompra = parseInt(prompt('Confirma su compra?\n 1-Confirmar compra \n 2-Cancelar pedido'));

while(condicional==1){
    
    if(confirmacionCompra == 1){
        condicional=0;
        alert("Gracias por su compra!!");
        let resumen = "Resumen de su factura:\nMedida eje X"+medidaX+"mm\nMedida eje Y:"+medidaY+"mm\nCosto de envio:U$D"+costoEnvio+"\nCantidad de unidades:"+cantidadUnidades+"\n\nTotal:"+cotizacionFinal.toFixed(2)+"";
        alert(resumen);
    }
    else if(confirmacionCompra == 2){
        condicional=0;
        alert("Compra cancelada");
    }
    else{
        alert("Ha ingresado un dato incorrecto");
        confirmacionCompra = parseInt(prompt('Confirma su compra?\n 1-Confirmar compra \n 2-Cancelar pedido'));
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

alert("Comenzamos con la tienda web");

const productos = [
    {articulo: "Articulo: Placa arduino\n", marca:"Marca: Arduino\n", modelo: "Modelo: Uno\n", categoria: "Categoria: placa de desarrollo\n"},
    {articulo: "Articulo: Osciloscopio\n", marca: "Marca: SGB\n", modelo: "Modelo: MBH-32341\n", categoria: "Categoria: instrumentos\n"},
    {articulo: "Articulo: Soldador\n", marca: "Marca: Jvc\n", modelo: "Modelo: LMU0928\n", categoria: "Categoria: herramientas\n"},
    {articulo: "Articulo: Estaño\n", marca: "Marca N/A\n", modelo: "Modelo: 2mm\n", categoria: "Categoria: materiales electronicos\n"},
    {articulo: "Articulo: Tester\n", marca: "Marca: Fluke\n", modelo: "Modelo: AB-298\n", categoria: "Categoria: instrumentos\n"}
]

let busquedaUsuario = inicioBusqueda(prompt("Ingrese la categoria que desea:"));


function inicioBusqueda(busquedaUsuario){
    if (busquedaUsuario != ""){

    const resultado = productos.filter((busqueda) => busqueda.categoria.includes(busquedaUsuario.toLowerCase()));

    alert("Se han encontrado "+resultado.length+" coincidencias");

    for (let i=0;i<resultado.length;i++){
    
        let listaArticulos = Object.values(resultado[i]);
        alert(listaArticulos);
    }
    funcionArticulo = seleccionAriculo(resultado);
    }
    else{
    alert("El campo no puede estar vacio\nActualice la pagina")
    }
}


function seleccionAriculo(arrayBusqueda){
    console.log(arrayBusqueda.length)

    if (arrayBusqueda.length > 0){
        let articulo = parseInt(prompt("Ingrese el numero de articulo del 1 al "+arrayBusqueda.length));
        while(articulo<1 || articulo >arrayBusqueda.length || isNaN(articulo)){
        articulo = parseInt(prompt("Ingrese nuevamente el numero de articulo del 1 al "+arrayBusqueda.length));
        }

        let confirmacionCompra = parseInt(prompt('Confirma su compra por el articulo:\n '+Object.values(arrayBusqueda[articulo-1])+' \nSeleccione una opcion:\n1-Confirmar compra \n 2-Cancelar pedido'));
        let condicional = 1;

        while(condicional==1){
        
        if(confirmacionCompra == 1){
            bucleCondicion=0;
            alert("Gracias por su compra!!");
        
        }
        else if(confirmacionCompra == 2){
            bucleCondicion=0;
            alert("Compra cancelada");
        }
        else{
            alert("Ha ingresado un dato incorrecto");
            confirmacionCompra = parseInt(prompt('Confirma su compra?\n 1-Confirmar compra \n 2-Cancelar pedido'));
        }
        }
    }
}
