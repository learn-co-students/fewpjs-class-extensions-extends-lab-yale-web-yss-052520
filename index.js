class Polygon {
  constructor(intArray) {
    this.intArray = intArray
  }

  get countSides() {
    return this.intArray.length
  }

  get perimeter() {
    return this.intArray.reduce(function(a, b){return a + b}, 0)
  }

}

class Triangle extends Polygon {
  get isValid() {
    let ary = this.intArray
    return ary[0] + ary[1] > ary[2] && ary[1] + ary[2] > ary[0] && ary[2] + ary[0] > ary[1]
  }
}

class Square extends Polygon {
  get isValid() {
    let ary = this.intArray
    return ary.every( v => v === ary[0] )
  }

  get area() {
    return this.intArray[0]**2
  }
}