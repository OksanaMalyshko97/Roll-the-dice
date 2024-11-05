// Находим все кнопки с классом 'dice'
const diceButtons = document.querySelectorAll('.dice');
const resultDiv = document.getElementById('result');

// Функция для генерации случайного числа
function rollDice(sides) {
    return Math.floor(Math.random() * sides) + 1;
}

// Добавляем обработчик событий для каждой кнопки
diceButtons.forEach(button => {
    button.addEventListener('click', function() {
        const sides = this.getAttribute('data-sides');
        const result = rollDice(sides);
        resultDiv.textContent = `Випало: ${result}`;
    });
});
