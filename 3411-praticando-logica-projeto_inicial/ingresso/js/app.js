
function comprar(){
    let tipo = document.getElementById('tipo-ingresso');
    let qtd = parseInt (document.getElementById('qtd').value);
    

    if(tipo.value == ('pista')){
        comprarPista(qtd);
    } else if(tipo.value == 'superior'){
        comprarSuperior(qtd);
    } else {
        comprarInferior(qtd);
    }
    
    document.getElementById('qtd').value = 0;
}

function comprarPista(qtd){
    // Recuperar a quantidade disonivel
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    // Checar se tem quantidade disponivel para comprar
    if (qtd > qtdPista){
        alert('Quantidade indisponível para o tipo pista');
    } else{
        qtdPista = qtdPista - qtd;
        document.getElementById('qtd-pista').textContent = qtdPista;
        alert('Compra realizada com sucesso');

    }

}

function comprarSuperior(qtd){
    // Recuperar a quantidade disonivel
    let qtdPista = parseInt(document.getElementById('qtd-superior').textContent);
    // Checar se tem quantidade disponivel para comprar
    if (qtd > qtdPista){
        alert('Quantidade indisponível para o tipo superior');
    } else{
        qtdPista = qtdPista - qtd;
        document.getElementById('qtd-superior').textContent = qtdPista;
        alert('Compra realizada com sucesso');

    }

}

function comprarInferior(qtd){
    // Recuperar a quantidade disonivel
    let qtdPista = parseInt(document.getElementById('qtd-inferior').textContent);
    // Checar se tem quantidade disponivel para comprar
    if (qtd > qtdPista){
        alert('Quantidade indisponível para o tipo inferior');
    } else{
        qtdPista = qtdPista - qtd;
        document.getElementById('qtd-inferior').textContent = qtdPista;
        alert('Compra realizada com sucesso');

    }

}