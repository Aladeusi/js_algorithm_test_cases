//this algorithm reverses a word laterally


//method 1 using js inbuit functions
const reverseWord=(word)=>{
  try{
  //get array of characters in word;
  console.log(word.split("").reverse().join(""));

  }catch(ex){
  //log error encounterred.
    console.error(ex);
  }
}


//method 2 using recursive function
//this compute n! using recursion
let ans=1;

const reverseWordWithRecusion = (word, len)=>{
  if(n=0){
    // if n=0
    //exit case
    console.log(ans)
  }else{
    ans=ans*n;
    factorial(n-1);
  }
}

//execute function
reverseWord("algorithm")
reverseWordWithRecursion("algorithm")