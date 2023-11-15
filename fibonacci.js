class FibonacciCalculator {
  constructor() {
    // Memoization object to store calculated Fibonacci values
    this.memo = {};
  }

  calculateFibonacci(position) {
    // Base cases for Fibonacci series
    if (position === 0) {
      return 0;
    } else if (position === 1) {
      return 1;
    }

    // Check if the value is already calculated and stored in memo
    if (this.memo[position] !== undefined) {
      return this.memo[position];
    }

    // Recursive calculation and memoization
    const result =
      this.calculateFibonacci(position - 1) +
      this.calculateFibonacci(position - 2);

    // Store the result in memo for future use
    this.memo[position] = result;

    return result;
  }
}

// Example usage
const fibonacciCalculator = new FibonacciCalculator();
const position = 10; // Change this to the desired position in the Fibonacci series

const result = fibonacciCalculator.calculateFibonacci(position);

console.log(`Fibonacci value at position ${position} is: ${result}`);
