// binary search TREE

class binarySearchTree {
  constructor() {
    this.root = null;
  }
  // insert
  insert(value) {
    const newNode = {
      value: value,
      left: null,
      right: null,
    };
    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (value < currentNode.value) {
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }
  //   lookUp
  //   let's search a node

  searching(value) {
    if (this.root === null) {
      return "No Node is inserted";
    }

    let currentNode = this.root;
    while (currentNode) {
      if (value < currentNode.value) {
        // go to left side
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        return currentNode.value;
      }
    }

    return "Nothing is found";
  }
}

const test = new binarySearchTree();
test.insert(120);
test.insert(5);
test.insert(15);
test.insert(52);
test.insert(2);
console.log("search", test.searching(1589));
console.log(test);

const recurSiveFactorial = (number) => {
  if (number === 1) {
    return 1;
  }
  return number * recurSiveFactorial(number - 1);
};
// console.log(recurSiveFactorial(5));

/* 

recurSiveFactorial(5) =
5 * recurSiveFactorial(4) =
5 * (4 * recurSiveFactorial(3)) =
5 * (4 * (3 * recurSiveFactorial(2))) =
5 * (4 * (3 * (2 * recurSiveFactorial(1)))) =
5 * (4 * (3 * (2 * 1))) =
5 * (4 * (3 * 2)) =
5 * (4 * 6) =
5 * 24 =
120

*/
