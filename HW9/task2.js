const { Animal, Snake } = require('./task1.js');

/* Task 2_update
1. Создайте класс Bird с приватным полем isFlying, отнаследовавшись от Animal
2. Создайте класс CatLike с публичным полем isSafeToPet, отнаследовавшись от Animal
*/

class Bird extends Animal {
    #isFlying
    constructor(type, color, weight, height, placeOfOrigin, isFlying){
        super(type, color, weight, height, placeOfOrigin)
        this.#isFlying = isFlying
    }
}

class CatLike extends Animal {
    constructor(type, color, weight, height, placeOfOrigin, isSafeToPet) {
        super(type, color, weight, height, placeOfOrigin)
        this.isSafeToPet = isSafeToPet
    }
}


/* 
3. Создайте класс Worker, реализующий следующий интерфейс (набор полей и методов):
    class Worker
      firstName
      lastName
      phone
      getFullName()
4. Создайте класс Zoo, реализующий следующий интерфейс:
    class Zoo
      address
      title
      ticket price
      workers: []
      animals: [],
5. Добавьте геттеры и сеттеры к полям address, title, ticket price
6. Добавьте метод addWorker(worker), добавляющий работника в массив workers. 
    На вход метод должен принимать объект класса Worker. 
    Если объект не является инстансом класса Worker - выкинуть ошибку
7. Добавьте метод addAnimal(animal), добавляющий животное в массив animals.
    На вход метод должен принимать объект класса Animal, как и любого из его наследников. 
    Если объект не является инстансом класса Animal - выкинуть ошибку
    ТАКЖЕ, если объект является инстансом класса Snake - выкинуть ошибку с тексом "There will be no snakes, mister Potter!"
8. Добавьте методы removeWorker() и removeAnimal() // Подумайте, как будем удалять, по какому полю будем выбирать:)
*/

class Worker {
    constructor(firstName, lastName, phone) {
        this.firstName = firstName,
        this.lastName = lastName,
        this.phone = phone
    }

    getFullName(){
        return `${this.firstName} ${this.lastName}`
    }
}

class Zoo {
    constructor(address, title, ticketPrice) {
        this.address = address,
        this.title = title, 
        this.ticketPrice = ticketPrice
    }
    workers = []
    animals = []

    get address() {
        return this._address
    }
    get title() {
        return this._title
    }
    get ticketPrice() {
        return this._ticketPrice
    }
  
    set address(newAddress) {
        this._address = newAddress;
    }
    set title(newTitle) {
        this._title = newTitle;
    }
    set ticketPrice(newPrice) {
        this._ticketPrice = newPrice;
    }

    addWorker(worker) {
        if(!(worker instanceof Worker)) throw new Error('Invalid worker')
        this.workers.push(worker)
    }

    addAnimal(animal) {
        if(animal instanceof Snake) throw new Error('There will be no snakes, mister Potter!')
        if(!(animal instanceof Animal)) throw new Error('Invalid type')
        this.animals.push(animal)
    }

    removeWorker(name) {
        const index = this.workers.findIndex(worker => worker.firstName === name)
        if (index !== -1) {
            this.workers.splice(index, 1)
        } else {
            throw new Error('There are no workers with that name')
        }
    }
    
    removeAnimal(weight) {
        const index = this.animals.findIndex(animal => animal.weight <= weight)
        if (index !== -1) {
            this.animals.splice(index, 1)
        } else {
            throw new Error('There are no animals with this weight')
        }
    }
}

const zoo = new Zoo('Berlin', 'ZOO', 50)
console.log(zoo)

const titmouse = new Bird('Bird', 'blue', 0.2, '10sm', 'Belarus', true);
console.log(titmouse.getInfo())

const myCat = new CatLike('Cat', 'red', 5.2, '30sm', 'Belarus', false);
console.log(myCat.getInfo())

const cobra = new Snake('Cobra', 'black', 2.5, '4m', 'India', true);
console.log(cobra.getInfo())

const worker1 = new Worker('Bob', 'Rob', '123456');
const worker2 = new Worker('John', 'Jekson', '654321');
console.log(worker1.getFullName());

zoo.addAnimal(titmouse)
zoo.addAnimal(myCat)
//zoo.addAnimal(cobra)

zoo.addWorker(worker1)
zoo.addWorker(worker2)

console.log(zoo)

zoo.removeAnimal(0.5)
zoo.removeWorker('Bob')

console.log(zoo)

