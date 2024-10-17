# SNAKE
Código desenvolvido para aprendizagem via tutorial do canal PROGRAMADORBR (https://www.youtube.com/watch?v=Hua1OSXitdQ), com pequenas modicações que aperfeiçoaram a visibilidade e jogabilidade.

<b>Descrição do Jogo</b>:
O Jogo da Cobrinha é um clássico jogo retrô onde o jogador controla uma cobra que se move em uma grade. O objetivo é comer as maçãs que aparecem aleatoriamente no cenário, fazendo com que a cobra cresça e aumente a pontuação. O desafio está em evitar que a cobra colida com as paredes do campo de jogo, o que resulta no término da partida.

<b>Funcionalidades</b>:
- Movimento da Cobra: Controlado pelas teclas direcionais (setas do teclado), a cobra pode se mover nas direções esquerda, direita, cima e baixo.
- Crescimento: Cada vez que a cobra come uma maçã, ela cresce, e a dificuldade aumenta.
- Pontuação: A pontuação é atualizada cada vez que uma maçã é consumida, e exibida no topo da tela durante o jogo.
- Colisão: O jogo termina quando a cobra colide com as bordas da tela.
- Tela de Game Over: Exibe uma mensagem de "Game Over" e instrui o jogador a pressionar F5 para reiniciar o jogo.

Estrutura do projeto: O Jogo da Cobrinha é composto por três arquivos principais: index.html, style.css e script.js, organizados para separar a estrutura, a apresentação e a lógica do jogo.

<b>HTML (index.html)</b>: O arquivo HTML define a estrutura básica da página e contém os elementos visuais do jogo:

- Tags: Utiliza <canvas> para renderizar o jogo, onde a cobra e a maçã são desenhadas, além do h2 para exibir mensagens e a pontuação.
- Classes: As classes (.hidden, .visible) são usadas para estilizar e controlar a visibilidade de elementos como o placar e a mensagem de game over.

<b>CSS (style.css)</b>:
- Estilos Globais ('*'): Reseta as margens e o preenchimento de todos os elementos e define o box-sizing como border-box, facilitando o controle de largura e altura.
- Canvas: Define o tamanho e a posição do canvas, garantindo que o jogo seja exibido corretamente.
- Título e Mensagens: Estilos para exibir o título do jogo e as mensagens de pontuação e game over com cores e tamanhos apropriados.
- Classes Dinâmicas: Controla a visibilidade das mensagens com .hidden e .visible.

<b>JavaScript (script.js)</b>: A lógica do jogo é implementada em JavaScript e inclui as seguintes funcionalidades:
- Seleção de Elementos: Utiliza document.getElementById para selecionar os elementos do canvas e das mensagens.
- Função de Teclado: A função keyPush(event) responde às teclas direcionais, controlando a movimentação da cobra.
- Loop de Jogo: Um loop (setInterval) atualiza constantemente a posição da cobra, verifica colisões e renderiza os elementos no canvas.
- Detecção de Colisão: Verifica se a cobra colide com as bordas da tela. Se houver colisão, a função endGame() é chamada, exibindo a mensagem de game over.
- Atualização da Pontuação: A pontuação é atualizada toda vez que a cobra come uma maçã e exibida na tela.
- Eventos de Teclado: Escuta eventos de teclado usando document.addEventListener, permitindo que o jogador controle a cobra com as setas do teclado.
