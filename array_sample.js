ArraySample = {
    array() {
        let arr = [1, 2, 3, 4]
        return arr[1]
    },
    twodimensionalArray() {
        let arr = [[1, 2, 3, 4], [5, 7, 8, 9]]
        return arr[1][1]
    },
    slice1() {
        let arr = [0, 11, 22, 33, 44]
        return arr.slice(2)
    },
    slice2() {
        let arr = [0, 11, 22, 33, 44]
        return arr.slice(2, 4)
    },
    slice3() {
        let arr = [0, 11, 22, 33, 44]
        return arr.slice(-2)
    },
    slice4() {
        let arr = [0, 11, 22, 33, 44]
        return arr.slice()
    },
    slice5() {
        let arr = [0, 11, 22, 33, 44]
        return arr.slice(1, -1)
    }
}

module.exports = ArraySample