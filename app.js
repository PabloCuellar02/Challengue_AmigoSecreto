
let amigos=[];

function agregarAmigo(){
    let input= document.getElementById('amigo')
    let nombreAmigo=input.value;

    
    if(nombreAmigo===""){
        alert('Por favor, ingresa un nombre')
        
    }if (!isNaN(nombreAmigo)) {
            alert('Por favor, ingresa un nombre válido');
            input.value = "";
            return;
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

function sortearAmigo(){
    if(amigos.length<2){
        alert('No hay suficientes amigos para sortear');
    
    }else{
        let amigoSorteado=amigos[Math.floor(Math.random()*amigos.length)];
        let resultado=document.getElementById('resultado');

        resultado.innerHTML=`El amigo sorteado es: ${amigoSorteado}!!`;
        return;
    }
}

