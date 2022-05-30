import { Vehicle } from './Vehicle.js';

export class Car extends Vehicle {
    #fuel;
    #brand;

    get fuel() {
        return this.#fuel;
    }

    set fuel(liters) {
        if (liters < 0) {
            liters = 0;
        }

        this.#fuel = liters;
    }

    get brand() {
        return this.#brand;
    }

    set brand(_) {
        throw new Error('Setting brand is forbidden');
    }

    constructor(speed, color, fuel, brand) {
        super(speed, color);

        this.#fuel = fuel;
        this.#brand = brand;
    }

    honk() {
        super.honk('beep-beep');
        return this;
    }

    drive(km = 0) {
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

    refuel(liters) {
        this.fuel += liters;
        console.info(`You\'ve filled ${liters} liters of gas. Now you have ${this.fuel} liters of gas in tour tank.`);
        
        return this;
    }
}