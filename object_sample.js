ObjectSample = {
    object() {
        let obj = { name: "i9", speed: "3.0 GHz" }
        return obj.speed
    },
    hierarchicalObject() {
        let obj = { name: "i9", speed: { clockSpeed: "3.0 GHz", turboSpeed: "Up to 5.8 GHz" } }
        return obj.speed.turboSpeed
    },
    objectsInTheArray() {
        let obj = [
            { name: "Intel Core i9-9900K", turboSpeed: "Up to 5.0 GHz" },
            { name: "Intel Core i9-13900K", turboSpeed: "Up to 5.8 GHz" },
            { name: "Intel Core i9-14900K", turboSpeed: "Up to 6.0 GHz" }
        ]
        return obj[2].turboSpeed
    }
}
module.exports = ObjectSample
