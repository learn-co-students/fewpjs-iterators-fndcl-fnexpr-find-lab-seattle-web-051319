const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array) {
  let bigDubs;
   array.find(o => {
    if (o.result === 'W') {
      bigDubs = o.year
    }
  })
  return bigDubs;
}
