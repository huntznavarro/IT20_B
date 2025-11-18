// function add(num1,num2){
//     sum = num1 + num2
//     console.log(sum);
// }
//  console.log (add(10,9));

 
// function diff(num1,num2){

//     diff = num1 - num2
//     console.log(diff);
// }
//     console.log (diff(10,9));

// function prod(num1,num2){

//     prod = num1*num2
//     console.log(prod);  
// }
//       console.log(prod(10,9));

// function quo(num1,num2){
//     quo = num1 / num2
//     console.log(quo);   
// }
//      console.log(quo(10,9));


     function LegalAge(age){
        if(age >=18){
            console.log("You are are adult");   
        }else{
            console.log("you are not an adult")
        }

     }

     LegalAge(69);


 function ComputerGrade(grade){
    if(grade >=94.5){
        console.log("1");

    }else if(grade=>91.5){
        console.log("1.25");

    }else if(grade>= 89.5){
        console.log("1.50");

    }else if(grade>=86.5){
        console.log("1.75");

    }else if (grade>= 84.5){
        console.log("2");
        
    }else {
        console.log("Not within the transmutation");
    }
 }  
 
 ComputerGrade(87);