



//   The for statement is used to execute a block of code a specified number of times, 
//   A for loop that counts from 0 to 9
for (let i = 0; i < 10; i++) {
  console.log(i);
}



//   while the while statement is used to execute a block of code as long as a specified condition is true. 
// A while loop that counts from 0 to 9
let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}


//   The if statement is used to execute a block of code if a specified condition is true, and the else statement is used to execute a different block of code if the same condition is false. 


//  The continue statement is used to skip the current iteration of a loop and continue to the next iteration.
// Using the continue statement to skip the rest of the current iteration of a loop
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    // Skip even numbers
    continue;
  }
  console.log(i);
}

// Using an if statement to check a condition
let x = 10;
if (x > 5) {
  console.log("x is greater than 5");
} else {
  console.log("x is not greater than 5");
}





// Using a switch statement to select one of several cases to execute


let fruit = "apple";
switch (fruit) {
  case "apple":
    console.log("This is an apple");
    break;
  case "banana":
    console.log("This is a banana");
    break;
  default:
    console.log("This is some other fruit");
    break;
}



                                           //Recursion                                  
     
//  Recursion is a programming technique in which a function calls itself in order to solve a problem. This allows the function to repeat a set of instructions on a smaller scale, gradually working towards a solution to the overall problem. Recursion is often used to solve problems that can be divided into smaller, similar problems, such as searching for an item in a sorted list or traversing a tree data structure.

//  It is somehow used to avoid performing repetitive task
//  But Always using Recursion is costly.....

function factorial(n) {
  if (n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(factorial(5));  // 120

// In this example, the factorial function calculates the factorial of a number n by calling itself with n - 1 until n is equal to 1. At that point, the recursive calls stop and the factorial is returned.



                               //BST

//A binary search tree is a data structure that is used to store and retrieve data in a way that allows for efficient searching. In a binary search tree, each node has at most two children, and the left child of a node contains a value that is less than or equal to the value of the parent node, while the right child of a node contains a value that is greater than the value of the parent node. This allows for quick searching of the tree, since a search can be focused on a particular subtree based on the value of the current node.


//Example of BST

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let currentNode = this.root;
    while (true) {
      if (value === currentNode.value) return undefined;
      if (value < currentNode.value) {
        if (currentNode.left === null) {
          currentNode.left = newNode;
          return this;
        }
        currentNode = currentNode.left;
      } else {
        if (currentNode.right === null) {
          currentNode.right = newNode;
          return this;
        }
        currentNode = currentNode.right;
      }
    }
  }
}


//In this example, the BinarySearchTree class has a root property that refers to the root node of the tree. The insert method is used to add new nodes to the tree. It starts at the root node and compares the value of the new node to the value of the current node. If the value is less than the current node's value, it moves to the left child. If the value is greater than the current node's value, it moves to the right child. This continues until it finds an empty spot where the new node can be inserted.



         
                                       //closure

//A closure is a function that is defined inside another function and has access to the variables and parameters of the outer function. This allows the inner function to retain access to the variables and parameters of the outer function even after the outer function has returned. Closures are often used in JavaScript to create function factories, which are functions that return new functions with pre-defined behavior.



function outerFunction(x) {
  let innerVariable = x;
  return function innerFunction() {
    return innerVariable;
  }
}

const inner = outerFunction(5);
console.log(inner());  // 5


//In this example, the outerFunction defines a variable innerVariable and returns an inner function. The inner function has access to innerVariable, even though outerFunction has already returned. When we call the inner function, it returns the value of innerVariable (in this case, 5).