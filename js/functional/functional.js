import { Vehicle } from './Vehicle.js';
import { Car } from './Car.js';
import { Bicycle } from './Bicycle.js';

const bmw = Car(220, 'blue', 100, 'BMW');
const mercedes = Car(210, 'grey', 10, 'Mercedes');
const bike = Bicycle(40, 'green', 2);

console.group(`Function`);

    console.group(`${bmw.getBrand()} trip`);
        console.log(bmw.about());
        bmw.honk().drive(400).drive(100).drive(520).refuel(10).honk().drive(100).drive(100);
    console.groupEnd();

    console.group(`${mercedes.getBrand()} trip`);
        console.log(mercedes.about());
        mercedes.drive(9).drive(100).drive(520).refuel(10).honk().drive(100).drive(100);
    console.groupEnd();

    console.group('Bike trip class');
        console.log(bike.about());
        bike.drive(100).drive(10).refuel().drive(220).honk().drive(-10);
    console.groupEnd();

    console.log(Vehicle.getTotalMileage(bmw, bike, mercedes));

console.groupEnd();
