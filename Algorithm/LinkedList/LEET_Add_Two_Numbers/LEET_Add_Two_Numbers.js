/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    /* 
      연결리스트 풀때 temp, node로 두어서 주로 푼다고함 
      why?> node는 결과물을보기 위한 시작부분 포인터,
         temp는 포인터를 변경시키며 값을 변경시키는 용도인듯함.
    */
    const node = new ListNode()
    let temp = node
    let carry = 0;
  
    while(l1||l2||carry){
      let SumData = carry;
      if(l1){
          SumData +=l1.val
          l1=l1.next
      }
      if(l2){
          SumData +=l2.val
          l2=l2.next
      }
      carry = Math.floor(SumData/10)
      temp.next = new ListNode(SumData%10)
      temp=temp.next
    }
    return node.next
  };