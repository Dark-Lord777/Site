// Khalyutkin Victor
console.log('Privet');

let total = 0;
let s = {
    arr: [],
    size: 0
};
let str = '';
let rollFlag = false;
let rollRotate = 0;
let rollAngle = 0;
let rollSpeed = 20;
let rollTotal = 0;

let crcl;
let btnInput;
let btnRoll;
let canvasCreated = false;

function initWheel() {
    let container = document.getElementById('wheelContainer');
    if (!container) {
        console.error('Do not find container #wheelContainer');
        return;
    }
    if (canvasCreated) return;
    
    let w = container.clientWidth;
    let h = container.clientHeight;
    if (w === 0 || h === 0) {
        console.warn('Container was hide, wait for initializations');
        return;
    }
    
    let canvasElem = createCanvas(w, h);
    canvasElem.parent(container);
    frameRate(60);
    
    let radius = min(width, height) * 0.4;
    crcl = new Crcl(width / 2, height / 2, radius);
    
    let btnW = 200;
    let btnH = 60;
    let centerX = width / 2;
    let btnY = height - 100;
    btnInput = new Buttons(centerX - btnW - 20, btnY, btnW, btnH, 'Add position', -10, 15);
    btnRoll = new Buttons(centerX + 20, btnY, btnW, btnH, 'ROLL', 50, 15);
    
    canvasCreated = true;
    console.log('Wheel initializations');
}

function setup() {
    // Nothing do this. Hah... Wait  initWheel()
}

function windowResized() {
    if (!canvasCreated) return;
    let container = document.getElementById('wheelContainer');
    if (!container) return;
    
    let w = container.clientWidth;
    let h = container.clientHeight;
    if (w === 0 || h === 0) return;
    
    resizeCanvas(w, h);
    
    let radius = min(width, height) * 0.4;
    crcl = new Crcl(width / 2, height / 2, radius);
    
    let btnW = 200;
    let btnH = 60;
    let centerX = width / 2;
    let btnY = height - 100;
    btnInput = new Buttons(centerX - btnW - 20, btnY, btnW, btnH, 'Add position', -10, 15);
    btnRoll = new Buttons(centerX + 20, btnY, btnW, btnH, 'ROLL', 50, 15);
}

function draw() {
    if (!canvasCreated) return;
    background(50);
    if (rollFlag) {
        roll();
    }
    crcl.show();
    btnInput.build();
    btnRoll.build();
    triangleDraw();
}

function triangleDraw() {
    if (!crcl) return;
    fill(255, 166, 224);
    stroke(255, 166, 224);
    triangle(crcl.centerX + crcl.rad / 2 - 30, crcl.centerY,
             crcl.centerX + crcl.rad / 2 + 20, crcl.centerY - 30,
             crcl.centerX + crcl.rad / 2 + 20, crcl.centerY + 30);
}

function roll() {
    angleMode(DEGREES);
    if (rollSpeed < random(0.1, 0.3)) {
        rollFlag = false;
        return;
    }
    rollRotate += rollSpeed;
    rollTotal += rollSpeed;
    rollRotate %= 360;
    if (rollSpeed < 1.5) {
        rollSpeed *= 0.995;
    } else {
        rollSpeed *= 0.99;
    }
}

function mousePressed() {
    if (!canvasCreated) return;
    if (btnInput.clickCheck() && !rollFlag) {
        inputString();
    }
    if (btnRoll.clickCheck() && !rollFlag && total > 0) {
        rollAngle = random(1200, 3600);
        rollTotal = 0;
        rollSpeed = rollAngle * 0.05;
        rollFlag = true;
    }
}
function inputString() {
    let str = prompt('Input name\n Maximum length = 10', 'some input');
    if (str && str.length > 10) {
        str = str.substr(0, 10);
    }
    if (str) {
        s.arr[s.size] = str;
        s.size++;
        total++;
        crcl.add();
    }
}

// Do  initWheel global
window.initWheel = initWheel;
