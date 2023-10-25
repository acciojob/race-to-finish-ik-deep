window.promises = [];
// Array of five promises with random delays between 1 and 5 seconds
const promises = Array.from({ length: 5 }, (_, index) => {
    const delay = Math.floor(Math.random() * 5000) + 1000; // Random delay between 1 and 5 seconds
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Promise ${index + 1} resolved after ${delay / 1000} seconds`);
        }, delay);
    });
});

// Wait for the first promise to resolve using Promise.any()
Promise.any(promises)
    .then((result) => {
        const outputDiv = document.getElementById("output");
        outputDiv.textContent = result;
    })
    .catch((error) => {
        console.error("All promises were rejected:", error);
    });
