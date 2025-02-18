
let listaNomeAmigo = [];
let regexValidaEntradaDeDados = /^[A-Za-záéíóúãõàâêîôûç\s]+$/;
let titulo = document.querySelector("h2");
let nomeAmigo = document.querySelector("input").value;

function adicionarAmigo(){ 
          
    if(nomeAmigo = document.querySelector("input").value == ""){
        return alert("Por favor, insira um nome.");
    }else{
        nomeAmigo = document.querySelector("input").value;
       if (nomeAmigo.trim() == "" || !regexValidaEntradaDeDados.test(nomeAmigo)){
            alert("Insira um nome válido (somente texto).");
             limparCampo();
        } else if(listaNomeAmigo.includes(nomeAmigo)){
            alert("nome ja existente, tentar outro");
            limparCampo();
        }else{        
            nomeAmigo = document.querySelector("input").value;
            listaNomeAmigo.push(nomeAmigo);  
            limparCampo();
            console.log(listaNomeAmigo);
            adicionarElementoNaLista();
            titulo.innerHTML = " Digite o nome dos seus amigos";     
        }
    }
}

function adicionarElementoNaLista() {
    let contador = 0;
    let listaHTML = "";
    
       while (contador < listaNomeAmigo.length) {
        listaHTML += `<li>${listaNomeAmigo[contador]}</li> `;
        contador ++;        
        }
        document.getElementById("listaAmigos").innerHTML = listaHTML;
}

function sortearAmigo(){
    let indiceAleatorio = Math.floor(Math.random() * listaNomeAmigo.length);
    
    if (listaNomeAmigo.length > 0) {        
        titulo.innerHTML = `Amigo Sorteado: ${listaNomeAmigo[indiceAleatorio]}`;
        listaNomeAmigo.length = 0;
    }else{
        titulo.innerHTML = `Lista de amigos vazia`;

    }
}

function limparCampo(){
    document.querySelector("input").value = "";
}
