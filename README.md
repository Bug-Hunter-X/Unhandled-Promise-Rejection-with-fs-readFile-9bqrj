# Unhandled Promise Rejection with fs.readFile in Node.js

This repository demonstrates a common error in Node.js asynchronous programming using `fs.readFile` with async/await.  The `processFile` function uses `await` to handle the promise returned by `readFile`, however it doesn't handle a potential rejection if the file doesn't exist.  This can lead to unhandled promise rejections and silent errors.

## Steps to Reproduce

1. Clone this repository.
2. Run `node bug.js`

You'll see an error message in the console about an unhandled promise rejection. The `processFile` function doesn't explicitly catch the error if file reading fails.

## Solution

The solution involves properly handling the rejection in the `catch` block of the `try...catch` statement, providing more robust error handling and preventing silent failures.

## Additional Notes

Always handle potential errors when working with asynchronous operations in Node.js. This prevents unexpected crashes and improves the stability and reliability of your applications.