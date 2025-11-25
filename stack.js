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


let stack = new Stack();

console.log(stack1.is_empty());
stack.empty();
stack.push(4);
stack.push(2);
stack.push(3);
stack.push(5);
stack.push(8);
console.log(stack1.is_empty());
console.log(stack1.size());