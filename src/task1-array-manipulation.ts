// Task 1: Object & Array Manipulation
// Goal: practice loops and typing
// Task: Write a function filterActiveUsers(users) → returns only users with active: true

interface User {
    id: number;
    name: string;
    active: boolean;
    email: string;
}

function filterActiveUsers(users: User[]): User[] {
    return users.filter(user => user.active === true);
}

// Example usage and test
const users: User[] = [
    { id: 1, name: "Tasmin", active: true, email: "tasmin@example.com" },
    { id: 2, name: "Ahmed", active: false, email: "ahmed@example.com" },
    { id: 3, name: "Oni", active: true, email: "oni@example.com" },
];

console.log("All users:", users);
console.log("Active users:", filterActiveUsers(users));
