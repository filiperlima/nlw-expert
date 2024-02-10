const perguntas = [
    {
      pergunta: "Qual palavra-chave é usada para declarar uma variável em JavaScript?",
      respostas: [
        "var",
        "let",
        "const",
      ],
      correta: 2
    },
    {
      pergunta: "Como você faz um comentário de uma linha em JavaScript?",
      respostas: [
        "// Comentário",
        "/* Comentário */",
        "# Comentário",
      ],
      correta: 0
    },
    {
      pergunta: "Qual função é usada para imprimir algo no console em JavaScript?",
      respostas: [
        "console.print()",
        "print()",
        "console.log()",
      ],
      correta: 2
    },
    {
      pergunta: "O que o operador '===' faz em JavaScript?",
      respostas: [
        "Compara valores e tipos",
        "Atribuição",
        "Compara apenas valores",
      ],
      correta: 0
    },
    {
      pergunta: "Como você define uma função em JavaScript?",
      respostas: [
        "function minhaFuncao()",
        "def minhaFuncao():",
        "myFunction = function()",
      ],
      correta: 0
    },
    {
      pergunta: "Qual método é usado para adicionar um elemento no final de um array em JavaScript?",
      respostas: [
        "array.add()",
        "array.insert()",
        "array.push()",
      ],
      correta: 2
    },
    {
      pergunta: "Como você converte uma string para um número em JavaScript?",
      respostas: [
        "convertToInt()",
        "parseInt()",
        "stringToNumber()",
      ],
      correta: 1
    },
    {
      pergunta: "Qual símbolo é usado para representar o operador de resto em JavaScript?",
      respostas: [
        "&",
        "|",
        "%",
      ],
      correta: 2
    },
    {
      pergunta: "O que o método 'querySelector()' faz em JavaScript?",
      respostas: [
        "Seleciona um elemento pelo ID",
        "Seleciona vários elementos",
        "Seleciona um elemento pelo seletor CSS",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a finalidade do comando 'return' em uma função JavaScript?",
      respostas: [
        "Imprimir um valor no console",
        "Encerrar a execução da função",
        "Retornar um valor da função",
      ],
      correta: 2
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrartTotal = document.querySelector('#acertos span')
  
  
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for(let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      
      dt.querySelector('input').setAttribute('name', 'pergunta-'+ perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
  
        corretas.delete(item)
        if(estaCorreta) {
          corretas.add(item)
        }
        
        mostrartTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
  
      quizItem.querySelector('dl').appendChild(dt)
    }
  
    quizItem.querySelector('dl dt').remove()
  
    quiz.appendChild(quizItem)
  }