
//this compute n! using recursion
let ans=1;

const factorial = (n)=>{
  if(n=0){
    // if n=0
    //exit case
    console.log(ans)
  }else{
    ans=ans*n;
    factorial(n-1);
  }
}

//execute factorial
factorial(5);
