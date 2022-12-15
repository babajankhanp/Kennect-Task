// Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
      if (num % i == 0) return false;
    }
    return true;
  }
  
  // Function to find the next prime number after a given number
  function findNextPrime(num) {
    // Start from the next number after the input
    let next = num + 1;
    // Keep checking numbers until we find a prime
    while (!isPrime(next)) {
      next++;
    }
    // Return the first prime number we find
    return next;
  }
  
  
   
  
    function diffToNextPrime(num) {
    // Check if the input number is prime
    if (isPrime(num)) {
      // If it is, find the next prime number
      let nextPrime = findNextPrime(num);
      // Return the difference between the two numbers
      return nextPrime - num;
    } else {
      // If the input number is not prime, return -1
      return -1;
    }
  }
  const x=11;
  console.log(x)
  console.log(`${x} is Prime number ${isPrime(x)}`)
  console.log(`The next  Prime number  to ${x} is ${findNextPrime(x)}`)
  console.log(`The diffrence between prime number ${x} and Next prime Number ${findNextPrime(x)} is ${diffToNextPrime(x)}`)