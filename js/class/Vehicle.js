export class Vehicle {
    _mileage = 0;

    get mileage() {
        return this._mileage;
    }

    set mileage(km) {
        this._mileage = km;
    }

    constructor(speed, color) {
        if (new.target === Vehicle) {
            throw new TypeError('Vehicle class cannot be created directly.');
        }

        this.speed = speed;
        this.color = color;
    }

    about() {
        return `This vehicle has a top speed of ${this.speed} km/h and a beautiful ${this.color} color.`;
    }

    honk(sound) { 
        console.log(sound); 
    }

    drive() { return this; }

    refuel() { return this; }

    static getTotalMileage(...vehicle) {
        const sum = vehicle.map(vehicle => vehicle.mileage).reduce((prev, curr) => prev + curr);
        return `You have reached ${Math.abs(sum)} km from start point!`;
    }
}