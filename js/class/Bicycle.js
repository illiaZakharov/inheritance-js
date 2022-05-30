import { Vehicle } from './Vehicle.js';

export class Bicycle extends Vehicle {
    #wheels;

    get wheels() {
        return this.#wheels;
    }

    set wheels(_) {
        throw new Error('Setting wheels is forbidden');
    }

    constructor(speed, color, wheels) {
        super(speed, color);

        this.#wheels = wheels;
    }

    countWheels() {
        return `This bicycle has ${this.wheels} wheel${this.wheels > 1 ? 's' : ''}`;
    }

    honk() {
        super.honk('ding-ding');
        return this;
    }

    drive(km = 0) {
        this.mileage += km;
        console.info(`You\'ve moved ${km >= 0 ? 'forward' : 'backward'} for ${km.toFixed(0)} km and stopped to check map.`);

        return this;
    }
}