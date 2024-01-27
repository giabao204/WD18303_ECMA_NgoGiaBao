class Person {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }

    get firstname() {
        return this._firstname;
    }

    set firstname(value) {
        if (value.length < 2) {
            throw new Error('Tên phải dài ít nhất 2 ký tự');
        }
        this._firstname = value;
    }

    get lastname() {
        return this._lastname;
    }

    set lastname(value) {
        if (value.length < 2) {
            throw new Error('Họ phải dài ít nhất 2 ký tự.');
        }
        this._lastname = value;
    }

    get fullName() {
        return this.firstname + ' ' + this.lastname;
    }
}

const person = new Person('Albert', 'Einstein');

console.log(person.firstname); // Albert

person.firstname = 'Isaac';

console.log(person.firstname); // Isaac

try {
    person.firstname = 'I';
} catch (error) {
    console.log(error); // Tên phải có ít nhất 3 ký tự.
}

console.log(person.fullName); // Isaac Einstein