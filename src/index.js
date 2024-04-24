let field = document.querySelector('.field');
let url = './src/goblin.jpg';

// функция для создания динамического поля
function createField() {
    for (let i = 0; i < 16; i++) {
        let cell = document.createElement('div');
        cell.classList.add('cell');
        field.appendChild(cell);
    }
}

// функция для установки случайной картинки в случайной клетке
function rndImage() {
    let collection = document.querySelectorAll('.cell');
    let cellsWithImage = Array.from(collection).filter(cell => cell.querySelector('img'));
    
    if (cellsWithImage.length > 0) {
        let rndIndex = Math.floor(Math.random() * cellsWithImage.length);
        let cellWithImage = cellsWithImage[rndIndex];
        cellWithImage.querySelector('img').remove();
    }

    let emptyCells = Array.from(collection).filter(cell => !cell.querySelector('img'));

    if (emptyCells.length === 0) return;

    let rndIndex = Math.floor(Math.random() * emptyCells.length);
    let cell = emptyCells[rndIndex];

    let img = document.createElement('img');
    img.src = url;
    cell.appendChild(img);
}

createField();
rndImage();
setInterval(rndImage, 1000);
