// pendekatan class dengan prototype
// function Car(merk, color) {
//     this.merk = merk;
//     this.color = color;
//     this.isActive = false;
// }

// Car.prototype.startEngine = function() {
//     console.log('Mesin menyala');
//     this.isActive = true;
// }

// const newCar = new Car('Honda', 'yellow');

// newCar.startEngine();
// console.log(newCar);

// pendekatan class dengan es6 => class
class Car {
    constructor(merk, color) {
        this.merk =merk;
        //ptoperty accessor
        this._color = color;
        this.isActive = false;
    }

    get color() {
        return `warna mobil: ${this._color}`
    }

    set color(value) {
        console.log(`warna telah diubah dari ${this._color} mejadi ${value}`)
        this._color = value;
    }

    // Car.prototype.startEngine
    starEngine() {
        this.isActive = true;
        console.log('Mesin menyala');
    }

    // Car.prototype.stopeEngine
    stopEngine() {
        this.isActive = false;
        console.log('Mesin telah dimatikan');
    }
}

const newCar = new Car('Toyota', 'grey');

// newCar.starEngine();
// console.log(newCar);
// newCar.stopEngine();
// console.log(newCar);
console.log(newCar.color);
newCar.color = 'black';
console.log(newCar.color);
console.log(newCar._color)