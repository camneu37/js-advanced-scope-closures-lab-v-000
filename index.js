function produceDrivingRange(range){
  return function(start, end){
    const dist = range - (Number(end.slice(0, -2)) - Number(start.slice(0, -2)))
    if (dist >= 0) {
      return `within range by ${dist}`
    } else {
      return `${Math.abs(dist)} blocks out of range`
    }
  }
}

function produceTipCalculator(tipPercent){
  return function(price){
    return price * tipPercent
  }
}

function createDriver(){
  let driverId = 0

  return class {
    constructor(name){
      this.name = name
      this.id = ++driverId
    }
  }
}
