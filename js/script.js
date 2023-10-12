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
    {id:0, articulo: "Articulo: Placa arduino\n", marca:"Marca: Arduino\n", modelo: "Modelo: Uno\n", categoria: "Categoria: placa de desarrollo\n"},
    {id:1, articulo: "Articulo: Osciloscopio\n", marca: "Marca: SGB\n", modelo: "Modelo: MBH-32341\n", categoria: "Categoria: instrumentos\n"},
    {id:2, articulo: "Articulo: Soldador\n", marca: "Marca: Jvc\n", modelo: "Modelo: LMU0928\n", categoria: "Categoria: herramientas\n"},
    {id:3, articulo: "Articulo: Estaño\n", marca: "Marca N/A\n", modelo: "Modelo: 2mm\n", categoria: "Categoria: materiales electronicos\n"},
    {id:4, articulo: "Articulo: Tester\n", marca: "Marca: Fluke\n", modelo: "Modelo: AB-298\n", categoria: "Categoria: instrumentos\n"}
]
mostrarArticulos();

const seleccionArticulo = (cadenaString) => {
    
    let testeo;
    let articulo;
    do{

        articulo = parseInt(prompt(`Seleccione el numero de ID del articulo que desea:\n${cadenaString}`));
        testeo = cadenaString.indexOf("Id:"+articulo);
        if (testeo ==-1){alert("El ID ingresado no es correccto.\nVuelva a ingresarlo");}
    
    }while (testeo == -1 || isNaN(articulo))
    let confirmCompra = parseInt(prompt("Desea confirmar su compra?\n1-Comprar\n2-Cancelar"))
    let evaluar = validacionBinaria(2,confirmCompra)
    if(evaluar == 1){
        alert("Muchas gracias por su compra")
    }
    else{alert("Compra cancelada")}
    inicioBusqueda();
}
let listaArticulos

const inicioBusqueda = busquedaUsuario =>{

    busquedaUsuario = prompt("Ingrese la categoria que desea:");
    const resultado = productos.filter((busqueda) => busqueda.categoria.includes(busquedaUsuario.toLowerCase()));
    if (busquedaUsuario != ""){
        alert("Se han encontrado "+resultado.length+" coincidencias");
        if(resultado == 0){
            resultado.splice();
            inicioBusqueda()
        }
        let articulos = 'Los articulos encontrados son:\n----------------------\n';
        resultado.forEach(element => {
        articulos += `Id:${element.id}\n${element.articulo}\n${element.categoria}\n${element.marca}\n${element.modelo}-----------------\n`
    });
    seleccionArticulo(articulos);
        }
    else{
        alert("El campo no puede estar vacio\nActualice la pagina")
        inicioBusqueda();
    }
}

inicioBusqueda();

function validacionBinaria(valorIngresado, parametroValidar){

        while(parametroValidar<1 || parametroValidar >valorIngresado || isNaN(parametroValidar)){
        parametroValidar = parseInt(prompt("Ingrese nuevamente el numero del 1 al "+valorIngresado));
        }
        return parametroValidar;
}

function validacionCompra(valorBinario){

        valorBinario = validacionBinaria(2, valorBinario);
        
        if(valorBinario == 1){
            bucleCondicion=0;
            alert("Gracias por su compra!!");
            let nuevoArticulo = parseInt(prompt("Si desea realizar una nueva compra ingrese 1 de lo contrario 2"));
            nuevoArticulo = validacionBinaria(2,nuevoArticulo);
            if  (nuevoArticulo ==1){inicioBusqueda()}
            else{return nuevoArticulo}
        }
        else if(valorBinario == 2){
            bucleCondicion=0;
            alert("Compra cancelada");
        }
}

function mostrarArticulos (){
    let articulos = 'Los articulos de nuestra tienda son:\n---------------------------\n';
    productos.forEach(element => {
        articulos += `${element.articulo}${element.categoria}\n---------------------\n`
    });
    alert(articulos);
}