class Game {
    constructor() {
        this.field = document.querySelector('.field');
        this.scoreDisplay = document.querySelector('.bal');
        this.url = 'goblin.jpg';
        this.timer = null;
        this.score = 0;
        this.missed = 0;
        this.maxMissed = 5;
        this.init();
    }

    init() {
        this.createField();
        setInterval(() => this.spawnGoblin(), 1000); // Гоблин появляется каждую секунду
    }

    createField() {
        for (let i = 0; i < 16; i++) {
            let cell = document.createElement('div');
            cell.classList.add('cell');
            this.field.appendChild(cell);
        }
    }

    spawnGoblin() {
        if (this.missed >= this.maxMissed) {
            alert('Game Over!');
            clearInterval(this.timer); // Остановка игры
            return;
        }

        let collection = document.querySelectorAll('.cell');
        let emptyCells = Array.from(collection).filter(cell => !cell.querySelector('img'));

        if (emptyCells.length === 0) return;

        let rndIndex = Math.floor(Math.random() * emptyCells.length);
        let cell = emptyCells[rndIndex];

        let img = document.createElement('img');
        img.src = this.url;
        cell.appendChild(img);

        this.timer = setTimeout(() => {
            img.remove();
            this.missed++;
        }, 1000); // Гоблин исчезает через 1 секунду

        img.addEventListener("click", () => {
            this.score++;
            this.scoreDisplay.textContent = this.score;
            img.remove();
            clearTimeout(this.timer); // Остановка исчезновения гоблина
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const game = new Game();
});
