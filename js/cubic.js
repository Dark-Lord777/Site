// js/cubicjs


// Pseudo-random generator 
function pseudoRandom(seed = Date.now()) {
    //(LCG)
    let a = 1664525;
    let c = 1013904223;
    let m = 4294967296; // 2^32
    seed = (a * seed + c) % m;
    return seed;
}

// Generations random numbrer 1-100
function generateRandom() {
    let seed = Date.now() % 1000; // пример начального значения (seed)
    let rand = pseudoRandom(seed) % 100 + 1;
    return rand;
}

// Update the block outputs on site
function showRandom(id) {
    const number = generateRandom();
    const output = document.getElementById(id);
    if (output) {
        output.innerText = `Pseudo-random number: ${number}`;
    }
}

//Export function 
export { generateRandom, showRandom };
