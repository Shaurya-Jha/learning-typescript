class Person {
    private _age: number;
    private _firstName: string;
    private _lastName: string;

    public get age(){
        return this._age;
    }

    public get firstName(){
        return this._firstName
    }

    public get lastName(){
        return this._lastName
    }

    public set age(theAge: number) {
        if(theAge <= 0 || theAge >= 20){
            throw new Error('The age is invalid')
        }

        this._age = theAge;
    }

    public set firstName(theFirstName: string) {
        if(!theFirstName) {
            throw new Error("Invalid first name")
        }

        this._firstName = theFirstName
    }

    public set lastName(theLastName: string) {
        if(!theLastName) {
            throw new Error("Invalid last name")
        }

        this._lastName = theLastName
    }

    // public getFullName(): string {
    //     return `${this._firstName} ${this._lastName}`
    // }
}

let person = new Person();
person.age = 10;
person.firstName = 'John';
person.lastName = 'Doe'

console.log(person)