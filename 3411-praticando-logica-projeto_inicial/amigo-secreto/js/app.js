let amigos = [];

function adicionar() {
    let amigo = document.getElementById('nome-amigo');
    //VALIDANDO SE TEM UM NOME ESCRITO NO INPUT ANTES DE ADICIONAR
    if(amigo.value == ''){
      alert('Informe o nome do amigo');
      return; 
    }
   
    //VALIDANDO SE TEM O MESMO NOME 
    if(amigos.includes(amigo.value)){
    alert('Nome já adicionado');
      return; 
    }
    
    
    let lista = document.getElementById('lista-amigos');
    amigos.push(amigo.value); 
    
    if (lista.textContent == '') {
        lista.textContent = amigo.value;
    } else {
        lista.textContent = lista.textContent + ', ' + amigo.value;
    }
amigo.value = ''; 
}

function sortear() {
    if (amigos.length < 4) {
            alert("Adicione pelo menos 4 amigos");
            return;
    }
    embaralhar(amigos);
    let sorteio = document.getElementById('lista-sorteio');
    sorteio.innerHTML = ''; // Limpa o conteúdo antes de adicionar novos valores

    for (let i = 0; i < amigos.length; i++) {
        if (i == amigos.length - 1) {
            sorteio.innerHTML += amigos[i] + ' --> ' + amigos[0] + '<br/>';
        } else {
            sorteio.innerHTML += amigos[i] + ' --> ' + amigos[i + 1] + '<br/>';
        }
    }
}

function embaralhar(lista) {
    for (let indice = lista.length - 1; indice > 0; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * (indice + 1));
        [lista[indice], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice]];
    }
}

function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}