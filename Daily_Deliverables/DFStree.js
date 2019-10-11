class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // add a node to the tree
  add(value) {
    let newNode = { value, left: null, right: null };

    // set the root if we don't have one
    if (this.root == null) {
      this.root = newNode;
      return;
    }

    let current = this.root;

    while (true) {
      // check for right
      if (value > current.value) {
        // add right
        if (!current.right) {
          current.right = newNode;
          break;
        }

        current = current.right;

        // check for left
      } else if (value < current.value) {
        // add left
        if (!current.left) {
          current.left = newNode;
          break;
        }

        current = current.left;
      } else {
        // if it's the same ignore
        break;
      }
    }
  }

  // search for a specific value
  contains(value) {
    let current = this.root;

    while (current) {
      if (current.value == value) {
        return true;
      } else if (current.value > value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    return false;
  }
}

class DepthFirstTraverser extends BinarySearchTree {
  // pre-order -> root, left, right
  // in-order -> left, root, right
  // post-order -> left, right, root
  constructor() {
    super();
    this.traverseMethod = "pre-order";
  }

  setTraverseMethod(traverseMethod) {
    if (
      traverseMethod == "pre-order" ||
      traverseMethod == "in-order" ||
      traverseMethod == "post-order"
    ) {
      this.traverseMethod = traverseMethod;
    } else {
      console.error(
        'Not a valid search method, must be "pre-order", "in-order" or "post-order"'
      );
    }
  }

  getTraverseMethod() {
    return this.traverseMethod;
  }

  traverse() {
    switch (this.traverseMethod) {
      case "pre-order":
        this._preOrderTraverse(this.root);
        break;
      case "in-order":
        this._inOrderTraverse(this.root);
        break;
      case "post-order":
        this._postOrderTraverse(this.root);
        break;
      default:
        console.error("invalid traverse method");
    }
  }

  _preOrderTraverse(node) {
    if (node === null) return;

    console.log(node.value);
    this._preOrderTraverse(node.left);
    this._preOrderTraverse(node.right);
  }

  _inOrderTraverse(node) {
    if (node === null) return;

    this._inOrderTraverse(node.left);
    console.log(node.value);
    this._inOrderTraverse(node.right);
  }

  _postOrderTraverse(node) {
    if (node === null) return;

    this._postOrderTraverse(node.left);
    this._postOrderTraverse(node.right);
    console.log(node.value);
  }
}

class BreadthFirstTraverser extends BinarySearchTree {
  traverse(value) {}
}

const myDFT = new DepthFirstTraverser();
myDFT.add(7);
myDFT.add(4);
myDFT.add(9);
myDFT.add(1);
myDFT.add(6);
myDFT.add(8);
myDFT.add(10);
//   console.log(myDFT);

myDFT.setTraverseMethod("pre-order");
console.log('t.method=',myDFT.getTraverseMethod());
myDFT.traverse();