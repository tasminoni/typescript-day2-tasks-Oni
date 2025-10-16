// Task 3: Async/Await Practice
// Goal: handle async code properly
// Task: fetchData(url: string): Promise<string> → simulate with setTimeout

function fetchData(url: string): Promise<string> {
    return new Promise((resolve, reject) => {
        // Simulate network delay with random timeout
        const delay = Math.random() * 2000 + 500; // 500-2500ms delay
        
        setTimeout(() => {
            // Simulate success/failure randomly
            if (Math.random() > 0.2) { // 80% success rate
                resolve(`Data from ${url} fetched successfully!`);
            } else {
                reject(new Error(`Failed to fetch data from ${url}`));
            }
        }, delay);
    });
}

// Example usage with async/await
async function demonstrateAsyncAwait(): Promise<void> {
    const urls = [
        "https://api.example.com/users",
        "https://api.example.com/posts",
        "https://api.example.com/comments"
    ];

    console.log("Starting async data fetching...\n");

    for (const url of urls) {
        try {
            console.log(`Fetching data from: ${url}`);
            const data = await fetchData(url);
            console.log(`✅ ${data}\n`);
        } catch (error) {
            console.log(`❌ Error: ${error instanceof Error ? error.message : String(error)}\n`);
        }
    }

    console.log("All async operations completed!");
}

// Run the demonstration
demonstrateAsyncAwait().catch(console.error);
