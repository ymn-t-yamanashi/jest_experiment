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
    }
}
module.exports = ForSample