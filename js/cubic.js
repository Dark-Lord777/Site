// js/cubicjs

// ==============================
// Псевдослучайный генератор
// ==============================
function pseudoRandom(seed = Date.now()) {
    // Линейный конгруэнтный генератор (LCG)
    let a = 1664525;
    let c = 1013904223;
    let m = 4294967296; // 2^32
    seed = (a * seed + c) % m;
    return seed;
}

// ==============================
// Генерация случайного числа 1-100
// ==============================
function generateRandom() {
    let seed = Date.now() % 1000; // пример начального значения (seed)
    let rand = pseudoRandom(seed) % 100 + 1;
    return rand;
}

// ==============================
// Обновление блока вывода на сайте
// ==============================
function showRandom(id) {
    const number = generateRandom();
    const output = document.getElementById(id);
    if (output) {
        output.innerText = `Псевдослучайное число: ${number}`;
    }
}

// ==============================
// Экспорт функции (если нужен модуль)
// ==============================
export { generateRandom, showRandom };
