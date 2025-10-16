// Task 7: Module Export/Import
// Goal: practice modular structure
// Task: Create mathUtils.ts with add, subtract functions and import in index.ts

import { add, subtract, multiply, divide } from './mathUtils';
import power from './mathUtils';

console.log("Module Export/Import Demo:\n");

// Test the imported functions
const num1 = 10;
const num2 = 3;

console.log(`Testing with numbers: ${num1} and ${num2}\n`);

console.log(`${num1} + ${num2} = ${add(num1, num2)}`);
console.log(`${num1} - ${num2} = ${subtract(num1, num2)}`);
console.log(`${num1} * ${num2} = ${multiply(num1, num2)}`);
console.log(`${num1} / ${num2} = ${divide(num1, num2).toFixed(2)}`);
console.log(`${num1} ^ ${num2} = ${power(num1, num2)}`);

console.log("\nTesting division by zero:");
try {
    console.log(`${num1} / 0 = ${divide(num1, 0)}`);
} catch (error) {
    console.log(`Error: ${error.message}`);
}

console.log("\nAdditional tests:");
console.log(`5 + 7 = ${add(5, 7)}`);
console.log(`15 - 8 = ${subtract(15, 8)}`);
console.log(`4 * 6 = ${multiply(4, 6)}`);
console.log(`20 / 4 = ${divide(20, 4)}`);
console.log(`2 ^ 8 = ${power(2, 8)}`);
