let savedPass = "palabra";

for(let i=0; i<3;i++){

    let userPass = prompt("ingresa tu contraseña");

    if(savedPass===userPass){

        alert('login exiitoso');
        break;
    }
    else{
        alert('error')
    }

}
alert('fin del proceso');


/// parseInt( es para convertir a int)