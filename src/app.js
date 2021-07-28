
let vehicleType = document.querySelector('.vtype');
let vehicleMilage = document.querySelector('.vmilage');
let vehicleHybrid = document.querySelector('#vhybrid').value;
const vehicleButton = document.querySelector('#addVehicleBtn');



const addVehicle = (e) => {
    e.preventDefault();
    console.log(vehicleType.value, vehicleMilage.value, vehicleHybrid);
    
    
    getVehicle();
};

getVehicle = () => {
    console.log('from the backend')
};
getVehicle();
vehicleButton.addEventListener("click", addVehicle);