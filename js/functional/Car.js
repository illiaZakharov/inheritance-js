import { Vehicle } from './Vehicle.js';

export const Car = function (speed, color, fuel, brand) {
    const that = Vehicle(speed, color);

    Object.assign(that, {
        _fuel: fuel,
        _brand: brand,

        getFuel: function () {
            return this._fuel;
        },

        setFuel: function (liters) {
            if (liters < 0) {
                liters = 0;
            }

            this._fuel = liters;
        },

        getBrand: function () {
            return this._brand;
        },
    
        setBrand: function (_) {
            throw new Error('Setting brand is forbidden');
        },

        honk: function () {
            console.log('beep-beep');
            return this;
        },

        drive: function (km = 0) {
            let fuel = this.getFuel();

            if (fuel === 0) {
                console.info('You can\'t start the engine. Tank is empty.');
                return this;
            }
    
            let consumedFuel = Math.abs(km / 10);
    
            if (consumedFuel > fuel) {
                console.log('There isn\'t enough gas.');
    
                consumedFuel = fuel;
                km = fuel * 10;
            }
    
            this.setFuel(this.getFuel() - consumedFuel);
            this.setMileage(this.getMileage() + km);
            console.info(`You\'ve moved ${km >= 0 ? 'forward' : 'backward'} for ${km.toFixed(0)} km and stopped to check map.`);
    
            return this;
        },

        refuel: function(liters) {
            this.setFuel(this.getFuel() + liters);
            console.info(`You\'ve filled ${liters} liters of gas. Now you have ${this.getFuel()} liters of gas in tour tank.`);

            return this;
        }
    });

    return that;
}
