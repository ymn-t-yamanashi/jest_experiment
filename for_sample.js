ForSample = {
    for() {
        let str = ""
        for (let i = 0; i < 4; i++) {
            str = str + i
        }
        return str
    },
    forBreak() {
        let str = ""
        for (let i = 0; i < 4; i++) {
            if (i == 3) break
            str = str + i
        }
        return str
    },
    forContinue() {
        let str = ""
        for (let i = 0; i < 4; i++) {
            if (i % 2 == 0) continue
            str = str + i
        }
        return str
    },
    forEach() {
        let str = ""
        let array = ["a", "b", "c"]
        array.forEach((x) => {
            str = str + x
        })
        return str
    },
    forOf() {
        let str = ""
        let array = ["a", "b", "c"]
        for (let x of array) {
            str = str + x
        }
        return str
    },
    forIn() {
        let str = ""
        let array = ["a", "b", "c"]
        for (let i in array) {
            str = str + array[i]
        }
        return str
    },
    forEachObject() {
        let str = ""
        let object = { a: "あ", b: "い", c: "う" }
        let keys = Object.keys(object)

        keys.forEach((key) => {
            str = str + key + object[key]
        })
        return str
    },
    forInObject() {
        let str = ""
        let object = { a: "あ", b: "い", c: "う" }
        for (let i in object) {
            str = str + i + object[i]
        }
        return str
    },
}
module.exports = ForSample