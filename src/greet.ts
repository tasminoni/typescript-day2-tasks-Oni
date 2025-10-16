// Task 8: Simple CLI Program
// Goal: use process.argv to take input
// Task: Run: ts-node greet.ts Fahim → Output: Hello, Fahim!

function greet(name: string): void {
    console.log(`Hello, ${name}!`);
}

// Get command line arguments
const args = process.argv;

// Check if name is provided
if (args.length < 3) {
    console.log("Usage: ts-node greet.ts <name>");
    process.exit(1);
}

// Extract name from arguments (skip 'node' and 'greet.ts')
const name = args[2];

// Greet the user
greet(name);
