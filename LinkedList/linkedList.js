class Node{
    constructor(val){
     this.val = val
     this.next = null
     this.size = 0
    } 
}

class LinkedList{
    constructor(){
        this.head = null
    }

//============================================ Insert a Node at first in list =====================================
    insertAtFirst(val){
      let newNode = new Node(val)
      if(this.head==null){
        this.head = newNode
        return
      }  
      newNode.next = this.head;
      this.head = newNode
    }

//============================================ Insert a Node at last in  list =====================================


    insertAtLast(val){
        let newNode = new Node(val);
    if(this.head==null){
        this.head = newNode;
        return
    }
        
    let cur = this.head;
    while(cur.next != null){
        cur = cur.next;
    }
    cur.next = newNode;
    }

//============================================ Delete a Node at first in list =====================================


    deleteAtFirst(){
        if(this.head==null){
            console.log("no node found")
            return
        }

        if(this.head.next==null){
            this.head = null
            return
        }
        this.head = this.head.next
    }


//============================================ Delete a Node at last in list =====================================


    deleteAtLast(){
        if(this.head==null || this.head.next == null){
           this.head = null
            return
        }
        let cur = this.head;
        while(cur.next.next != null){
            cur = cur.next
        }
        cur.next = null
    }


    print(){
        if(this.head==null){
            console.log("no node found");
            return
        }
        let temp = this.head;
        let ans = [];
        while(temp != null){
           ans.push(temp.val)
           temp = temp.next;
        }
        console.log(ans.join("->")+"->null");
        
    }

//============================================ Insert at given Position Node in list =====================================


    insertAtPos(val , pos){//10
        if(pos<1 || this.size+1<pos){
         console.log("out of bound");
         return
        }
        if(pos==1){
         this.insertAtFirst(val)
         return
        }
        if(pos==this.size+1){
         this.insertAtLast(val)
         return
        }
        this.size++;
        let cur = this.head
        let i =1;
        while(i<pos-1){
         cur = cur.next;
         i++
        }
        let newNode = new Node(val)
        newNode.next = cur.next
        cur.next = newNode
     }

//============================================ Delete a node from given Position Node in list =====================================

 
     deleteAtPos(pos){
        if(pos<1 || this.size<pos){
          console.log("out of bound");
          return
        }
        if(pos==1){
          this.deleteAtFirst()
          return
        }
        if(pos==this.size){
          this.deleteAtLast()
          return
        }
        this.size--;
        let i = 1;
        let cur = this.head;
        while(i<pos-1){
          cur = cur.next;
          i++
        }
        cur.next = cur.next.next
      }
  
  
}

let obj = new LinkedList()
obj.insertAtFirst(10)
obj.insertAtFirst(20)
obj.insertAtFirst(30)
obj.insertAtFirst(40)
obj.insertAtLast(50)
obj.insertAtLast(60)
obj.insertAtLast(70)
obj.deleteAtFirst()
obj.print()
obj.deleteAtLast()
obj.print()