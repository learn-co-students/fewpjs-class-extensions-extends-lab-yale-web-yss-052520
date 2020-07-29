class Polygon {
  constructor (sideArr) {
    this.sideArr = sideArr
  }

  get countSides() {
    return this.sideArr.length
  }

  get perimeter() {
    return sideArr.reduce((tot, el) => tot += el)
  }
}

class Triangle extends Polygon {
  get isValid() {
    if (this.countSides === 3) {
      const [side1, side2, side3] = this.sideArr
      return ((side1 + side2 > side3) && (side1 + side3 > side2) && (side2 + side3 > side1))
    }
  }
}

class Square extends Polygon {
  get isValid() {
    if (this.countSides === 4) {
      const [side1, side2, side3, side4] = this.sideArr
      return ((side1 === side2) && (side2 === side3) && (side3 === side4))
    }
  }

  get area() {
    if (this.countSides === 4) {
      return this.sideArr[0] ** 2
    }
  }
}
