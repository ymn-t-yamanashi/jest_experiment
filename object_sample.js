ObjectSample = {
    object() {
        let obj = { name: "i9", speed: "3.0 GHz" }
        return obj.speed
    },
    hierarchicalObject() {
        let obj = { name: "i9", speed: { clockSpeed: "3.0 GHz", turboSpeed: "Up to 5.8 GHz" } }
        return obj.speed.turboSpeed
    }
}
module.exports = ObjectSample
