class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class SLL{
    constructor(head = null) {
        this.head = head
    }
    addFront(val){
        let newNode = new Node(val)
        newNode.next = this.head
        this.head = newNode
        return this
    }
    display(){
        if (!this.head){
            return null
        } else {
            let SLLDisplay = ""
            let runner = this.head
            while(runner) {
                SLLDisplay += runner.val
                if (runner.next){
                    SLLDisplay += ", "
                }
                runner = runner.next
            }
            return SLLDisplay
        }
        
    }
}

let SL = new SLL()
console.log(SL.addFront(76).addFront(2).addFront(11.41))
console.log(SL.display())