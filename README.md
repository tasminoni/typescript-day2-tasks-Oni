# TypeScript Day 2 - Fundamentals Tasks

This repository contains all the TypeScript Day 2 tasks completed by Oni, covering fundamental TypeScript concepts including object manipulation, function overloading, async/await, error handling, interfaces, generics, modules, and CLI programming.

## Tasks Completed

### 1. Object & Array Manipulation
**File:** `src/task1-array-manipulation.ts`
- Implemented `filterActiveUsers()` function that filters users with `active: true`
- Demonstrates TypeScript interfaces and array filtering

### 2. Function Overloading
**File:** `src/task2-function-overloading.ts`
- Created `getArea()` function with multiple signatures for circle and square
- Shows function overloading with proper type checking

### 3. Async/Await Practice
**File:** `src/task3-async-await.ts`
- Implemented `fetchData()` function simulating network requests with `setTimeout`
- Demonstrates proper async/await error handling

### 4. Error Handling
**File:** `src/task4-error-handling.ts`
- Created `safeJSONParse()` function with try/catch blocks
- Returns parsed object or null on JSON parsing errors

### 5. Interface + Class Implementation
**File:** `src/task5-interface-class.ts`
- Defined `Animal` interface with `name` and `sound()` method
- Implemented `Dog` and `Cat` classes implementing the interface
- Demonstrates OOP concepts and polymorphism

### 6. Generic Function
**File:** `src/task6-generic-function.ts`
- Created `getLastItem<T>()` generic function
- Works with any array type and returns last element or null

### 7. Module Export/Import
**Files:** `src/mathUtils.ts`, `src/index.ts`
- Created `src/mathUtils.ts` with math functions (add, subtract, multiply, divide)
- Demonstrated both named and default exports
- Imported functions in `src/index.ts`

### 8. Simple CLI Program
**File:** `src/greet.ts`
- Created CLI program using `process.argv`
- Usage: `ts-node src/greet.ts <name>` outputs `Hello, <name>!`

## How to Run

### Prerequisites
```bash
npm install
```

### Running Individual Tasks
```bash
# Task 1: Array manipulation
ts-node src/task1-array-manipulation.ts

# Task 2: Function overloading
ts-node src/task2-function-overloading.ts

# Task 3: Async/await
ts-node src/task3-async-await.ts

# Task 4: Error handling
ts-node src/task4-error-handling.ts

# Task 5: Interface and classes
ts-node src/task5-interface-class.ts

# Task 6: Generic functions
ts-node src/task6-generic-function.ts

# Task 7: Module imports
ts-node src/index.ts

# Task 8: CLI program
ts-node src/greet.ts Fahim
```

