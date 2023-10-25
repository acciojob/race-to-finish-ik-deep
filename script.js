window.promises = [];

// Add promises to the window.promises array
for (let i = 1; i <= 5; i++) {
    const delay = i * 2; // Replace this with the desired delay value
    const promise = new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Promise ${i} resolved after ${delay} seconds`);
        }, delay * 1000);
    });
    window.promises.push(promise);
}