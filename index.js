// Your code here

class Polygon {
    constructor(sides) {
        this._sides = sides
    }
    get countSides() {
        return this._sides.length
    }
    get perimeter() {
        return this._sides.reduce((m, e) => m+e, 0)
    }
}

class Triangle extends Polygon {
    get isValid() {
        if (this.countSides===3) {
            this._sides.sort()
            
            return ((this._sides[0]+this._sides[1]) > this._sides[2])
        }
        else {return false}
    }
}

class Square extends Polygon {
    get isValid() {
        if (this.countSides===4) {
            return ((this._sides[0]==this._sides[1]) 
            && (this._sides[0]==this._sides[2]) 
            && (this._sides[0]==this._sides[3]))
        }
        else {return false}
    }
    get area() {
        if (this.isValid) {return this._sides[0]**2}
    }
}

