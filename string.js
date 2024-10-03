stringSample = {
  split1() {
    let str = "00,11,22,33"
    let word = str.split(",")
    return word[1]
  },
  split2() {
    let str = "00,11,22,33"
    let word = str.split("")
    return word[2]
  },
  split3() {
    let str = "00,11,22,33"
    let word = str.split()
    return word[0]
  }
}
module.exports = stringSample