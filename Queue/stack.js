class Node{
    constructor(val){
      this.val = val
      this.next = null
    }
  }
  class Stack{
    constructor(){
      this.top = null
      this.size = 0
    }
    push(val){
       const newNode = new Node(val)
       newNode.next = this.top
       this.top = newNode
       this.size++
    }
    pop(){
      if(this.top=== null){
        console.log("stack is empty");
        return
      }
      this.top = this.top.next
      this.size--
    }
   peek(){
    if(this.top=== null){
      console.log("stack is empty");
      return
    }
    return this.top.val;
   }
  
   display(){
    if(this.top=== null){
      console.log("stack is empty");
      return
    }
      let arr = []
      let cur = this.top
      while(cur != null){
       arr.push(cur.val)
       cur = cur.next
      }
      console.log(arr.reverse());
      
   }
  }
  
  let obj = new Stack();
  obj.push(10);
  obj.push(20);
  obj.push(30);
  obj.push(40);
  obj.display();
  obj.pop();
  obj.display()
  console.log(obj.peek());