
let amigos=[];

function agregarAmigos(nombre){
    let input= document.getElementById('amigos')
    let nombre=input.value;
    
    if(nombre===""){
        alert('Por favor, ingresa un nombre')
        
    }else{
        amigos.push(nombre);
        input.value="";
    }

    console.log(amigos);
    return;
}
function actualizarLista(){

}


//var nombre2=prompt('Ingresa el nombre tu amigo: ')
//agregarAmigos(nombre2)

//console.log(nombre)
//console.log(amigos)