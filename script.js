let game
  
// DETECÇÃO DAS TECLAS
function keyPush(event) {

    if (!game || !game.activePlay) return
    document.getElementById("pontuacao").classList.remove("hidden")
    document.getElementById("titulo2").innerHTML = "Cuidado com as paredes!"

    switch (event.keyCode) {
        case 37: // Esquerda
            game.snake.speed.vx = -1;
            game.snake.speed.vy = 0;
            //console.log('esquerda')
            break;
        case 38: // Cima
            game.snake.speed.vx = 0;
            game.snake.speed.vy = -1;
            //console.log('cima')
            break;
        case 39: // Direita
            game.snake.speed.vx = 1;
            game.snake.speed.vy = 0;
            //console.log('direita')
            break;
        case 40: // Baixo
            game.snake.speed.vx = 0;
            game.snake.speed.vy = 1;
            //console.log('baixo')
            break;
    }
}
// CLASSE PRINCIPAL DO JOGO
class Game {

    //CONSTRUTOR DOS OBJETOS
    constructor(ctx, width, height) {
        this.ctx = ctx
        this.width = width
        this.height = height
        this.score = 0
        this.snake = new Snake(10, 15, this)
        this.apple = new Apple(15, 15)
        this.activePlay = true
    }

    //INICIA JOGO
    start(){
        this.interval = setInterval(() => this.update(), 80)

    }

    // ATUALIZA GAME
    update() {
        if (this.activePlay) {

            this.snake.update()

            if (this.checkCollision()) {
                this.endGame()
            }

            this.checkApple()
            this.render()
        }
    }

    // VERIFICA COLISÃO COM A PAREDE
    checkCollision() {

        if (this.snake.head.x < 0 || this.snake.head.x >= 30 || this.snake.head.y < 0 || this.snake.head.y >= 30 && this.score > 0) {
            return true
        }
        return false

    }
    // RENDERIZA OS OBJETOS NO CANVAS
    render() {
        this.ctx.clearRect(0, 0, this.width, this.height)
        this.apple.draw(this.ctx)
        this.snake.draw(this.ctx)
        this.updateScore()
    }

    // VALIDA SE COBRA COMEU MAÇA
    checkApple() {
        if (this.snake.head.x === this.apple.x && this.snake.head.y === this.apple.y) {
            this.snake.grow()
            this.score++
            this.apple.randomizePosition()
        }
    }

    // ENCERRA O JOGO
    endGame() {
        this.activePlay = false
        clearInterval(this.interval)
        
        document.getElementById("gameOver").style.display = "block"
        document.getElementById("titulo2").classList.remove("visible")
        document.getElementById("titulo2").classList.add("hidden")
        console.log("Game Over!")
        console.log("Jogo Finalizado, pressione F5")
    }

    // ATUALIZA PONTOS DO JOGO
    updateScore() {
        document.getElementById('pontuacao').innerText = `Pontuação: ${this.score}`
    }
}

// CLASSE DO OBJETO COBRA
class Snake {
    constructor(x, y, game) {

        this.head = { x: x, y: y } 
        this.speed = { vx: 0, vy: 0 }
        this.trail = [] 
        this.tail = 3
        this.game = game
    }

    // ATUALIZA POSICAO DA COBRA
    update() {
        this.trail.push({ x: this.head.x, y: this.head.y })
        this.head.x += this.speed.vx
        this.head.y += this.speed.vy

        if (this.trail.length > this.tail) {
            this.trail.shift()
        }
    }

    // RENDERIZA COBRA NO CANVAS
    draw(ctx) {

        ctx.fillStyle = "gray";

        this.trail.forEach(segment => {
            ctx.fillRect(segment.x * 30, segment.y * 30, 30 - 1, 30 - 1)
        })

        ctx.fillRect(this.head.x * 30, this.head.y * 30, 30, 30)

    }

    // FAZ COBRA CRESCER
    grow() {
        this.tail++
    }

}

// CLASSE DO OBJETO MAÇÃ
class Apple {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    // DESENHA MAÇÃ NO CANVAS
    draw(ctx) {
        ctx.fillStyle = "red";
        ctx.fillRect(this.x * 30, this.y * 30, 30, 30);
    }

    // RENDERIZA MAÇA NO CANVAS
    randomizePosition() {
        this.x = Math.floor(Math.random() * 20);
        this.y = Math.floor(Math.random() * 20);
    }
}

window.onload = function () {

    //INICIALIZACAO DO JOGO
    const stage = document.getElementById('stage') //TELA DO JOGO
    const ctx = stage.getContext("2d") //PARAMETRO DO CANVAS
    game = new Game(ctx, stage.width, stage.height) // CRIA INSTANCIA DO JOGO
    document.addEventListener("keydown", keyPush)
    game.start()
}
