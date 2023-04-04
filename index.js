// Task 1: Code a Person class
class Person {
    constructor(name = "Tom", age = 20, energy = 100) {
        this.name = name;
        this.age = age;
        this.energy = energy;
    }

    sleep() {
        this.energy += 10;
        console.log('The energy is increasing to: ', this.energy)
        
    }
    doSomethingFun() {
        this.enegry -= 10;
        console.log('The energy is decreasing to: ', this.energy)
    }
}
// Task 2: Code a Worker class

class Worker extends Person {
    constructor( name, age, energy, xp = 0, hourlyWage = 10) {
        super(name, age, energy);
        this.xp = xp;
        this.hourlyWage = hourlyWage;
    }

    goToWork() {
        this.xp += 10;
        console.log(name, 'experience increase to:', this.xp)
    }
}


// Task 3: Code an intern object, run methods
function intern() {
    internNew = new Worker(name = 'Bob', age = 21, energy = 110, xp = 0, hourlyWage = 10)
    internNew.goToWork();
    return internNew;
}
intern();


// Task 4: Code a manager object, methods
function manager() {
    managerNew = new Worker(name = 'Alice', age = 30, energy = 120, xp = 100, hourlyWage = 30)
    managerNew.goToWork();
    return managerNew;
}
manager();

