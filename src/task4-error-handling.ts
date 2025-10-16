// Task 4: Error Handling
// Goal: use try...catch in TypeScript
// Task: Create safeJSONParse(str: string) → return parsed object or null on error

function safeJSONParse(str: string): any | null {
    try {
        return JSON.parse(str);
    } catch (error) {
        console.log(`JSON parse error: ${error instanceof Error ? error.message : String(error)}`);
        return null;
    }
}

// Example usage and test
const validJSONString = '{"name": "John", "age": 30, "city": "New York"}';
const invalidJSONString = '{"name": "John", "age": 30, "city": "New York"'; // Missing closing brace
const anotherInvalidJSON = '{"name": John, "age": 30}'; // Missing quotes around John

console.log("Testing safeJSONParse function:\n");

console.log("1. Valid JSON string:");
console.log("Input:", validJSONString);
const result1 = safeJSONParse(validJSONString);
console.log("Output:", result1);
console.log("Type:", typeof result1);
console.log("");

console.log("2. Invalid JSON string (missing closing brace):");
console.log("Input:", invalidJSONString);
const result2 = safeJSONParse(invalidJSONString);
console.log("Output:", result2);
console.log("Type:", typeof result2);
console.log("");

console.log("3. Invalid JSON string (missing quotes):");
console.log("Input:", anotherInvalidJSON);
const result3 = safeJSONParse(anotherInvalidJSON);
console.log("Output:", result3);
console.log("Type:", typeof result3);
console.log("");

// Additional test with array
const validArrayJSON = '[1, 2, 3, {"name": "test"}]';
console.log("4. Valid JSON array:");
console.log("Input:", validArrayJSON);
const result4 = safeJSONParse(validArrayJSON);
console.log("Output:", result4);
console.log("Type:", typeof result4);
console.log("Is Array:", Array.isArray(result4));
