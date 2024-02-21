const perguntas = [
    {
      pergunta: "Qual a distância mínima, em metros, que se deve manter de um ciclista ao ultrapassá-lo?",
      respostas: [
        "1 metro",
        "50 centímetros",
        "1,5 metros",
      ],
      correta: 2
    },
    {
      pergunta: "O que indica a sinalização de trânsito que exibe a letra 'P' dentro de um círculo azul?",
      respostas: [
        "Estacionamento permitido",
        "Pare obrigatoriamente",
        "Proibido estacionar",
      ],
      correta: 0
    },
    {
      pergunta: "Qual a velocidade máxima permitida em rodovias de pista dupla, de acordo com o Código de Trânsito Brasileiro?",
      respostas: [
        "90 km/h",
        "100 km/h",
        "110 km/h",
      ],
      correta: 2
    },
    {
      pergunta: "O que significa a sinalização de trânsito que exibe uma faixa branca diagonal no asfalto?",
      respostas: [
        "Indica uma faixa exclusiva para ônibus",
        "Indica uma faixa de pedestres",
        "Delimita uma área de segurança para cruzamento de pedestres",
      ],
      correta: 2
    },
    {
      pergunta: "Qual a penalidade para quem estaciona em vagas reservadas para pessoas com deficiência sem possuir autorização?",
      respostas: [
        "Advertência verbal",
        "Multa e remoção do veículo",
        "Suspensão da carteira de habilitação",
      ],
      correta: 1
    },
    {
      pergunta: "Quais são as cores do semáforo e seus respectivos significados?",
      respostas: [
        "Vermelho: Pare, Amarelo: Atenção, Verde: Siga",
        "Vermelho: Atenção, Amarelo: Pare, Verde: Siga",
        "Vermelho: Siga, Amarelo: Pare, Verde: Atenção",
      ],
      correta: 0
    },
    {
      pergunta: "O que indica a sinalização de trânsito que exibe uma placa com um 'X' vermelho sobre um desenho de um telefone?",
      respostas: [
        "Telefone público à frente",
        "Proibido o uso de telefone celular",
        "Área com cobertura telefônica",
      ],
      correta: 1
    },
    {
      pergunta: "O que fazer ao se deparar com um veículo de emergência com luzes e sirene ligadas?",
      respostas: [
        "Aumentar a velocidade para dar passagem rapidamente",
        "Manter a velocidade e seguir normalmente",
        "Reduzir a velocidade e abrir caminho para o veículo de emergência passar",
      ],
      correta: 2
    },
    {
      pergunta: "O que indica a sinalização de trânsito que exibe uma placa com um 'X' vermelho sobre um desenho de uma bicicleta?",
      respostas: [
        "Cruzamento com ciclovia",
        "Proibido o tráfego de bicicletas",
        "Área de circulação exclusiva para bicicletas",
      ],
      correta: 1
    },
    {
      pergunta: "Qual a função dos dispositivos de segurança passiva em um veículo?",
      respostas: [
        "Evitar colisões",
        "Reduzir os danos em caso de acidente",
        "Alertar sobre radares de velocidade",
      ],
      correta: 1
    },
  ];
  
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  for(const item of perguntas){
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for(let resposta of item.respostas){
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
        
        corretas.delete(item)
        if(estaCorreta) {
          corretas.add(item)
        }
        
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
      quizItem.querySelector('dl').appendChild(dt)
    }
  
    quizItem.querySelector('dl dt').remove()
  
    quiz.appendChild(quizItem)
  }