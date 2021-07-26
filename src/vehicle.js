getVehicle = (req, res) => {
    res.send(vehicleRepo)
}
addVehicle = (req, res) => {
    const vehicles = []
    
    for (let i = 0; i < req.body.length; i++) {  
        const newVehicle = {"type": req.body[i].type, "milage": req.body[i].milage, "hybrid": req.body[i].hybrid};
        vehicleRepo.push(newVehicle)
        vehicles.push(newVehicle)
    }
    res.send(vehicles)
}

module.exports = { getVehicle, addVehicle } 

let vehicleRepo = [
    {
        "type": "Car",
        "milage": 3000,
        "hybrid": false
    },
    {
        "type": "Truck",
        "milage": 24000,
        "hybrid": true
    },
    {
        "type": "Bus",
        "milage": 30,
        "hybrid": false
    },
    {
        "type": "Car",
        "milage": 80000,
        "hybrid": false
    },
    {
        "type": "Car",
        "milage": 58000,
        "hybrid": false
    }
]