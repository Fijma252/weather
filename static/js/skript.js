const weatherEffects = document.getElementById('weather-effects');
let intervalId = null; // Для хранения ID интервала
// Функция для изменения погоды
function changeWeather(weatherType) {
    // Устанавливаем класс на body
    document.body.className = weatherType;
    // Очищаем предыдущие эффекты
    weatherEffects.innerHTML = '';
    // Останавливаем предыдущий интервал
    if (intervalId) {
        clearInterval(intervalId);
    }
    // Добавляем новые эффекты в зависимости от погоды
    if (weatherType === 'snow') {
        intervalId = setInterval(createSnowflake, 1000);
    } else if (weatherType === 'rain') {
        intervalId = setInterval(createRaindrop, 1000);
    }
    // Для sunny и clouds эффекты не нужны
}
// Функция для создания снежинки
function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    // Размер снежинки (от 2px до 8px)
    const size = Math.random() * 6 + 2;
    snowflake.style.width = `${size}px`;
    snowflake.style.height = `${size}px`;
    // Начальная позиция по горизонтали
    snowflake.style.left = `${Math.random() * 100}vw`;
    // Скорость падения (от 2s до 5s)
    const animationDuration = Math.random() * 5 + 5;
    snowflake.style.animationDuration = `${animationDuration}s`;
    // Добавляем снежинку в контейнер
    weatherEffects.appendChild(snowflake);
    // Удаляем снежинку после завершения анимации
    snowflake.addEventListener('animationend', () => {
        snowflake.remove();
    });
}
// Функция для создания капли дождя
function createRaindrop() {
    const raindrop = document.createElement('div');
    raindrop.classList.add('raindrop');
    // Начальная позиция по горизонтали
    raindrop.style.left = `${Math.random() * 100}vw`;
    // Скорость падения (от 0.5s до 1.5s)
    const animationDuration = Math.random() * 1 + 0.5;
    raindrop.style.animationDuration = `${animationDuration}s`;
    // Добавляем каплю в контейнер
    weatherEffects.appendChild(raindrop);
    // Удаляем каплю после завершения анимации
    raindrop.addEventListener('animationend', () => {
        raindrop.remove();
    });
}
// По умолчанию включаем снег
changeWeather('snow');
