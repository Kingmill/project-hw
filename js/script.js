const fizzBuz=(numbegin,numend)=>
{
    for(let i = numbegin;i<=numend;i++){
        if(i%3===0 && i%5===0){
            console.log ('FizzBuz');
        }
         else if(i%3===0){
           console.log ('Fizz');
        }
        else if(i%5===0){
            console.log ('Buz');
        }
        else{
            console.log (i);
        }
    }
}
console.log(fizzBuz(11,100));

// type error
// const num = 13;
// const num1 = length(54);

// reference error
//aer(15);

//syntax error
// syntax=0;)
// console.log(syntax);