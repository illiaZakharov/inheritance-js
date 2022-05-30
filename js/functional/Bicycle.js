import { Vehicle } from './Vehicle.js';

export const Bicycle = function (speed, color, wheels) {
    const that = Vehicle(speed, color);

    Object.assign(that, {
        _wheels: wheels,

        getWheels: function () {
            return this._wheels;
        },

        setWheels: function (_) {
            throw new Error('Setting wheels is forbidden');
        },

        countWheels: function () {
            return `This bicycle has ${this.getWheels()} wheel${this.getWheels() > 1 ? 's' : ''}`;
        },

        honk: function () {
            console.log('ding-ding');
            return this;
        },

        drive: function (km = 0) {
            this.setMileage(this.getMileage() + km);
            console.info(`You\'ve moved ${km >= 0 ? 'forward' : 'backward'} for ${km.toFixed(0)} km and stopped to check map.`);

            return this;
        }
    });

    return that;
}
