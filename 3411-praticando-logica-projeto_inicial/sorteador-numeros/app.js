function sortear(){
    //Recuperando elementos digitados na pagina
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    // Valida se o campo do número e < que o campo Até o número
    if (de >= ate) {
        alert('Campo "Do número" deve ser inferior ao campo "Até o número". Verifique!');
        return;
      }
    // Validar se o campo quantidade esta entre o range de/ate
    if (quantidade > (ate - de + 1)) {
        alert('Campo "Quantidade" deve ser menor ou igual ao intervalo informado no campo "Do número" até o campo "Até o número". Verifique!');
        return;
      }

    let sorteados = [];
    let numero;

    //Loop for para percorrer numeros de quantidade desejada
    for(let i = 0; i < quantidade; i++){
       numero = obterNumeroAleatorio(de, ate);
   
       // Loop para sortear numero novamente caso seja repetido
       while (sorteados.includes(numero)){
        numero = obterNumeroAleatorio(de, ate);
        alert('Tentando obter número inédito');
       }

       // adicionar os numero no array
       sorteados.push(numero);
    }
    // Retornar o elemento de ID resultado
    let resultado = document.getElementById('resultado');
    // Colocando a lista de array dos numeros sorteados
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`

    // Trocar o status do botão reiniciar
    alterarStatusBotao();
}


// Função para obter numero aleatório passando o minimo de maximo até
function obterNumeroAleatorio(min, max){
    // Gera um numero aleatório passando como parametro um numero min e max
    return Math.floor(Math.random() * (max - min + 1)) + min; 
}

function alterarStatusBotao(){
    let botao = document.getElementById('btn-reiniciar');
    if(botao.classList.contains('container__botao-desabilitado')){
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    }else{
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

function reiniciar(){
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    alterarStatusBotao();
}


