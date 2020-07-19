// Your code here

class Polygon {
    constructor(array) {
        this.array = array
    }

    get countSides() {
        return this.array.length
    }

    get perimeter() {
        return this.array.reduce( (acc, num) => num + acc)
    }
}

class Triangle extends Polygon {
    get isValid() {
        // return this.countSides == 3
        let side1 = this.array[0]
        let side2 = this.array[1]
        let side3 = this.array[2]

        return ((side1 + side2 > side3) && (side1 + side3 > side2) && (side2 + side3 > side1))
    }
}

class Square extends Polygon {
    get isValid() {
        let side = this.array[0]
        let validSides = []
        this.array.forEach(s => {
            if (s == side) {
                validSides.push(s)
            }
        })
        return validSides.length == 4
    }

    get area() {
        return this.array[0] ** 2
    }
}

