class Polygon {
    constructor(sides) {
        this.sides = sides 
    }

    get countSides() {
        return this.sides.length 
    }

    get perimeter() {
        return this.sides.reduce((memo, item) => memo + item, 0)
    }
}

class Triangle extends Polygon {
    get isValid() {
        return this.sides[0] + this.sides[1] > this.sides[2] && this.sides[1] + this.sides[2] > this.sides[0] && this.sides[0] + this.sides[2] > this.sides[1]
    }
}

class Square extends Polygon {
    get isValid() {
        let singleSide = this.sides[0]
        for (let i = 1; i < this.countSides; i++) {
            if (this.sides[i] !== singleSide) return false 
        }
        return true 
    }

    get area() {
        return this.sides[0]**2
    }
}