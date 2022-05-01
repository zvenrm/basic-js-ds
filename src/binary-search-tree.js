const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node{
  constructor(value){
    this.data = value
    this.left = null
    this.right = null

  }
}

class BinarySearchTree {
  constructor(){
    this.main = null
  }

  root() {
    return this.main
  }

  add(data) {
    this.main = addNode(this.main, data)
    function addNode(node, data){
      if(!node){
        return new Node(data)
      }
      if(node.data === data){
        return node
      }
      if(data < node.data){
        node.left = addNode(node.left, data)
      }else{
        node.right = addNode(node.right, data)
      }
      return node
    }
  }

  has(data) {
    return hasNode(this.main, data)

    function hasNode(node, data){
      if(!node){
        return false
      }
      if(node.data === data){
        return true
      }
      
      return data < node.data ? hasNode(node.left, data) : hasNode(node.right, data)
    }
  }

  find(data) {
    return findNode(this.main, data)

    function findNode(node, data){
      if(!node){
        return null
      }
      if(node.data === data){
        return node
      }
      
      return data < node.data ? findNode(node.left, data) : findNode(node.right, data)
    }
  }

  remove(data) {
    this.main = removeNode(this.main, data)
    function removeNode(node, data){
      if(!node){
        return null
      }
      if(data < node.data){
        node.left = removeNode(node.left, data)
        return node
      }else if(data > node.data){
        node.right = removeNode(node.right, data)
        return node
      }else{
        if(!node.left && !node.right){
          return null
        }else if(!node.left){
          node = node.right
          return node
        }else if(!node.right){
          node = node.left
          return node
        }

        let minRight = node.right
        while(minRight.left){
          minRight = minRight.left
        }
        node.data = minRight.data
        node.right = removeNode(node.right, minRight.data)
        return node
      }
    }
  }

  min() {
    if(!this.main){
      return null
    }

    function minNode(node){
      if(!node.left){
        return node.data
      }
      return minNode(node.left)
    }
    return minNode(this.main)
    
  }

  max() {
    if(!this.main){
      return null
    }
    function maxNode(node){
      if(!node.right){
        return node.data
      }
      return maxNode(node.right)
    }
    return maxNode(this.main)
  }
}

module.exports = {
  BinarySearchTree
};