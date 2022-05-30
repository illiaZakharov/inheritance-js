import { Vehicle } from './Vehicle.js';

export function Bicycle(speed, color, wheels) {
    Vehicle.call(this, speed, color);
    this._wheels = wheels;
}

Bicycle.prototype = Object.create(Vehicle.prototype);
Bicycle.prototype.constructor = Bicycle;

Object.defineProperty(Bicycle.prototype, 'wheels', {
    get: function wheels() { return this._wheels },
    set: function wheels(_) { throw new Error('Setting wheels is forbidden') },
});

Bicycle.prototype.honk = function honk() {
    Vehicle.prototype.honk.call(this, 'ding-ding');
    return this;
}

Bicycle.prototype.countWheels = function countWheels() {
    return `This bicycle has ${this.wheels} wheel${this.wheels > 1 ? 's' : ''}`;
}

Bicycle.prototype.drive = function drive(km = 0) {
    this.mileage += km;
    console.info(`You\'ve moved ${km >= 0 ? 'forward' : 'backward'} for ${km.toFixed(0)} km and stopped to check map.`);

    return this;
}