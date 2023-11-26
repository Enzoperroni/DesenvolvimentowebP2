document.addEventListener('DOMContentLoaded', function (){
    const parametros = new URLSearchParams(window.location.search)
    const atletaID = parseInt(parametros.get('id'));
    
    async function fetchAthleteDetails(atletaID) {
        try {
            const response = await fetch(`https://botafogo-atletas.mange.li/${atletaID}`);
            
            if (!response.ok) {
                throw new Error(`Erro ao buscar detalhes do atleta na API. Status: ${response.status}`);
            }
    
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Erro ao buscar detalhes do atleta na API:', error);
            return null;
        }
    }
    
    if (!atletaID || isNaN(atletaID)) {
        console.error('ID do Atleta não fornecido ou inválido na URL.');
        // Aqui você pode decidir o que fazer em caso de ID ausente ou inválido.
    } else {
        // Chama a função para buscar detalhes do atleta na API
        fetchAthleteDetails(atletaID)
            .then((atleta) => {
                if (!atleta) {
                    console.error(`Atleta com ID ${atletaID} não encontrado.`);
                    // Aqui você pode decidir o que fazer se o jogador não for encontrado.
                } else {
                    const containerdetalhes = document.getElementById('atleta_jogador');
                    containerdetalhes.innerHTML = `
                        <div id="imagem_jogador">
                            <h2>${atleta.nome}</h2>
                            <img src="${atleta.imagem}" alt="Imagem de ${atleta.nome}">
                        </div>
                        <p>Posição: ${atleta.posicao}</p>
                        <p>Altura: ${atleta.altura}</p>
                        <p>Nascimento: ${atleta.nascimento}</p>
                        <p>${atleta.descricao || 'Descrição não disponível.'}</p>
                    `;
                }
            })
            .catch((error) => {
                console.error('Erro ao processar os detalhes do atleta:', error);
                // Aqui você pode decidir o que fazer em caso de erro durante o processamento.
            });
    }
    

/*const url = `https://botafogo-atletas.mange.li/${atletaID}`*/

/*function carddetalhes(atletaID) {
        fetchAthleteDetails(atletaID)
          .then((player) => {
              if (!player) {
                  console.error(`Atleta com ID ${atletaID} não encontrado.`);
                  // Aqui você pode decidir o que fazer se o jogador não for encontrado.
              } else {
                  const athleteDetailsContainer = document.getElementById('atleta_jogador');
                  athleteDetailsContainer.innerHTML = `
                      <div id="imagem_jogador">
                          <h2>${player.nome}</h2>
                          <img src="${player.imagem}" alt="Imagem de ${player.nome}">
                      </div>
                      <p>Posição: ${player.posicao}</p>
                      <p>Altura: ${player.altura}</p>
                      <p>Nascimento: ${player.nascimento}</p>
                      <p>${player.descricao || 'Descrição não disponível.'}</p>
                  `;}
        })

    .catch(error => console.error('Erro ao obter detalhes:', error));
}*/

function redirecionarParaOutraPagina() {
    // Mude o URL abaixo para o destino desejado
    window.location.href = "elenco.html";
  }
  
  // Adicione um ouvinte de evento ao botão
document.getElementById("voltar").addEventListener("click", redirecionarParaOutraPagina);

});








