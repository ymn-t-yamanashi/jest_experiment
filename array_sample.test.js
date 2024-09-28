const ArraySample = require("./array_sample.js")

test("array", () => {
    expect(ArraySample.array()).toBe(2)
})

test("Two dimensional array", () => {
    expect(ArraySample.twodimensionalArray()).toBe(7)
})