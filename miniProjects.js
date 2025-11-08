//Biggest of Two Numbers 

let a = 9;
let b = 4;

if(a>b){
  console.log(a,"is Greater");
}else{
  console.log(b,"is lesser");
  }


// Voting Eligibility 

let Age = 14;

if(Age >= 18){
  console.log("Eligible to vote");
}else{
  console.log("Not Eligible");
}

//Multiplication of Table

let n = 6;

for(let i=1; i<=10; i++){
  console.log(n + " x " + i + " = " + (n * 1 ));
}



//Function Section 
//crate a function that print "Welcome to javaScript"

function greet(){
  console.log("Welcome to Javascript");
}

//Print the Function
greet();

//create a Fuction that takes two numbers and return theri sum

function sum(a,b){
  return a+b;
};
let result = sum(10,6);
console.log(result);

//Craete a function that takes a number and returns Square of it.

function Square(n){
  return n*n;
};
let ans = Square(5);
console.log(ans);

// Create function name largest(x,y) but returns only biggest number

function largest(x,y){
  if (x>y){
    console.log(x,"Largest");
  }else{
    console.log(y,"Largest");
  }
};

largest(2,3);

//Create a Function that take your name and return "Hello,".

function hello(name){
  console.log("hello , " + name );
}
hello("habiba");

//create an arrow function that multiply two number

let multiply = (n,m) => {
  return m*n;
};
console.log(multiply(10,10));

//Craete a function that checks if a number is :

function checkNum(r){
  if(r > 0){
    console.log(r,"Positive Number");
  }else if(r < 0){
    console.log(r,"Negative Number");
  }else {
    console.log(r,"Zero")
  };
};
checkNum(-7);
