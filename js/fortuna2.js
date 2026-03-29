// Создание объекта колесо с параметрами
let theWheel = new Winwheel({
    'numSegments': 8,    // Количество сегментов
    'outerRadius': 212,  // Радиус колеса
    'textFontSize': 28,  // Размер шрифта
    'segments': [        // Сегменты (цвет и текст)
        { 'fillStyle': '#eae56f', 'text': 'Prize 1' },
        { 'fillStyle': '#89f26e', 'text': 'Prize 2' },
        { 'fillStyle': '#7de6ef', 'text': 'Prize 3' },
        { 'fillStyle': '#e7706f', 'text': 'Prize 4' },
        { 'fillStyle': '#eae56f', 'text': 'Prize 5' },
        { 'fillStyle': '#89f26e', 'text': 'Prize 6' },
        { 'fillStyle': '#7de6ef', 'text': 'Prize 7' },
        { 'fillStyle': '#e7706f', 'text': 'Prize 8' }
    ],
    'animation': {       // Параметры анимации
        'type': 'spinToStop',
        'duration': 15,
        'spins': 8,
        'callbackFinished': alertPrize,
        'callbackSound': playSound,
        'soundTrigger': 'pin' // Используем пины для звука
    },
    'pins': {
        'number': 16    // Количество пинов
    }
});

// Функция воспроизведения звука
let audio = new Audio('tick.mp3');

function playSound() {
    audio.pause();
    audio.currentTime = 0;
    audio.play();
}

// Функция оповещения о выигрыше
function alertPrize(indicatedSegment) {
    alert("You have won " + indicatedSegment.text);
}

// Управление мощностью колеса
let wheelPower = 0;
let wheelSpinning = false;

// Функция обработки выбора мощности
function powerSelected(powerLevel) {
    if (wheelSpinning == false) {
        // Сбросить цвета кнопок мощности
        document.getElementById('pw1').className = "";
        document.getElementById('pw2').className = "";
        document.getElementById('pw3').className = "";

        // Включить соответствующий уровень мощности
        if (powerLevel >= 1) {
            document.getElementById('pw1').className = "pw1";
        }
        if (powerLevel >= 2) {
            document.getElementById('pw2').className = "pw2";
        }
        if (powerLevel >= 3) {
            document.getElementById('pw3').className = "pw3";
        }

        // Установить мощность колеса
        wheelPower = powerLevel;

        // Включить кнопку спина
        document.getElementById('spin_button').src = "spin_on.png";
        document.getElementById('spin_button').className = "clickable";
    }
}

// Функция запуска анимации колеса
function startSpin() {
    if (wheelSpinning == false) {
        // Устанавливаем количество оборотов в зависимости от мощности
        if (wheelPower == 1) {
            theWheel.animation.spins = 3;
        } else if (wheelPower == 2) {
            theWheel.animation.spins = 8;
        } else if (wheelPower == 3) {
            theWheel.animation.spins = 15;
        }

        // Отключить кнопку спина
        document.getElementById('spin_button').src = "spin_off.png";
        document.getElementById('spin_button').className = "";

        // Начать анимацию
        theWheel.startAnimation();

        // Блокировать повторный клик
        wheelSpinning = true;
    }
}

// Функция сброса колеса
function resetWheel() {
    theWheel.stopAnimation(false);
    theWheel.rotationAngle = 0;
    theWheel.draw();

    // Сбросить все цвета на кнопках
    document.getElementById('pw1').className = "";
    document.getElementById('pw2').className = "";
    document.getElementById('pw3').className = "";

    wheelSpinning = false;
}
