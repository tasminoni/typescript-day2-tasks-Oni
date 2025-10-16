// Task 2: Function Overloading
// Goal: learn multiple function signatures
// Task: getArea(shape: "circle", r: number) and getArea(shape: "square", a: number) return area

// Function overloads
function getArea(shape: "circle", r: number): number;
function getArea(shape: "square", a: number): number;

// Function implementation
function getArea(shape: "circle" | "square", value: number): number {
    if (shape === "circle") {
        return Math.PI * value * value;
    } else if (shape === "square") {
        return value * value;
    }
    throw new Error("Invalid shape");
}

// Example usage and test
console.log("Circle area (radius 5):", getArea("circle", 5));
console.log("Square area (side 4):", getArea("square", 4));
console.log("Circle area (radius 3.5):", getArea("circle", 3.5));
console.log("Square area (side 7.2):", getArea("square", 7.2));
