getVehicle = (req, res) => {
    res.send({
        "type": "Car",
        "milage": 3000,
        "hybrid": false
    })
}
addVehicle = (req, res) => {
    res.send({
        "car": "chevy",
        "color": "black"
    })
}

module.exports = { getVehicle, addVehicle } 