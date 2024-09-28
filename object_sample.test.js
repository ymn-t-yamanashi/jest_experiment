const ObjectSample = require("./object_sample.js")

test("Object", () => {
    expect(ObjectSample.object()).toBe("3.0 GHz")
})

test("Hierarchical Object", () => {
    expect(ObjectSample.hierarchicalObject()).toBe("Up to 5.8 GHz")
})