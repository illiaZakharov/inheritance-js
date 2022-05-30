import { Vehicle } from './Vehicle.js';

export function Car(speed, color, fuel, brand) {
    Vehicle.call(this, speed, color);
    this._fuel = fuel;
    this._brand = brand;
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

Object.defineProperties(Car.prototype, {
    fuel: {
        get: function fuel() { return this._fuel },
        set: function fuel(liters) {
            if (liters < 0) {
                liters = 0;
            }
            this._fuel = liters
        }
    },
    brand: {
        get: function brand() { return this._brand },
        set: function brand(_) { throw new Error('Setting brand is forbidden') },
    },
});

Car.prototype.honk = function honk() {
    Vehicle.prototype.honk.call(this, 'beep-beep');
    return this;
}

Car.prototype.drive = function drive(km = 0) {
    if (this.fuel === 0) {
        console.info('You can\'t start the engine. Tank is empty.');
        return this;
    }

    let consumedFuel = Math.abs(km / 10);

    if (consumedFuel > this.fuel) {
        console.log('There isn\'t enough gas.');

        consumedFuel = this.fuel;
        km = this.fuel * 10;
    }

    this.fuel -= consumedFuel;
    this.mileage += km;
    console.info(`You\'ve moved ${km >= 0 ? 'forward' : 'backward'} for ${km.toFixed(0)} km and stopped to check map.`);

    return this;
}

Car.prototype.refuel = function refuel(liters) {
    this.fuel += liters;
    console.info(`You\'ve filled ${liters} liters of gas. Now you have ${this.fuel} liters of gas in tour tank.`);
    
    return this;
}