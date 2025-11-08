// Function 

//Normal Function 
function greet(){
    console.log("HELLO WORLD");
}

greet();

//Parameter Function 
function greets(name,age){
    console.log("Hello" + name,age)
}

greets(" habiba" , 18);

// Function with Return 
function add(a,b){
    return a+b;
}
let result = add(10,5);
console.log(result);

//Function  Expression 
let Multiply =function(c,d){
    return c*d;
};

console.log(Multiply(4,7));

//Arrow Function  
let sub =(a, b)=>{
    return a-b;
};
console.log(sub(10,1));

//Short Arrow Function 
let square = n => n*n;
console.log (square(5));
