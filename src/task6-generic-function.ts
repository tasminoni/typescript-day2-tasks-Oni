// Task 6: Generic Function
// Goal: reuse code safely
// Task: getLastItem<T>(arr: T[]): T | null

function getLastItem<T>(arr: T[]): T | null {
    if (arr.length === 0) {
        return null;
    }
    return arr[arr.length - 1];
}

// Example usage and test
console.log("Generic Function - getLastItem<T>:\n");

// Test with numbers
const numbers: number[] = [1, 2, 3, 4, 5];
const lastNumber = getLastItem(numbers);
console.log("Numbers array:", numbers);
console.log("Last number:", lastNumber);
console.log("Type:", typeof lastNumber);
console.log("");

// Test with strings
const strings: string[] = ["apple", "banana", "cherry", "date"];
const lastString = getLastItem(strings);
console.log("Strings array:", strings);
console.log("Last string:", lastString);
console.log("Type:", typeof lastString);
console.log("");

// Test with objects
interface Person {
    name: string;
    age: number;
}

const people: Person[] = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
];
const lastPerson = getLastItem(people);
console.log("People array:", people);
console.log("Last person:", lastPerson);
console.log("Type:", typeof lastPerson);
console.log("");

// Test with empty array
const emptyArray: number[] = [];
const lastFromEmpty = getLastItem(emptyArray);
console.log("Empty array:", emptyArray);
console.log("Last item from empty array:", lastFromEmpty);
console.log("Type:", typeof lastFromEmpty);
console.log("");

// Test with boolean array
const booleans: boolean[] = [true, false, true, true, false];
const lastBoolean = getLastItem(booleans);
console.log("Booleans array:", booleans);
console.log("Last boolean:", lastBoolean);
console.log("Type:", typeof lastBoolean);
console.log("");

// Test with mixed array using union types
const mixedArray: (string | number)[] = ["hello", 42, "world", 100];
const lastMixed = getLastItem(mixedArray);
console.log("Mixed array:", mixedArray);
console.log("Last mixed item:", lastMixed);
console.log("Type:", typeof lastMixed);
