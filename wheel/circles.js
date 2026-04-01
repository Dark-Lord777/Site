//Khalyutkin Victor

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

let mn = 1000, mnind = 0;

class Crcl {
    constructor(x, y, r) {
        this.centerX = x;
        this.centerY = y;
        this.rad = r;
    }

    show() {
        stroke(150);
        fill(150);
        ellipseMode(CENTER);
        circle(this.centerX, this.centerY, this.rad);
        angleMode(DEGREES);
        if (total == 0)
            return;
        mn = 1000, mnind = 0;
        for (let i = 0, j = 0; i < 360; i += 360 / total, j++) {
            lineDraw(i + rollRotate, j);
        }
    }
    add() {
        total++;
    }
}

function lineDraw(angle, ind) {
    angle %= 360;
    angleMode(DEGREES);
    strokeWeight(2);
    stroke(50);
    let x1 = crcl.centerX - crcl.rad / 2 * cos(90 + angle),
        x2 = crcl.centerX,
        y1 = crcl.centerY - crcl.rad / 2 * cos(angle),
        y2 = crcl.centerY;
    let a = new Point(1, 1);
    let b = new Point(1, 1);
    let c = new Point(1, 1);
    a.x = x1; a.y = y1;
    b.x = crcl.centerX; b.y = crcl.centerY;
    c.x = crcl.centerX + crcl.rad / 2 - 30; c.y = crcl.centerY;
    let  ans = answerDraw(a, b, c);
    if (ans < mn) {
        mn = ans;
        mnind = ind;
    };
    fill(50);
    rect(crcl.centerX + crcl.rad / 2 + 100, crcl.centerY - 50, 500, 150);
    push();
    fill(150);
    textSize(50);
    strokeWeight(1);
    text(s.arr[mnind], crcl.centerX + crcl.rad / 2 + 100, crcl.centerY);
    pop();
    line(x1, y1, x2, y2);
    let sizeText = 50 - total * 2;
    if (sizeText < 1) {
        sizeText = 1;
    }
    push();
    fill(50);
    textSize(sizeText);
    strokeWeight(1);
    translate(x1, y1);
    rotate(90 + angle % 360);
    text(s.arr[ind], 10, -10);
    pop();
}

function answerDraw(a, b, c) {
    let ba = new Point(1, 1);
    let bc = new Point(1, 1);
    ba.x = a.x - b.x; ba.y = a.y - b.y;
    bc.x = c.x - b.x; bc.y = c.y - b.y;
    let angle = atan2(crossMult(ba, bc), dotMult(ba, bc));
    if (angle >= 0) {
        return angle;
    } else {
        return 360 + angle;
    }
}

function crossMult(a, b) {
    return a.x * b.y - a.y * b.x;
}

function dotMult(a, b) {
    return a.x * b.x + a.y * b.y;
}















//
