function produceDrivingRange(blockRange) {
  return function(arg1, arg2) {
    let range = Math.abs(parseInt(arg1.slice(0, -2) - parseInt(arg2.slice(0, -2))))
    if (range <= 10) {
      return `within range by ${range}`
    } else {
      return `${range} blocks out of range`
    }
  }
}
