
let amigos=[];

function agregarAmigo(){
    let input= document.getElementById('amigo')
    let nombreAmigo=input.value;

    
    if(nombreAmigo===""){
        alert('Por favor, ingresa un nombre')
        
    }else{
        amigos.push(nombreAmigo);
        input.value="";
        actualizarLista();
    }

    console.log(amigos);
    return;
}
function actualizarLista(){

    let lista=document.getElementById('listaAmigos');
    lista.innerHTML="";
    amigos.forEach((amigo)=>{
        let elemento=document.createElement('li');
        elemento.textContent=amigo;
        lista.append(elemento);
    });

}
