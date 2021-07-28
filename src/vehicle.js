getVehicle = (req, res) => { 
    res.render('index', {vehicleRepo})
}
addVehicle = (req, res) => {
    const {vtype, vmilage, vhybrid} = req.body
    const newVehicle = {
        "type": vtype,
        "milage": parseInt(vmilage) || 0,
        "hybrid": vhybrid === 'Yes'
    }
    console.log(newVehicle);
    vehicleRepo.push(newVehicle);

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
        "type": "Test",
        "milage": 58000,
        "hybrid": false
    }
]



// let vehicleType = document.querySelector('.vtype');
// let vehicleMilage = document.querySelector('.vmilage');
// let vehicleHybrid = document.querySelector('#vhybrid').value;
// const vehicleButton = document.querySelector('#addVehicleBtn');



// const addToVehicle = (e) => {
//     e.preventDefault();
//     console.log(vehicleType.value, vehicleMilage.value, vehicleHybrid);
    
    
//     getToVehicle();
// };

// getToVehicle = () => {
//     console.log('from the backend')
// };
// // getVehicle();
// vehicleButton.addEventListener("click", addToVehicle);