interface Person {
    name: string;
    age: number;
    gender: "male" | "female";
}

const personOne: Person = {
    name:'Maria Nagai',
    age: 27,
    gender: 'female'
}

console.log(personOne.name);
console.log(personOne.age);
console.log(personOne.gender);
