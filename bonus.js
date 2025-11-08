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
