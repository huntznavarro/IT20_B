class Stack{
    constructor(){
        this.data ={};
        this.topIndex = -1;
    }



    push(element){
        this.topIndex++;
        this.data[this.topIndex] = element;
    }


      traverse(){
        let output = "";
        for(let i=0; i<=this.topIndex; i++){
            output += this.data[i] + " "; 
        }
            console.log(output);
    }

     is_empty(){
        return this.topIndex ===-1;
    }

    size(){
        return this.topIndex+1;
    }

    peek(){
        // correcting statement
        return this.data[this.topIndex];
    }


}

// 
let stack = new Stack();

console.log(stack1.is_empty());

stack.push(4);
stack.push(2);
stack.push(3);
stack.push(5);
stack.push(8);
console.log("The current size is" +stack1.size());
console.log("The top element is"+stack1.peek());
console.log("The top Element"+stack1.peek());
console.log("Top Element" +stack1.pop()+ "is popped,the new top elemet is "+ stack1.peek());
console.log("The new stack size is" +stack1.size());