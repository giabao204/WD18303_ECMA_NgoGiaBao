class Shape {
    constructor() {
        this.x = 0;
        this.y = 0;
    }
    move(x, y) {
        this.x = x;
        this.y = y;
    }
}
const square = new Shape();
square.move(10, 20);
console.log(square.x, square.y); // 10, 20