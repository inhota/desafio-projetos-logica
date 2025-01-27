function alterarStatus(id){
    // Recuperando elementos do front
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    let nomeJogo = gameClicado.querySelector('.dashboard__item__name');

    // Verifica se o potão está devolver quando tiver class dashboard__item__img--rented 
    if (imagem.classList.contains('dashboard__item__img--rented')){
        // Adiciona uma confirmação antes de devolver o jogo
        if (confirm(`Você tem certeza que deseja devolver o jogo ${nomeJogo.textContent}?`)) {
            // Caso true remove dashboard__item__img--rented
            imagem.classList.remove('dashboard__item__img--rented');
            // caso devolver coloco alugar
            botao.textContent = 'Alugar';
            // Ao modificar para Alugar mudar cor para azul
            botao.classList.remove('dashboard__item__button--return');
        }
    } else{
        // Caso esteja false adiciono
        imagem.classList.add('dashboard__item__img--rented');
        // Caso alugar coloco devolver
        botao.textContent = 'Devolver';
        // Ao modificar para Devolver mudar cor para preto
        botao.classList.add('dashboard__item__button--return');
    }
}