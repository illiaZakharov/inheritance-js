export function Vehicle(speed, color) {
    if (new.target === Vehicle) {
        throw new TypeError('Vehicle class cannot be created directly.');
    }

    this._mileage = 0;
    this.speed = speed;
    this.color = color;
}

Object.defineProperty(Vehicle.prototype, 'mileage', {
    get: function mileage() { return this._mileage },
    set: function mileage(km) { this._mileage = km },
});

Vehicle.prototype.about = function about() {
    return `This vehicle has a top speed of ${this.speed} km/h and a beautiful ${this.color} color.`;
}

Vehicle.prototype.honk = function honk(sound) {
    console.log(sound);
}

Vehicle.prototype.drive = function drive() {
    return this;
}

Vehicle.prototype.refuel = function refuel() {
    return this;
}

Vehicle.getTotalMileage = function getTotalMileage(...vehicle) {
    const sum = vehicle.map(vehicle => vehicle.mileage).reduce((prev, curr) => prev + curr);
    return `You have reached ${Math.abs(sum)} km from start point!`;
}