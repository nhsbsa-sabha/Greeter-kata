const chai = require('chai');
const Greeter = require('../src/greeter');
const expect = chai.expect;

describe('Greeter Class',() => {
    it('should create a Greeter instance with default getHour function', () => {
        const greeter = new Greeter();
        expect(greeter).to.be.an.instanceof(Greeter);
        expect(greeter.getHour).to.be.a('function');
    });
});
   describe ('greet method', () => {
    it('should greet with "Good morning" for hours between 6 and 12', () => {
        const greeter = new Greeter(() => 8);
        const greeting = greeter.greet('Alice');
        expect(greeting).to.equal('Good morning, Alice!');
    });

    it('should greet with "Good evening" for hours between 18 and 22', () => {
        const greeter = new Greeter(() => 20);
        const greeting = greeter.greet('Bob');
        expect(greeting).to.equal('Good evening, Bob!');
    });

    it('should greet with "Good night" for hours before 6 or after 22', () => {
        const greeter = new Greeter(() => 23);
        const greeting = greeter.greet('Charlie');
        expect(greeting).to.equal('Good night, Charlie!');
    });

    it('should greet with "Hello" for other hours', () => {
        const greeter = new Greeter(() => 15);
        const greeting = greeter.greet('Dave');
        expect(greeting).to.equal('Hello, Dave!');
    });

    it('should throw an error if name is empty or not a string', () => {
        const greeter = new Greeter();
        expect(() => greeter.greet('')).to.throw("Name cannot be empty and should be a string");
        expect(() => greeter.greet(123)).to.throw("Name cannot be empty and should be a string");
    });

    it('should trim and capitalize the name', () => {
        const greeter = new Greeter();
        const greeting = greeter.greet('   eve ');
        expect(greeting).to.equal('Hello, Eve!');
    });
});
