// Task 5: Interface + Class Implementation
// Goal: understand OOP basics
// Task: interface Animal { name: string; sound(): string; }
//       class Dog implements Animal { ... }

interface Animal {
    name: string;
    sound(): string;
}

class Dog implements Animal {
    name: string;
    breed: string;

    constructor(name: string, breed: string = "Mixed") {
        this.name = name;
        this.breed = breed;
    }

    sound(): string {
        return "Woof!";
    }

    // Additional method specific to Dog
    wagTail(): string {
        return `${this.name} is wagging their tail happily!`;
    }

    // Method to get dog info
    getInfo(): string {
        return `${this.name} is a ${this.breed} dog.`;
    }
}

class Cat implements Animal {
    name: string;
    color: string;

    constructor(name: string, color: string = "Unknown") {
        this.name = name;
        this.color = color;
    }

    sound(): string {
        return "Meow!";
    }

    // Additional method specific to Cat
    purr(): string {
        return `${this.name} is purring softly.`;
    }

    // Method to get cat info
    getInfo(): string {
        return `${this.name} is a ${this.color} cat.`;
    }
}

// Example usage and test
console.log("Animal Interface and Class Implementation:\n");

const dog1 = new Dog("Buddy", "Golden Retriever");
const dog2 = new Dog("Max");
const cat1 = new Cat("Whiskers", "Orange");
const cat2 = new Cat("Luna");

console.log("Dogs:");
console.log(`${dog1.name} says: ${dog1.sound()}`);
console.log(dog1.getInfo());
console.log(dog1.wagTail());
console.log("");

console.log(`${dog2.name} says: ${dog2.sound()}`);
console.log(dog2.getInfo());
console.log(dog2.wagTail());
console.log("");

console.log("Cats:");
console.log(`${cat1.name} says: ${cat1.sound()}`);
console.log(cat1.getInfo());
console.log(cat1.purr());
console.log("");

console.log(`${cat2.name} says: ${cat2.sound()}`);
console.log(cat2.getInfo());
console.log(cat2.purr());
console.log("");

// Demonstrate polymorphism
console.log("Demonstrating polymorphism with Animal interface:");
const animals: Animal[] = [dog1, cat1, dog2, cat2];

animals.forEach((animal, index) => {
    console.log(`Animal ${index + 1}: ${animal.name} says ${animal.sound()}`);
});
