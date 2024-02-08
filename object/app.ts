let personObj: object;
personObj = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    isEmployeed: true
}

// display all the objects of the person object
console.log(personObj);

// using type inference creating objects
type Car = {
    name: string;
    maxSpeed: number;
    color: string;
};

const car: Car = {
    name:'CB Flash',
    maxSpeed: 200,
    color: 'Navy blue'
}

// get value of name using bracket notation
console.log(car['name']);

// get value of name using dot notation
console.log(car.name);
