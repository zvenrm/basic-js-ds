const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  let tmp = l //переменная для перемещения по списку
  if(l.value === k){ //если голова равна k, то перевод на следующий элемент
    l = l.next
  }
  while(tmp.next){ //выйдет из цикла когда tmp.next станет null
    if(tmp.next.value === k){ //если значение следующего элемента равно k, то перевод через одного и переприсваивание (типа удаление)
      tmp.next = tmp.next.next
    }
    else{
      tmp = tmp.next
    }
  }
  return l
}

module.exports = {
  removeKFromList
};
