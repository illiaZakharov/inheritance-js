export const Vehicle = function (speed, color) {
    const that = {};

    Object.assign(that, {
        speed,
        color,
        _mileage: 0,

        getMileage: function () {
            return this._mileage;
        },

        setMileage: function (km) {
            this._mileage = km;
        },

        about: function () {
            return `This vehicle has a top speed of ${this.speed} km/h and a beautiful ${this.color} color.`;
        },

        honk: function (sound) {
            console.log(sound);
        },

        drive: function () {
            return this;
        },

        refuel: function () {
            return this;
        },
    });

    return that;
}

Vehicle.getTotalMileage = function (...vehicle) {
    const sum = vehicle.map(vehicle => vehicle.getMileage()).reduce((prev, curr) => prev + curr);
    return `You have reached ${Math.abs(sum)} km from start point!`;
}
