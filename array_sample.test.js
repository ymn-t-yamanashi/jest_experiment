const ArraySample = require("./array_sample.js")

test("array", () => {
    expect(ArraySample.array()).toBe(2)
})

test("Two dimensional array", () => {
    expect(ArraySample.twodimensionalArray()).toBe(7)
})

test("slice1", () => {
    expect(ArraySample.slice1()).toEqual([22, 33, 44])
})

test("slice2", () => {
    expect(ArraySample.slice2()).toEqual([22, 33])
})

test("slice3", () => {
    expect(ArraySample.slice3()).toEqual([33, 44])
})

test("slice4", () => {
    expect(ArraySample.slice4()).toEqual([0, 11, 22, 33, 44])
})

test("slice5", () => {
    expect(ArraySample.slice5()).toEqual([11, 22, 33])
})