//write a program to prints all even numbers between 1 to 50

for(let i=1; i<=20; i++){
  if (i % 2 === 0){
    console.log(i);
  }
}
//Array

//Print number greater than 10

let nums = [5,10,15,6,90,6,4,7,67,45];
for (let i = 1; i <=nums.length; i++){
  if (nums[i] > 10){
    console.log(nums[i]);
  }
}

//Names with more than Four Letters 

let names = ["Rehan","Habiba","Anam","Maya","Siya"];

for (let i = 0 ; i < names.length ; i++){
  if (names[i].length > 4 ){
    console.log(names[i]);
  }
}

//Largest Smallest number using Array

let arr = [22, 5, 78, 45, 10];

let min = arr[0];
let max = arr[0];   

for (let i = 1 ; i < arr.length; i++ ){
  if (arr[i] > max) {
    max = arr[i];
  }
  if (arr[i] <  min) {
    min = arr[i];
  }
}

console.log("Largest:",max);
console.log("Smallest:",min);

// Remove Frist & Last Element Without pop / Shift

let data = [10, 20, 30, 40, 50, 60];

let newData = data.slice(1, data.length - 1);

console.log(newData);

//Reverse array WITHOUT reverse()
let nums2 = [1, 2, 3, 4, 5];
let reversed = [];

for (let i = nums2.length - 1; i >= 0; i--) {
  reversed.push(nums2[i]);
}

console.log(reversed);


//Objects

//Create an object for a car with keys: brand, model, year. Print the brand. 

let car = {
  brand:"honda",
  model:"civic",
  year: 2009,
};
console.log(car.brand);

car.color = "Red";
console.log(car);

//Create an object for student and print all keys using a for-in loop
let student = {
  name:"Habiba",
  age :18,
  class: "SYCS",
  marks: "92"
};

for (let key in student){
  console.log(key);
}

//Create a nested object for a person

let person = {
  name : "Ali",
  address : {
    city: "Mumbai",
    pincode : "400001"
  }
};
console.log(person.address.pincode);

//Create a object of 3 Products and print the price of the 2nd product

let products = {
  product1: {
    name:"Laptop", price: 50000 },
  product2: {
    name:"Mouse", price: 500 },
  product3: {
    name:"Keyboard", price: 1200 },
  };

console.log(products.product2.price);

// Check if a key named "age" exists in an object.

let person2 = {
  name : "Muskan",
  age:18,
  city: "Mumbai",
  pincode : "400001"
};

if("age" in person2){
  console.log("Age key exists");
}else{
  console.log("Age key does not exists")
}

//Convert object value into array using object.values()

let student2 = {
  name:"Rehan",
  age:19,
  marks:90
};

let valuesArray = Object.values(student2);
console.log(valuesArray);

//Convert object keys into an array using Object.keys().

let student3 = {
  name:"Rehan",
  age:19,
  marks:90
};

let keysArray = Object.keys(student3);
console.log(keysArray);

//Create an array of objects (3 students) and print the name of the student with highest marks.
let students = [
  {name:"Habiba", marks:78},
  {name:"Rehan", marks:78},
  {name:"Muskan", marks:79},
]
let topper = students[0];

for (let i = 1; i<student.length;i++ ){
  if (students[i].marks > topper.marks){
    topper = students[i];
  }
}
console.log("Topper is:", topper.name);

//Merge two objects WITHOUT using object.assign() or spread();

let obj1 = {
  name : "Habiba",
  age : 18
};

let obj2 = {
  city : "Mumbai",
  marks:90
}
let merged = {};

for (let key in obj1){
  merged[key] = obj1[key];
}

for (let key in obj2){
  merged[key] = obj2[key];
}
console.log(merged);




